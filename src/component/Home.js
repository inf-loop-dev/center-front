import React, { useState } from 'react';

import 'swiper/css';
import "swiper/css/navigation";

import CodeGathering from './CODE/CodeGathering';
import StudyGathering from './STUDY/StudyGathering';




function Home() {

    return (
        <div>
            <CodeGathering></CodeGathering>
            <StudyGathering></StudyGathering>
        </div>

    )

}

export default Home;