import { ref } from "vue"

const currAccount = ref(null)

const getWallet = () => {
    const { ethereum } = window;
    if(!ethereum){
      alert("Make sure you have metamask installed!")
      return
    }
    ethereum.request({method: 'eth_accounts'})
      .then(accounts => {
        if (accounts.lenght !== 0 ){
          currAccount.value = accounts[0]
        }else {
          console.log("No authorized account found")
        }
      })
  }

export { getWallet, currAccount }