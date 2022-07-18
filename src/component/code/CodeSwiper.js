import React, {useState, useEffect} from 'react';
import 'swiper/css';
import "swiper/css/navigation";
import JoinCard from '../common/JoinCard';
import {Card} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import data from "../../data/data";
import {getBreakpoint, moreThan} from '../../modules/breakpoint';

function CodeSwiper(props) {
    //data
    const [meets, setMeets] = useState(data);

    return (
        <>
            <div className="container">
                <div className="contents">
                    <h5> 이번 주 모각코</h5>
                    <Card>
                        <Card.Body>
                            <Swiper
                                navigation={true}
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={props.slidesNum}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <div className="swiper-slide-cus">
                                    {meets.map(element => {
                                        return (
                                            <SwiperSlide>
                                                <JoinCard info={element}/>
                                            </SwiperSlide>)
                                    })}
                                </div>

                            </Swiper>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}


export default CodeSwiper;