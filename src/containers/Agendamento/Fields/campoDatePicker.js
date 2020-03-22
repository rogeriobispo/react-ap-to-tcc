import React from 'react';

import DatePicker, { registerLocale } from 'react-datepicker'
import { getDay } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt-BR', ptBR)

function campoDatePicker(props) {

    const startScheduleDate = new Date()
    startScheduleDate.setDate(startScheduleDate.getDate() + 2)
    // agendamento somente dom 2 dias de antecedencia
    const endSchedule = new Date()
    endSchedule.setDate(endSchedule.getDate() + 90)
    // somente podese agendar com 90 dias de antecedencia

    const doctorGetDays = () => {
        const days = props.doctorSchedule.map((value) => value.day)
        const filteredDays = days.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })
        const daysTofilter = []
        for (let index = 0; index <= 6; index++) {
            daysTofilter.push(filteredDays.includes(index) ? null : index)
        }
        return daysTofilter
    }
    const daysToFilter = date => {
        const daysToFileter = doctorGetDays()
        const [day0, day1, day2, day3, day4, day5, day6] = daysToFileter
        const day = getDay(date);
        return day !== day0 && day !== day1 && day !== day2 && day !== day3 && day !== day4 && day !== day5 && day !== day6
    }

    return (
        <>
            <DatePicker
                locale='pt-BR'
                onChange={props.setDate}
                monthsShown={1}
                minDate={startScheduleDate}
                maxDate={endSchedule}
                filterDate={daysToFilter}
                inline
            />

        </>
    );
}

export default campoDatePicker;