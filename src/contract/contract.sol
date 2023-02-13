// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "hardhat/console.sol";

/**
 * @title Loyalty
 * @dev Set & change owner
 */
contract Loyalty {

    address public owner;

    mapping(uint256 => mapping(address => uint256)) public balances;

    struct Company {
        address owner;
        string name;
    }

    uint companyId = 0;

    // address owner
    mapping(uint256 => Company) public companies;

    function registerCompany(string memory name) public {
        Company memory co = Company(msg.sender, name);
        companies[companyId] = co;
        companyId += 1;
    }

    function issuePoints(uint256 companyId_, address user, uint amount) public {
        Company memory co = companies[companyId_];
        require(
            msg.sender == co.owner,
            "Not authorized to issue points for this company"
        );
        balances[companyId_][user] += amount;
    }

    function getNames(uint256[] memory ids) public view returns (string[] memory) {
        string[] memory names;
        for (uint i = 0; i < ids.length; i++) {
            names[i] = companies[ids[i]].name;
        }
        return names;
    }

    /**
     * @dev Set contract deployer as owner
     */
    constructor() {
        console.log("Loyalty contract deployed by:", msg.sender);
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
    }
} 