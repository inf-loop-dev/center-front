import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import data from '../../data';


function JoinCard() {
    //let data = [1,2,3,4,5,6,7,8];
    let [meets, meetsChange] = useState(data);
    return (
        <div>
            <Swiper
                navigation={true} s
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    meets.map(element => {
                        return (
                            <SwiperSlide>
                                <div>
                                    <p>{element.id}</p>
                                    <p>{element.title}</p>
                                    <p>{element.담당자}</p>
                                    <p>{element.요일}</p>
                                    <p>{element.content}</p>
                                    <p>{element.price}</p>

                                </div>


                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </div>
    )
}

export default JoinCard;