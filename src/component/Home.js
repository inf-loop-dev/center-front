import React, {useState, useEffect} from 'react';

import 'swiper/css';
import "swiper/css/navigation";

import CodeSwiper from './CODE/CodeSwiper';
import StudySwiper from './STUDY/StudySwiper';
import {getBreakpoint, moreThan} from "../modules/breakpoint";


function Home() {

    const [slidesNum,setSlidesNum] = useState(3);
    //method
    const breakpointChanged=()=>{
        setSlidesNum(moreThan("xs",getBreakpoint())?1:
            moreThan("sm",getBreakpoint())?1.5:
                moreThan("md",getBreakpoint())?2:
                    moreThan("lg",getBreakpoint())?3:3.5)
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