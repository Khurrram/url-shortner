import React, {useState} from "react";
import "./App.css";

function App() {
  const [url, setURL] = useState('');
  const [shorty, setShorty] = useState('');

  const submitForm = (e) => {
    fetch("http://localhost:3001/api/url/short", {
      method: "POST",
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({URL: url})
    })
      .then(res => res.json())
      .then((res) => {
        if (res === "Invalid origin URL") {
          setShorty("INVALID URL")
        } else {
          setShorty(res.shortURL)
        }
      })
      .catch(error => console.log(error));
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="Container">
      <form onSubmit={(e) => submitForm(e)}>
          <input type="text" name="originURL" onChange={(e) => setURL(e.target.value)} placeholder="Shorten your URL" id="menuTxt"/>
          <input type="submit" value="Shorten" id="menuBtn" />
      </form>
      </div>
      {shorty ? <input href={shorty} type="text" id="menuSpan" value={shorty} /> : <span />}
    </div>
  );
}

export default App;