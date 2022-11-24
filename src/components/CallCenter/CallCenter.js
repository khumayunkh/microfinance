import React from "react";
import style from './callCenter.module.css'


function CallCenter(){
    return(
        <>
        <div className={style.container}>
            <div className={style.callCenter}>
                <h1>
                    Возникли вопросы?
                </h1>
                <h2>
                    Наши консультанты вам помогут, 
                    просто позвоните — +7 (493) 115-50-95
                </h2>
            </div>
        </div>
        </>
    )
}

export default CallCenter