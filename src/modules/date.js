// date 관련 작업 시 여기서 정의 후 사용.

import moment from "moment";
import 'moment/locale/ko'
import {XMLtoJSON} from './xml2json'
import axios from "axios";

export function makeDDay(date){
    const day = (moment.duration(moment(date).startOf('days').diff(moment().startOf('days'))).days())
    return day > 0 ? "D-" + day :
        day === 0 ? "D-Day" :
            "D+" + -day
}

export function formatMDLTDate(date){
    return moment(date).format('M월 D일(ddd) LT')
}

export function formatMDDate(date){
    return moment(date).format('M월 D일(ddd)')
}

export function getWeekName(date){
    return moment(date).format('dddd')
}

export function getMonthCalendar(year, month){
    year = year || moment().get('year')
    month = month || moment().get('month')+1
    const start_of_month = moment([year, month-1])
    const end_of_month = moment([year, month-1]).endOf('months')
    let result = [], week_date = []
    const start_of_calendar = moment(start_of_month).add(-start_of_month.days(),'days')
    const end_of_calendar =  moment(end_of_month).add(7-end_of_month.days(),'days')
    while(!start_of_calendar.isSame(end_of_calendar,'day')){
        week_date.push({
            "day_of_week":start_of_calendar.format('ddd'),
            "this_month": start_of_calendar.get('month')+1===month,
            "color": "black",
            "date": start_of_calendar.get('date')
        })
        if(start_of_calendar.days() === 6) {
            result.push(week_date)
            week_date=[]
        }
        start_of_calendar.add(1, 'days')
    }
    return {
        year: year,
        month: month,
        dates: result
    }
}

export async function getHollydays(year, month) {
    //인증키가 있기때문에 나중에 백엔드로 옮길 예정
    let result;
    result = await axios.get(`https://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=2022&solMonth=05&numOfRows=20&ServiceKey=hC4XgtRYyh%2F1bYqCjwWg7PEjB6AzbfDtgvT%2FbiwzmhbGBFlKXZEbuvMz9%2F12pFFpwzaRavvf%2BbrDI3hrwU6IcQ%3D%3D`)
    console.log(XMLtoJSON(result))
    return XMLtoJSON(result)
}