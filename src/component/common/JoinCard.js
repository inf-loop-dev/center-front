import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import data from '../../data/data';
import {Button, Card} from "react-bootstrap";
import moment from "moment";
import 'moment/locale/ko'

function JoinCard(props) {
    const makeDDay = (date) => {
        const day = (moment.duration(moment(date).startOf('days').diff(moment().startOf('days'))).days())
        return day > 0 ? "D-" + day :
            day == 0 ? "D-Day" :
                "D+" + -day
    }
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
                        <div>{moment(props.info.date).format('yyyy-MM-DD hh:mm')}</div>
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