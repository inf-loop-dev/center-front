import moment from "moment";
import 'moment/locale/ko'

export function makeDDay(date){
    const day = (moment.duration(moment(date).startOf('days').diff(moment().startOf('days'))).days())
    return day > 0 ? "D-" + day :
        day == 0 ? "D-Day" :
            "D+" + -day
}

export function formatDate(date){
    return moment(date).format('yyyy-MM-DD LT')
}