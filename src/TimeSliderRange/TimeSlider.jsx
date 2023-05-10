import React from 'react'
import { IconButton } from "@vkontakte/vkui"
import { ChevronLeft, ChevronRight } from 'react-feather';
import s from "./TimeSlider.module.css"
export default function TimeSlider(props) {
    const { timeUp, timeDown, time } = props
    function refactorTime(time) {
        return !time ? "--" : `${String(Math.floor(time / 2)).padStart(2, '0')} : ${time % 2 ? "30" : "00"}`
    }
    return (
        <div className={s.timeSlider}>
            <IconButton aria-label='chevron-left' onClick={timeDown} className={s.timeSlider_button}>
                <ChevronLeft size={25} />
            </IconButton>
            <p className={s.timeSlider_text}>
                {refactorTime(time)}
            </p>
            <IconButton aria-label='chevron-right' onClick={timeUp} className={s.timeSlider_button}>
                <ChevronRight size={25} />
            </IconButton>
        </div>
    )
}
