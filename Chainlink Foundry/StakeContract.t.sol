// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.10;

import "ds-test/test.sol";
import "../StakeContract.sol";
import "";

contract StakeContractTest is DSTest {
    StakeContract public stakeContract;
    MockERC20 public token;
    uint256 public constant AMOUNT = 1e18;

    function setUp() public {
        stakeContract = new StakeContract();
        token = new MockERC20();
    }

    // fuzz test
    // send random data to our function
    // the tests will be more robust
    function testStakingTokens(uint256 amount) public {
        token.approve(address(stakeContract), AMOUNT);
        bool success = stakeContract.stake(AMOUNT, address(token));
        assertTrue(success);
    }
}
