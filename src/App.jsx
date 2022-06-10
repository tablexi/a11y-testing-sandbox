import "./App.css";
import logo from "./TXI-Icon-ColorOnLight-RGB.png";

import A11yContent from "./components/a11y/Content";
import AsIsContent from "./components/as_is/Content";

function App() {
  return (
    <section className="main">
      <header>
        <h1>Accessibility Testing Sandbox</h1>
      </header>

      <section className="comparison">
        <AsIsContent />
        <A11yContent />
      </section>

      <div className="logoContainer">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </section>
  );
}

export default App;
