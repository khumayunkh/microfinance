import React from "react";
import "./Burger.css"

function Menu({ isOpen, onChange }){
    
    return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}
      >
        <img className="img_burger" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"/>
      </span>
      <div className="Menu-items">
          <a>О компании</a>
          <a>Услуги</a>
          <a>Тарифы</a>
          <a>Способы погашения</a>
          <a>Документы</a>
          <a>Ответы на вопросы</a>
          <a>Контакты</a>
      </div>
    </div>
    );
}

export default Menu;