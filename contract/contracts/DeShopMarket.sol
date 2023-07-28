//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./DeShopNFT.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract DeShopMarket is Ownable, ReentrancyGuard, ERC1155Holder {
	using SafeMath for uint;

	uint private currentMarketId = 0;
	uint private currentCategoryId = 0;

	mapping (uint => string) public idToCategory;
	mapping (uint => MarketItem) public idToMarketItem;

	struct MarketItem {
		uint id;
		string category;
		address contractAddress;
		uint tokenId;
		address seller;
		uint price;
		bool isActive;
	}

	event CategoryCreated(uint indexed id, string name);
	event CategoryDeleted(uint indexed id);
	event MarketItemCreated(uint indexed id, string category, address contractAddress, uint tokenId, uint price, bool isActive);
	event MarketItemDeleted(uint indexed id);
	event MarketItemUpdated(uint indexed id, uint price);
	event Buy(uint indexed id, string category, address contractAddress, uint tokenId, uint price);
	event Withdraw(uint amount);

	constructor() {}

	function createCategory(string memory _category) public onlyOwner {
		currentCategoryId = currentCategoryId.add(1);
		idToCategory[currentCategoryId] = _category;

		emit CategoryCreated(currentCategoryId, _category);
	}

	function deleteCategory(uint _categoryId) public onlyOwner {
		idToCategory[_categoryId] = "";

		emit CategoryDeleted(_categoryId);
	}

	function getAllCategories() public view returns(string[] memory categories) {
		uint counter = 0;
		for (uint i = 0; i <= currentCategoryId; i++) {
			if (bytes(idToCategory[i]).length > 0) {
				counter = counter.add(1);
			}
		}
		categories = new string[](counter);
		counter = 0;
		for (uint i = 0; i <= currentCategoryId; i++) {
			if (bytes(idToCategory[i]).length > 0) {
				categories[counter] = idToCategory[i];
				counter = counter.add(1);
			}
		}
	}

	function createMarketItem(uint _categoryId, address _contractAddress, uint _tokenId, uint _price) public onlyOwner {
		require(bytes(idToCategory[_categoryId]).length > 0, "Category does not exist, please try different category id");
		currentMarketId = currentMarketId.add(1);
		idToMarketItem[currentMarketId] = MarketItem(currentMarketId, idToCategory[_categoryId], _contractAddress, _tokenId, msg.sender, _price, true);

		emit MarketItemCreated(currentMarketId, idToCategory[_categoryId], _contractAddress, _tokenId, _price, true);
	}

	function deleteMarketItem(uint _marketItemId) public onlyOwner {
		require(_marketItemId <= currentMarketId, "This market item does not exist");
		idToMarketItem[_marketItemId].isActive = false;

		emit MarketItemDeleted(_marketItemId);
	}

	function updateMarketItemPrice(uint _marketItemId, uint _price) public onlyOwner {
		require(_marketItemId <= currentMarketId, "This market item does not exist");
		idToMarketItem[_marketItemId].price = _price;

		emit MarketItemUpdated(_marketItemId, _price);
	}

	function getAllMarketItems() public view returns(MarketItem[] memory marketItems) {
		uint counter = 0;
		for (uint i = 0; i <= currentMarketId; i++) {
			if (idToMarketItem[i].isActive == true) {
				counter = counter.add(1);
			}
		}
		marketItems = new MarketItem[](counter);
		counter = 0;
		for (uint i = 0; i <= currentMarketId; i++) {
			if (idToMarketItem[i].isActive == true) {
				marketItems[counter] = idToMarketItem[i];
				counter = counter.add(1);
			}
		}
	}

	function buy(uint _marketItemId) public payable nonReentrant {
		MarketItem memory currentMarketItem = idToMarketItem[_marketItemId];
		require(currentMarketItem.seller != msg.sender, "Cannot buy market item listed by yourself");
		require(currentMarketItem.price == msg.value, "Insufficient fund");
		(bool sent,) = payable(address(this)).call{value: msg.value}("");
        require(sent, "Failed to send Ether");
		DeShopNFT(currentMarketItem.contractAddress).safeTransferFrom(address(this), msg.sender, currentMarketItem.tokenId, 1, "");

		emit Buy(_marketItemId, currentMarketItem.category, currentMarketItem.contractAddress, currentMarketItem.tokenId, currentMarketItem.price);
	}

	function withdrawFund() public onlyOwner {
		uint balance = address(this).balance;
		(bool sent,) = msg.sender.call{value: address(this).balance}("");
		require(sent, "Failed to withdraw Ether");

		emit Withdraw(balance);
	}

	receive() external payable {}
}