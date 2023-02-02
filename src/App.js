import "./css/main.css";
import Listing from "./components/Listing";
const json = require("./data/etsy.json");

function App() {
  let items = [];
  json.forEach((item, idx) => {
    if (item.state === "active") {
      items.push(item);
    }
  });

  return <Listing items={items} />;
}

export default App;
