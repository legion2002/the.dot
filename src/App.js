import React, {useEffect, useState} from "react";
import './App.css';

function isValidOwner() {
  return "0xabcd";
}
function App() {
    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        if (clicked) {
            const owner = isValidOwner();
            if (owner) {
                setText(owner)
            } else {
                window.location.href = "https://www.google.com";
            }
        }
    }, [clicked]);
  return (
    <div className="App">
      <header className="App-header">
          <div className="">
        {/*<img src={logo} className="App-real-logo" alt="logo" onClick={()=>setClicked(true)}/>*/}
          <div className='circle blue App-logo' onClick={() => {
              setClicked(true);
              // alert("clicked");
          }}>
              <p> {text} </p>
          </div>
          </div>
      </header>
    </div>
  );
}

export default App;
