import React from "react";
import style from './footer.module.css'

function Footer(){
    
    return(
        <>
        <div className={style.container}>
            <div className={style.footer}>
                <div className={style.logo}>
                    <div className={style.logo_in}>
                        <div className={style.logo_color}>
                            <div className={style.yellow}></div>
                            <div className={style.green}></div>
                        </div>
                        <h1>Монета в кармане</h1>
                    </div>
                    <h2>+7 (495) 115-50-95</h2>
                    <h2>info@monetavkarmane.ru</h2>
                    <button>Личный кабинет</button>
                </div>
                <div className={style.about_company}>
                    <h2>О компании</h2>
                    <h2>Услуги</h2>
                    <h2>Тарифы</h2>
                    <h2>Способы погашения</h2>
                    
                </div>
                <div className={style.loan}>
                    <h2>Правила предоставления займов</h2>
                    <h2>Свидетельство МФО </h2>
                    <h2>Политика по персональным данным</h2>
                </div>
                <div className={style.contact}>
                    <h2>Образец заявленияна микрозайм</h2>
                    <h2>Список участников </h2>
                    <h2>Ответы на вопросы</h2>
                    <h2>Контакты</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer