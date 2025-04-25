import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // coin list가 처음으로 render 되면 함수를 즉시 실행시키고 싶음 
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => 
      setCoins(json),
      setLoading(false)
  );
  }, [])
 
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> :
      <select>
        {coins.map((coin) => 
        <option key={coin.id}>
          {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
        </option>)}
      </select>
      }
    </div>
  );
}

export default App;
