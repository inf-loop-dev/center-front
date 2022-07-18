import React, {useState, useEffect} from 'react';

import 'swiper/css';
import "swiper/css/navigation";

import CodeSwiper from './CodeSwiper';
import StudySwiper from './StudySwiper';
import {getBreakpoint, breakpointValue} from "../../modules/breakpoint";


function Home() {

    const [slidesNum,setSlidesNum] = useState(3);
    //method
    const breakpointChanged=()=>{
        setSlidesNum(breakpointValue(getBreakpoint(),1,1.5,2,2.5,3,3.5)) // 순서는 반드시 작은 순서대로 되어야함.
    }

    //
    useEffect(()=>{
        breakpointChanged()
        window.addEventListener("resize", breakpointChanged)
        return ()=>{
            window.removeEventListener('resize', breakpointChanged)
        }
    })

    return (
        <>
            <div className="index-head">
                <div className="container">
                    <div className="contents">
                        <h4><b>무한루프 코딩</b></h4>
                        <p> 봄맞이, 신입 모집중 </p>
                        <p> 일요일, 월요일 5명씩 가입 가능</p>
                        <p> 함께 성장하기 위한 개발자 놀이터 "무한루프 코딩"에 오신 것을 환영합니다.</p>
                    </div>
                </div>
            </div>

            <CodeSwiper slidesNum={slidesNum}></CodeSwiper>
            <StudySwiper slidesNum={slidesNum}></StudySwiper>
        </>

    );

}

export default Home;