import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import data from '../../data/data';
import {Button, Card} from "react-bootstrap";
import {makeDDay, formatDate} from '../../modules/date'
function JoinCard(props) {
    //let data = [1,2,3,4,5,6,7,8];
    return (
        <Card className="w-100" style={{
            minWidth: 0,
        }}>
            <Card.Header>
                {props.info.title}
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col">
                        <div>{formatDate(props.info.date)}</div>
                        {/*<p>{props.info.id}</p>*/}
                        {/*<p>{props.info.담당자}</p>*/}

                        {/*<p>{props.info.content}</p>*/}
                        {/*<p>{props.info.price}</p>*/}
                    </div>
                    <div
                        className="col-auto"
                    >
                        <Button>
                            참석
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default JoinCard;