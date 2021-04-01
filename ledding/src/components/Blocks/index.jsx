import React from 'react'
import css from './Blocks.module.css'

export const Blocks = ()=>{
    return <div className={css.Blocks}>
            <div className={css.Boxs}>
                <div className={css.box1}>
                    <ul>
                        <li><span> Weight Lifting</span></li>
                        </ul>
                </div>
                <div className={css.box2}>
                    <ul>
                        <li><span>Running  & Spinning</span></li>
                        </ul>
                </div>
                <div className={css.box3}>
                    <ul>
                        <li><span>Pumping Iron</span></li>
                        </ul>
                </div>
                <div className={css.box4}>
                    <ul>
                        <li><span>Pumping Iron</span></li>
                        </ul>
                </div>
            </div>
            <div className={css.mainBlocks}>
                <div className={css.block1}>
                    <ul>
                        <li><span>Physical Health</span></li>
                        </ul>
                </div>
                <div className={css.block2}>
                    <ul>
                        <li><span>Mental Health</span></li>
                        </ul>
                </div>
                <div className={css.block3}>
                    <ul>
                        <li><span>Nutrition</span></li>
                        </ul>
                </div>
                <div className={css.block4}>
                    <ul>
                        <li><span>Gymnastics</span></li>
                        </ul>
                </div>
                <div className={css.block5}>
                    <ul>
                        <li><span>Crossfit</span></li>
                        </ul>
                </div>
                <div className={css.block6}>
                    <ul>
                        <li><span>Aerobics</span></li>
                        </ul>
                </div>
            </div>
    </div>
}