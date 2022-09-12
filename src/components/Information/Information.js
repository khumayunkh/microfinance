import React from "react";
import style from './information.module.css'
import info from './../../images/Group.svg'

function Information(){
    return(
        <>
        <div className={style.container}>
            <div className={style.information}>
                <div className={style.information_in}>
                    <h2>
                        Мы можем помочь вам, 
                        когда вам срочно нужны деньги до зарплаты.  
                        Достаточно зарегистрироваться
                    </h2>
                    <div className={style.logo}>
                        <img className={style.logo_in} src={info}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Information