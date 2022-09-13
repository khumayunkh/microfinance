import React from "react";
import style from './terms.module.css'
import puzzle from './../../images/puzzle.svg'
import cloud from './../../images/cloud.svg'


function Terms(){
    return(
        <>
        <div className={style.container}>
            <div className={style.terms}>
                <div className={style.puzzle}>
                    <h2>Наши условия максимально просты и 
                        не предусматривают 
                        дополнительных платежей и комиссий
                    </h2>
                    <img src={puzzle}/>
                </div>
                <div className={style.cloud}>
                    <h2>
                        Несколько вариантов получения 
                        и погашения кредита.  Предоставляем выбор.  
                        Просто решите, что лучше для вас
                    </h2>
                    <img src={cloud}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Terms