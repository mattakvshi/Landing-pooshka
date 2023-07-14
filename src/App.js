import "./style/main.css";

import Header from "./components/header/Header";
import Choice from "./components/choice/Choice";
import Indicators from "./components/indicators/Indicators";

function App() {
  return (
    <div className="App">
      {/* <!----------------------------HEADER----------------------------------------> */}
      <Header />
      {/* <!----------------------------HEADER----------------------------------------> */}
      {/* <!-----------------------------MAIN-----------------------------------------> */}
      <Choice />
      <Indicators />
      {/* <!-----------------------------MAIN-----------------------------------------> */}
      {/* <!----------------------------FOOTER----------------------------------------> */}

      {/* <!----------------------------FOOTER----------------------------------------> */}
    </div>
  );
}

export default App;
