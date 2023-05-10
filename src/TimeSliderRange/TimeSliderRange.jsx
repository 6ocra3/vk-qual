import React from 'react';
import s from "./TimeSlider.module.css"
import TimeSlider from './TimeSlider';
export default function TimeSliderRange(props) {
    const { startTime, setStartTime, endTime, setEndTime } = props
    function leftTimeDown() {
        startTime > 0 && setStartTime(startTime - 1)
    }
    function leftTimeUp() {
        startTime + 1 < endTime && setStartTime(startTime + 1)
    }
    function rightTimeDown() {
        endTime - 1 > startTime && setEndTime(endTime - 1)
    }
    function rightTimeUp() {
        endTime < 47 && setEndTime(endTime + 1)
    }
    return (
        <section className={s.timeSliderRange}>
            <TimeSlider timeUp={leftTimeUp} timeDown={leftTimeDown} time={startTime} />

            <span className={s.timeSliderRange_dash}>—</span>

            <TimeSlider timeUp={rightTimeUp} timeDown={rightTimeDown} time={endTime} />
        </section >

    )
}