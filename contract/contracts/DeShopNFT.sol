//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155URIStorage.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DeShopNFT is ERC1155, Pausable, Ownable, ERC1155Burnable, ERC1155Supply, ERC1155URIStorage {
    string public name = "DeShopNFT";
    using SafeMath for uint;
    uint private currentId = 0;
    
    constructor() ERC1155("") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address account, uint amount, bytes memory data)
        public
        onlyOwner
    {
        currentId = currentId.add(1);
        _mint(account, currentId, amount, data);
    }

    function mintBatch(address to, uint[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        uint[] memory ids = new uint[](amounts.length);
        uint counter = 0;
        for (uint i = 0; i < amounts.length; i++) {
            currentId = currentId.add(1);
            ids[counter] = currentId;
            counter = counter.add(1);
        }
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    function uri(uint256 tokenId) public view override (ERC1155, ERC1155URIStorage) returns (string memory) {
        return super.uri(tokenId);
    }

    function setURI(uint256 tokenId, string memory tokenURI) public onlyOwner {
        _setURI(tokenId, tokenURI);
    }
}
