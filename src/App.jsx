import { useState } from "react";
import "./App.css";
import CalculateArea from "./components/CalculateArea";
import CalculateHypotenuse from "./components/CalculateHypotenuse";
import IsTraingle from "./components/IsTraingle";
import Quiz from "./components/Quiz";

function App() {
  const [tab, setTab] = useState("tab3");
  return (
    <div className="App">
      <h1>Everything Traingle</h1>
      <nav>
        <ol>
          <li
            onClick={() => setTab("tab1")}
            className={tab === "tab1" ? "active" : ""}
          >
            Is Triangle?
          </li>
          <li
            onClick={() => setTab("tab2")}
            className={tab === "tab2" ? "active" : ""}
          >
            Calculate Hypotenuse?
          </li>
          <li
            onClick={() => setTab("tab3")}
            className={tab === "tab3" ? "active" : ""}
          >
            Triangular Quiz
          </li>
          <li
            onClick={() => setTab("tab4")}
            className={tab === "tab4" ? "active" : ""}
          >
            Calculate Area
          </li>
        </ol>
      </nav>
      <main>
        {tab === "tab1" && <IsTraingle />}
        {tab === "tab2" && <CalculateHypotenuse />}
        {tab === "tab3" && <Quiz />}
        {tab === "tab4" && <CalculateArea />}
      </main>
    </div>
  );
}

export default App;
