import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MyRoutes from "./routes/routes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="App">
          <MyRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
