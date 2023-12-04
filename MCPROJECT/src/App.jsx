import { useState } from "react";
import "./style/nav.css";
import "./style/swiper.css";
import Navbar from "./redux/navbar/Navbar";
import "swiper/css/pagination";
import "./style/page.css";
import Home from "./redux/home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Home />
    </>
  );
}

export default App;
