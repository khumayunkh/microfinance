import React from "react";
import style from './about.module.css'
import logo from './../../images/bussiness.svg'

function AboutUs(){

    return(
        <>
        <div className={style.container}>
            <div className={style.about_us}>
                <div className={style.about_us_info}>
                    <h1>О компании</h1>
                    <h2>
                        Наша компания ООО МКК «Креатив» предлагает 
                        услуги микрофинансирования, 
                        основанные на международных стандартах 
                        работы с клиентами.
                    </h2>
                    <h2>
                        С момента основания компания работает по 
                        принципу честности и открытости сотрудничества. 
                        Главныекритерии нашей работы - 
                        качество и оперативность
                    </h2>
                </div>
                <img cla src={logo}/>    
            </div>
        </div>
        </>
    )
}

export default AboutUs