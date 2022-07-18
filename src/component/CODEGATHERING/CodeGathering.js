import React, {useState, useEffect} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import MyCalendar from "../common/MyCalendar";

function CodeGathering(){

    return(
        <>
            <Container>
                <Row className="mt-2">
                    <Col className="mr-auto">
                        <h5>
                            모각코 일정
                        </h5>
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary">
                            모각코 만들기
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <MyCalendar/>
                </Row>
            </Container>
        </>
    )

}
export default CodeGathering;