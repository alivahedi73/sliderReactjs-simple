import { useState } from "react";
import "./App.css";
const App = () => {
  let [click, setClick] = useState(false);
  return (
    <>
      <div className="banner">
        <div className="imgBox">
          <img src="../../../public/images/num1.jfif" className={`${click?"none":"active"}`} alt="" />
          <img src="../../../public/images/num2.jpg" className={`${click?"active":"none"}`} alt="" />
        </div>
        <ul className="control">
          <li className="n1" onClick={()=>setClick(!click)}>&#9664;</li>
          <li className="n2" onClick={()=>setClick(!click)}>&#9654;</li>
        </ul>
        <div className="paggnation">
          <div className={`m1 ${click?"nonebulet":"activebulet"}`} onClick={()=>setClick(false)}></div>
          <div className={`m1 ${click?"activebulet":"nonebulet"}`} onClick={()=>setClick(true)}></div>
        </div>
      </div>
    </>
  );
};

export default App;
