import React from 'react';
import { useState } from "react"
import {
    Group,
    Button,
    PopoutWrapper,
    FormItem,
    FormLayout,
    Select,
    DateInput,
    Textarea
} from '@vkontakte/vkui';
import s from "./FormPopout.module.css"
import TimeSliderRange from '../TimeSliderRange/TimeSliderRange';
import { optionsFloors, optionsNumber, optionsTower } from './options';

const FormPopout = ({ onClose }) => {
    const [tower, setTower] = useState("")
    const [floor, setFloor] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d })
    const [startTime, setStartTime] = useState(18)
    const [endTime, setEndTime] = useState(19)
    const [text, setText] = useState("")

    function reset() {
        setTower("")
        setFloor("")
        setNumber("")
        setDate(() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d })
        setText("")
    }
    function submit() {
        const formData = {
            tower: tower,
            floor: floor,
            number: number,
            startTime: date.getTime() + startTime * 30 * 60 * 1000,
            endTime: date.getTime() + endTime * 30 * 60 * 1000,
            text: text
        }
        console.log(JSON.stringify(formData))
        reset()
    }
    return (
        <PopoutWrapper onClick={onClose}>
            <div className={s.popout} >
                <Group className={s.border}>
                    <FormLayout>
                        <FormItem >
                            <Select
                                placeholder="Выбор башни"
                                value={tower}
                                onChange={(e) => setTower(e.target.value)}
                                options={optionsTower}
                            />
                        </FormItem>
                        <FormItem>
                            <Select
                                placeholder="Выбор этажа"
                                value={floor}
                                onChange={(e) => setFloor(e.target.value)}
                                options={optionsFloors}
                            />
                        </FormItem>
                        <FormItem>
                            <Select
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Выбор переговорки на этаже"
                                options={optionsNumber}
                            />
                        </FormItem>
                        <FormItem className={s.dateInput} top="Выбор даты и времени">
                            <DateInput value={date} onChange={setDate} calendarPlacement="top-start" ></DateInput>
                        </FormItem>
                        <FormItem>
                            <TimeSliderRange startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime}></TimeSliderRange>
                        </FormItem>
                        <FormItem>
                            <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Комментарий'></Textarea>
                        </FormItem>
                        <div className={s.btnGroup}>
                            <FormItem>
                                <Button onClick={submit} appearance='positive'>Отправить</Button>
                            </FormItem>
                            <FormItem>
                                <Button onClick={reset} appearance='negative'>Очистить</Button>
                            </FormItem>
                        </div>
                    </FormLayout>
                </Group>
            </div>
        </PopoutWrapper>
    );
};

export default FormPopout