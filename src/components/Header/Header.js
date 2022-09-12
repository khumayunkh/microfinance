import React from "react";
import style from './header.module.css'

function Header(){
    return(
        <>
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.call}>
                    <div className={style.logo}>
                        <div className={style.logo_in}>
                            <div className={style.yellow}></div>
                            <div className={style.green}></div>
                        </div>
                        <h1>Монета в кармане</h1>
                    </div>
                    <div className={style.call_in}>
                        <h2>+7 (495) 115-50-95</h2>
                        <button>Личный кабинет</button>
                    </div>
                </div>
            </div>    
            <div className={style.information}>
                <h2>О компании</h2>                    
                <h2>Услуги</h2>
                <h2>Тарифы</h2>
                <h2>Способы погашения</h2>
                <h2>Документы</h2>
                <h2>Ответы на вопросы</h2>
                <h2>Контакты</h2>
            </div>
        </div>
        </>
    )
}

export default Header