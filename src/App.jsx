import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <section className="main">
      <header>
        <h1>Accessibility Testing Sandbox</h1>
      </header>
      <div className="logoContainer">
        <img src={logo} className="logo" alt="logo" />
      </div>
    </section>
  );
}

export default App;
