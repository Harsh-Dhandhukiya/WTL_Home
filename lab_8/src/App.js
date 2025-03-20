import logo from "./logo.svg";
import "./App.css";
import Count from "./Count";  // ✅ Capitalized import

function App() {
  return (
    <div className="App">
      <Count /> {/* ✅ Correct usage of React component */}
    </div>
  );
}

export default App;
