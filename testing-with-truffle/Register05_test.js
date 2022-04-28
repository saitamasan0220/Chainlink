// In migrations folder
// Create 2_deploy_contracts.js

// //Begin
// var Register05 = artifacts.require("Register05");

// module.exports = function(deployer) {
//   deployer.deploy(Register05);
// };
//End

// In test folder
// Create
// Register05_test.js

//Begin
const Register05 = artifacts.require('Register05')

contract('Register05', (accounts) => {
  const message = 'Hello Chainlink'

  before(async () => {
    register = await Register05.new({ from: accounts[0] })
  })

  describe('Constructor', () => {
    it('accounts[0] should be the owner', async () => {
      const response = await register.owner()
      assert.equal(response, accounts[0], 'accounts[0] is NOT the owner')
    })

    it('accounts[0] should be in the whitelist', async () => {
      const response = await register.whiteList(accounts[0], {
        from: accounts[0],
      })
      assert.isTrue(response, 'accounts[0] is NOT in the whitelist')
    })

    it('accounts[1] should not be in the whitelist', async () => {
      const response = await register.whiteList(accounts[1], {
        from: accounts[0],
      })
      assert.isFalse(response, 'accounts[1] is in the whitelist')
    })
  })

  describe('Info actions', () => {
    it('accounts[0] should addInfo', async () => {
      await register.addInfo(message, { from: accounts[0] })
      const response = await register.info(0)
      assert.equal(response, message, 'message is wrong')
    })

    it('accounts[0] should setInfo', async () => {
      await register.addInfo(message, { from: accounts[0] })
      const message2 = 'Have fun in the Chainlink hackathon'
      await register.setInfo(0, message2, { from: accounts[0] })
      const response = await register.info(0)
      assert.equal(response, message, 'message2 is wrong')
    })
  })
})
