import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import data from '../../data/data';
import {Button, Card} from "react-bootstrap";
import {makeDDay,  getWeekName, formatMDLTDate} from '../../modules/date'
import IconText from "../common/IconText";

function CodeJoinCard(props) {
    //let data = [1,2,3,4,5,6,7,8];
    return (
        <Card className="w-100" style={{
            minWidth: 0,
            marginBottom: "2rem"
        }}>
            <Card.Header>
                {props.info.title}
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col-12 text-left px-0">
                        <div className="d-flex mx-1">
                            <div style={{fontSize: "large", margin: "auto"}}>
                                <b>{getWeekName(props.info.start_date)} {makeDDay(props.info.start_date)}</b>
                            </div>
                        </div>
                        <div className="d-flex mx-1">
                            <IconText
                                icon="calendar_today"
                                value={formatMDLTDate(props.info.start_date)}
                                size="small"
                            />
                        </div>
                        <div className="d-flex mx-1">
                            <IconText
                                icon="pin_drop"
                                value={props.info.location ? props.info.location.name : ""}
                                size="small"
                            />
                        </div>
                        <div className="d-flex mx-1">
                            <IconText
                                icon="group"
                                value={`${props.info.manager} ${props.info.attendees_count * 1}/${props.info.total_count * 1}`}
                                size="small"
                            />
                        </div>
                        <div className="d-flex mx-1">
                            <IconText
                                icon="chat"
                                value={props.info.content}
                                size="small"
                            />
                        </div>
                    </div>
                    <div
                        className="col-12 d-flex"
                    >
                        <Button className="m-auto mt-2 w-100">
                            참석
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CodeJoinCard;