import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import data from '../../data/data';
import {Button, Card} from "react-bootstrap";
import {makeDDay, formatDate, getWeekName, formatMDDate} from '../../modules/date'
import IconText from "../common/IconText";

function StudyJoinCard(props) {
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
                    <div className="col-12 text-center px-0">

                        <div className="d-flex mx-1">
                            <IconText
                                icon="calendar_today"
                                value={`${formatMDDate(props.info.start_date)} ~ ${formatMDDate(props.info.end_date)}`}
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

export default StudyJoinCard;