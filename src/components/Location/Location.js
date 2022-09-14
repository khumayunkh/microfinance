import React from "react";
import style from './location.module.css'
import location from './../../images/Location.svg'
import credit from './../../images/Hand33.svg'

function Location(){
    return(
        <>
        <div className={style.container}>
            <div className={style.location}>
                <div className={style.location_in}>
                    <h2>
                        Среднее время обработки заявки - всего 7 минут
                    </h2>
                    <img src={location}/>
                </div>
                <div className={style.credit}>
                    <h2>
                        Возможность продлевать 
                        кредит неограниченное количество раз
                    </h2>
                    <img src={credit}/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Location