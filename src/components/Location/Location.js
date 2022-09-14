import React from "react";
import style from './location.module.css'
import locations from './../../images/Locations.svg'
import credit from './../../images/Hand33.svg'

function Location(){
    return(
        <>
        <div className={style.container}>
            <div className={style.location}>
                <div className={style.location_in}>
                    <h2>
                    ООО МКК «Креатив» работает удаленно по всей России, 
                    поэтому получение кредита возможно в любое время 
                    и в любом месте.
                    </h2>
                    <img src={locations}/>
                </div>
                <div className={style.credit}>
                    <h2>
                    Простейшая схема получения и 
                    погашения кредита без залога и поручителей
                    </h2>
                    <img  src={credit}/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Location