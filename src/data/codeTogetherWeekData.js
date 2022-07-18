//this date provide from now to 7 days later.
//모각코 일주일 데이터,
import moment from "moment";

const codeTogetherWeekData = {
    content:[
        {
            id: 1,
            title: "오후 강남 모각코",
            manager: "널두",
            content: "3시간 할 예정입니다. 많이 참석 부탁 드려요~!",
            start_date: moment().add(1,'days').format('YYYY-MM-DD')+`T${"17:00"}`,
            end_date: moment().add(1,'days').format('YYYY-MM-DD')+`T${"20:00"}`,
            location: {
                name: "무한지대",
                latitude:37.565123,
                longitude:126.97801
            },
            attendees_count: 3,
            total_count: 6
        },
        {
            id: 2,
            title: "오전 강남 모각코",
            content: "1층에서 14시에 모여요!",
            manager: "하뚜",
            start_date: moment().add(3,'days').format('YYYY-MM-DD')+`T${"14:00"}`,
            end_date: moment().add(3,'days').format('YYYY-MM-DD')+`T${"20:00"}`,
            location: {
                name: "스터디카페",
                latitude:37.565123,
                longitude:126.97801
            },
            attendees_count: 1,
            total_count: 4
        },
        {
            id: 3,
            title: "강남 모각코",
            content: "끝나고 식사합시다.",
            manager: "bluesky",
            start_date: moment().add(6,'days').format('YYYY-MM-DD')+`T${"13:00"}`,
            end_date: moment().add(6,'days').format('YYYY-MM-DD')+`T${"18:00"}`,
            location: {
                name: "스타벅스",
                latitude:37.565123,
                longitude:126.97801
            },
            attendees_count: 2,
            total_count: 3
        },
        {
            id: 4,
            title: "당산구청 모각코",
            manager: "데브워니",
            content: "같이 하고 클럽 뚜잇뚜잇",
            start_date: moment().add(7,'days').format('YYYY-MM-DD')+`T${"10:00"}`,
            end_date: moment().add(7,'days').format('YYYY-MM-DD')+`T${"21:00"}`,
            location: {
                name: "무한지대",
                latitude:37.565123,
                longitude:126.97801
            },
            attendees_count: 3,
            total_count: 6
        },
    ]
}
export default codeTogetherWeekData
