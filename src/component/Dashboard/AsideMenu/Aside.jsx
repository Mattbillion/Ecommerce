import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Aside.css";

export default function Aside({ asideMenu }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  console.log({asideMenu});
  return (
    <div className="aside-menu">
      <img className="Dashboard-icon" src="./assets/Navigation/Logo.png" alt="logo" />
      {asideMenu.map((item, index) =>
        current === index ? (
          <div key={index} className="aside-menu-item aside-menu-item-active">
            <img src={item.img} alt="" />
            {item.name}
          </div>
        ) : (
          <div
            key={index}
            className="aside-menu-item"
            onClick={() => {
              setCurrent(index);
              navigate(item.url);
            }}
          >
            <img src={item.img} alt="" />
            {item.name}
          </div>
        )
      )}
    </div>
  );
}
