import React, {useState} from 'react';
import 'swiper/css';
import "swiper/css/navigation";
import JoinCard from '../common/JoinCard';
import {Card} from "react-bootstrap";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import data from "../../data/data";

function StudySwiper(props) {
    let [meets, meetsChange] = useState(data);

    return (<>
        <div className="container">
            <div className="contents">
                <Card>
                    <Card.Header as={"h5"}>모집중인 스터디</Card.Header>
                    <Card.Body>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={props.slidesNum}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {meets.map(element => {
                                return (
                                    <SwiperSlide>
                                        <JoinCard info={element}/>
                                    </SwiperSlide>)
                            })}

                        </Swiper>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>)
}


export default StudySwiper;