import React from "react";
import style from './loan.module.css'

function LoanTerm(){
    return(
        <>
        <div className={style.container}>
            <div className={style.loan}>
                <h2>День зарплаты еще не скоро?  
                    Мы можем подождать!  Просто заплатите 
                    проценты по кредиту, 
                    и он автоматически продлится еще на 21 день.
                </h2>
            </div>
        </div>
        </>
    )
}

export default LoanTerm