import "./App.css";
import background from "./assets/discord-background.png";
import logo from "./assets/discord-logo-white.png";
import menu from "./assets/menu-icon.png";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo"></img>
        <img src={menu} className="App-menu" alt="menu"></img>
      </div>
      <div className="content">
        <h1>IMAGINE A PLACE...</h1>
        <br />
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <br />
        <button className="Mac">Download for Mac</button>
        <br />
        <br />
        <button className="Browser">Open Discord in your browser</button>
      </div>

      <img src={background} className="App-background" alt="background"></img>
    </div>
  );
}

export default App;
