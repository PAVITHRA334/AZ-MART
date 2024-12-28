import { useState } from "react";
import "./App.css";
import Fruits from "./cart/Fruits";
import Mobiles from "./cart/Mobiles";
import Login from "./cart/Login";

export default function App() {
  const [activeComponent, setactiveComponent] = useState("");
  const [isLogged, setLogged] = useState(false);

  const checklogin = (uname, password) => {
    if (uname === "admin" && password === "admin") {
      setLogged(true);
    }
    else{
      alert("Invalid Credentials")
    }
  };

  return (
    <div className="shopping">
      <h1 className="title">AZ MART</h1>
      <hr />
      {!isLogged ? (
        <Login onLogin={checklogin} />
      ) : (
        <>
          {activeComponent === "" && (
            <>
              <Fruits onActivate={() => setactiveComponent("Fruits")} />
              <Mobiles onActivate={() => setactiveComponent("Mobiles")} />
            </>
          )}
          {activeComponent === "Fruits" && (
            <Fruits isActivate={true} onActivate={() => setactiveComponent("")} />
          )}
          {activeComponent === "Mobiles" && (
            <Mobiles isActivate={true} onActivate={() => setactiveComponent("")} />
          )}
        </>
      )}
    </div>
  );
}

