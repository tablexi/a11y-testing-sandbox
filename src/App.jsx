import "./App.css";
import logo from "./logo.svg";

import A11yWrapper from "./components/a11y/Wrapper";
import AsIsWrapper from "./components/as_is/Wrapper";
import GeneralNotes from "./components/GeneralNotes";

function App() {
  return (
    <section className="main">
      <header>
        <h1>Accessibility Testing Sandbox</h1>
      </header>

      <GeneralNotes />

      <section className="comparison">
        <AsIsWrapper />
        <A11yWrapper />
      </section>

      <div className="logoContainer">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </section>
  );
}

export default App;
