import { currAccount } from '@/composables/getWallet'

const connectWallet = () => {
    const { ethereum } = window;
    if(!ethereum){
      alert("Get Metamask!")
    }
    ethereum.request({method: 'eth_requestAccounts'})
      .then(accounts => {
        currAccount.value = accounts[0]
      })
      .catch(err => console.log(err))
  }

export default connectWallet