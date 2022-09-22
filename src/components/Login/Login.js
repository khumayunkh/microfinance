import React from "react";
import style from './login.module.css'

function Login(){
    
    return(
        <>
        <div className={style.container}>
            <div className={style.login}>
                <h2>
                После отправки SMS на сервисный номер необходимая 
                сумма будет на банковском счете в течение 24 часов 
                или станет доступна практически моментально через 
                QIWI-кошелек или в любом из 9000 пунктов обслуживания
                </h2>
                <div className={style.login_in}>
                    <h3>
                        Вход в личный кабинет
                    </h3>
                    <input placeholder="Телефон"/>
                    <input placeholder="Код из SMS"/>
                    <button className={style.btn_1}>Bойти</button>
                    <button className={style.btn_2}>Bойти через Госуслуги</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login