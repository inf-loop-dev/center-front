import React, {useState, useEffect} from 'react';
import 'swiper/css';
import "swiper/css/pagination";
import CodeJoinCard from './CodeJoinCard';
import {Card, Col, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import codeTogetherWeekData from "../../data/codeTogetherWeekData";
import {getBreakpoint, moreThan} from '../../modules/breakpoint';

function CodeSwiper(props) {
    //data
    const [meets, setMeets] = useState(codeTogetherWeekData);

    return (
        <>
            <div className="container">
                <div className="contents">
                    <Row>
                        <Col className="mr-auto"><h5> 이번 주 모각코</h5></Col>
                        <Col xs="auto" ><a>more+</a></Col>
                    </Row>
                    <Card>
                        <Card.Body style={{
                            paddingBottom: "0px"
                        }}>
                            <Swiper
                                pagination={true}
                                modules={[Pagination]}
                                spaceBetween={50}
                                slidesPerView={props.slidesNum}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {meets.content.map(element => {
                                    return (
                                        <SwiperSlide>
                                            <CodeJoinCard info={element}/>
                                        </SwiperSlide>)
                                })}
                            </Swiper>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}


export default CodeSwiper;