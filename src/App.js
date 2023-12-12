import './App.css';
import {useState} from "react";
import NavigationMenu from "./components/navigation/navigation_menu";
import Portfolio from "./pages/portfolio";



function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <NavigationMenu />
        <Portfolio />
      </div>
  );
}

export default App;