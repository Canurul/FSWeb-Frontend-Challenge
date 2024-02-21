import "./App.css";
import ModeSwitch from "./components/ModeSwitch";

export default function App() {
  return (
    <div className="site-container">
      <header>
        <ModeSwitch/>
      </header>
      <body></body>
      <footer></footer>
    </div>
  );
}
