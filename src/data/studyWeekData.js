//this date provide from now to 7 days later.
//스터디 일주일 데이터
import moment from "moment";

const StudyWeekData = {
    content:[
        {
            id: 1,
            title: "오전 미라클모닝 스터디",
            manager: "데브워니",
            content: "1시간 공부 할거에요",
            start_registration_date:  moment().add(1,'days').format('YYYY-MM-DD')+`T${"00:00"}`,
            end_registration_date:  moment().add(4,'days').format('YYYY-MM-DD')+`T${"23:59"}`,
            start_date: moment().add(7,'days').format('YYYY-MM-DD')+`T${"00:00"}`,
            end_date: moment().add(10,'days').format('YYYY-MM-DD')+`T${"00:00"}`,
            location: {
                name: "온라인",
                latitude:37.565123,
                longitude:126.97801
            },
            attendees_count: 3,
            total_count: 6
        },
        {
            id: 2,
            title: "자바스크립트 딥다이브",
            content: "의논 후 결정",
            manager: "널두",
            start_registration_date:  moment().add(3,'days').format('YYYY-MM-DD')+`T${"00:00"}`,
            end_registration_date:  moment().add(10,'days').format('YYYY-MM-DD')+`T${"23:59"}`,
            start_date: moment().add(13,'days').format('YYYY-MM-DD')+`T${"14:00"}`,
            end_date: moment().add(80,'days').format('YYYY-MM-DD')+`T${"20:00"}`,
            location: {
                name: "상황에 맞게 결정",
                latitude:37.565123,
                longitude:126.97801
            },
            attendees_count: 1,
            total_count: 4
        }
    ]
}
export default StudyWeekData
