import React, {useEffect, useState} from "react";
import './App.css';
import MetaMaskOnboarding from '@metamask/onboarding';

const connectWallet = async (setCurrentAccount) => {
    try {
        if (!window.ethereum) {
            const onboarding = new MetaMaskOnboarding({
                forwarderOrigin: "https://macaroon.web.app",
            });
            onboarding.startOnboarding();
        }

        const accounts = await window.ethereum.request({method: "eth_requestAccounts",});

        setCurrentAccount(accounts[0]);
    } catch (error) {
        console.log(error);

        throw new Error("No window.ethereum object");
    }
};

function isActualOwner(accountAddress) {
    console.log("CURRENT ACCOUNT", accountAddress);
    return true;
}
async function isValidOwner(currentAccount, setCurrentAccount) {
    let account = currentAccount;
    if (!account) {
        account = await connectWallet(setCurrentAccount);
    }
    if (account === undefined) {
        return ".";
    }
    if (isActualOwner(account)) {
        return account;
    }
    return "";
}
function App() {
    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState("");
    const [currentAccount, setCurrentAccount] = useState("");

    useEffect(() => {
        async function f(){

            const owner = await isValidOwner(currentAccount, setCurrentAccount);
            if (owner) {
                setText(owner)
            } else {
                window.location.href = "https://www.google.com";
            }
        }

        if (clicked && !text)
            f();
    }, [clicked, currentAccount, text]);
  return (
    <div className="App">
      <header className="App-header">
          <div className="">
        {/*<img src={logo} className="App-real-logo" alt="logo" onClick={()=>setClicked(true)}/>*/}
          <div className='circle blue App-logo' onClick={() => {
              setClicked(true);
              // alert("clicked");
          }}>
              <p style={{wordWrap: "break-word", width: "200px", margin: "auto"}}> {text} </p>
          </div>
          </div>
      </header>
    </div>
  );
}

export default App;
