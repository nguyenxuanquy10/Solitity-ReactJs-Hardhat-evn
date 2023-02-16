// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Kaba1 is ERC20 {
    constructor() ERC20("KaBa1", "DEV1") {
        _mint(msg.sender, 1000 * 1e18);
    }
}
