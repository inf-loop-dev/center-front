import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";


function Home() {
    
    return (
        <div>
            <h1>Home.js</h1>
            <Mogako></Mogako>
            <Study></Study>
        </div>

    )
    function Mogako() {
        let data = [1,2,3];
        let [meets, meetsChange] = useState(data);
        console.log(meets);
        return (
            <>
                <h1>이번 주 모각코</h1>
                {
                    meets.map((element,idx)=>{
                        return <JoinCard meets={element}></JoinCard>
                    })
                }
            </>
        )
    }

    function Study() {
        let data = [1,2,3];
        let [meets, meetsChange] = useState(data);
        console.log(meets);
        return (
            <>
                <h1>모집 중 스터디</h1>
                {
                    meets.map((element,idx)=>{
                        return <JoinCard meets={element}></JoinCard>
                    })
                }
                
            </>
        )
    }
    function JoinCard(props) {
        return (
            <div>
                <Swiper
                navigation={true}
                modules={[Navigation]} 
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        {props.meets}
                    </SwiperSlide>
                    
                   
                </Swiper>

            </div>
        )
    }
}



export default Home;