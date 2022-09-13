import React from "react";
import style from './info.module.css'
import clock from './../../images/clock.svg'
import calendar from './../../images/Calendar.svg'  

function InfoTime(){
    return(
        <>
        <div className={style.container}>
            <div className={style.infoTime}>
                <div className={style.time}>
                    <h2>
                        Среднее время обработки заявки - всего 7 минут
                    </h2>
                    <img src={clock}/>
                </div>
                <div className={style.days}>
                    <h2>
                        Возможность продлевать 
                        кредит неограниченное количество раз
                    </h2>
                    <img src={calendar}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default InfoTime