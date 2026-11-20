import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Carts from "./components/Carts";
function App() {
  const [count, setCount] = useState(0);
  let hobby1=['dancing', 'singing' ,'playing' ]
  let hobby2=['A', 'B' ,'C' ]


  return (
    <>
    <h1 className="bg-amber-900 h-20 w-3px p-4 border-2 rounded-2xl ">
        Hello Guys
      </h1>
    <Carts username='The beautiful sun' hobby={hobby1}/>
    <Carts username='Happy day' hobby={hobby2}/>
    </>
  );
}

export default App;
