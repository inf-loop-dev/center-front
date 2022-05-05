import moment from "moment";

export default
    [
        {
            id: 0,
            title: "강남 모각코",
            담당자: "널두",
            요일: "금요일",
            content: "강남에서 모각코 해요",
            price: 120000
        },

        {
            id: 1,
            title: "구로구청 모각코",
            담당자: "널두",
            date: moment().add(2,'days').format(),
            content: "구로구청에서 서서 공부해요",
            price: 110000
        },

        {
            id: 2,
            title: "당산 모각코",
            담당자: "하뚜",
            date: moment().add(6,'days').format(),
            content: "1층에서 14시에 모여요",
            price: 130000
        },

        {
            id: 3,
            title: "당산 모각코",
            담당자: "하뚜",
            date: moment().add(30,'days').format(),
            content: "1층에서 14시에 모여요",
            price: 130000
        }
    ] 