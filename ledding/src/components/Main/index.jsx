import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/Mask Group.png'

export const MainPage = ()=>{
    return <div className={css.mainPage}>
        <div className='container'>
        <nav>
            <span className={css.logo}>Thrivetalk</span>
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Servis</li>
                <li>About</li>
            </ul>
            <button className={css.btn}>Contact us</button>
        </nav>
        <div className={css.MainBlock}>
            <div className={css.textBlock}>
                <p className={css.logo}>Thrivetalk</p>
                <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                <p className={css.textL}>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                <div>
                    <button className={css.btnY}>WHO AM I</button>
                    <button className={css.btnD}>WHAT DO I DO</button>
                </div>
            </div>
            <div>
                <img src={mainPic} alt=""/>
            </div>
        </div>
        </div>
    </div>
}