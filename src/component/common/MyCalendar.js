import React, {useState, useEffect} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {getMonthCalendar,getHollydays} from "../../modules/date";

function MyCalendar() {
    const [monthCalendar, setMonthCalendar] = useState(getMonthCalendar())
    const [hollydays , setHollydays] = useState()

    useEffect(
        ()=>{
            getHollydays(2022,5)
                .then(
                    res=>{
                        console.log(res)
                        setHollydays(res)
                    }
                )
        }
    )

    return (
        <>
            <Container>
                <div>
                    {`${monthCalendar.year}년 ${monthCalendar.month}월`}
                    {JSON.stringify(hollydays)}
                </div>
                {
                    monthCalendar.dates.map(week => {
                        return (
                            <Row className="mt-2">
                                {
                                    week.map(date => {
                                    return (
                                        <Col className="mr-auto" style={{color:date.day_of_week}}>
                                            {date.day_of_week}{date.date}
                                        </Col>
                                    )})
                                }
                            </Row>
                        )
                    })
                }
            </Container>
        </>
    )

}

export default MyCalendar;