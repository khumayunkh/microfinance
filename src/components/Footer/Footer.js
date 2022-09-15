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

                </div>
                <div className={style.loan}>

                </div>
                <div className={style.contact}>

                </div>
            </div>
        </div>
        </>
    )
}

export default Footer