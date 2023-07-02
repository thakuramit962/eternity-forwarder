import React from 'react'

import {Box, Button, Toolbar} from "@mui/material"
import NewPageContainer from "../../components/new-page-container";


export default function TrackingResult() {


    return (
        <NewPageContainer>
            <Toolbar disableGutters sx={{
                height: '110px',
                transition: 'all 300ms ease-in-out',
            }}/>

            <Box sx={{
                padding: '0 1rem',
                minHeight: 'min(100vh, 700px)',
                backgroundColor: 'aliceblue',
                '& .content': {
                    maxWidth: '1100px',
                    marginInline: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    '& .deliveryStatus': {
                        marginBottom: '24px',
                    },
                    '& .statusBlock, & .infoBlock': {
                        flex: '1 1 400px',
                        '& .deliveryStatus, & .trackingTimeline': {
                            padding: '1rem',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                        },

                        '& .dateLine': {
                            marginBottom: '10px',
                            fontWeight: 'normal',
                            fontSize: '14px',
                            color: '#555',
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                            '&:has(svg)': {
                                fontWeight: 500,
                            },
                        },
                        '& .dateBlock': {
                            color: '#444',
                            display: 'flex',
                            flexFlow: 'column',
                            justifyContent: 'flex-start',
                            gap: 0,
                            '& .day': {
                                fontWeight: 600,
                                fontSize: '24px',
                                display: 'inline',
                            },
                            '& .month': {
                                fontWeight: 600,
                                fontSize: '16px',
                                lineHeight: '10px',
                                display: 'inline',
                            },
                            '& .date': {
                                fontSize: '100px',
                                lineHeight: '100px',
                                color: '#f3ba0a',
                                fontWeight: 500,
                                display: 'flex',
                                alignItems: 'flex-end',
                                marginTop: '12px',
                                '& .year': {
                                    marginBottom: '22px',
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    display: 'inline-block',
                                    lineHeight: 0,
                                    color: '#555',
                                },
                            },
                        },
                        '& .statusHead': {
                            marginTop: '24px',
                            fontWeight: 500,
                            color: '#333',
                        },
                        '& .status': {
                            width: '100%',
                            fontSize: '38px !important',
                            display: 'inline-flex',
                            alignItems: 'center',
                            '&.delivered': {
                                color: '#4ebb5b',
                            },
                            '&.inTransit': {
                                color: 'orange',
                            },
                            '& svg': {
                                height: '32px',
                                width: '32px',
                                marginRight: '1rem',
                            },
                        },
                        '& hr': {
                            marginBlock: '1.5rem',
                        },

                        '& .trackingTimeline': {
                            '& .trackingId': {
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#444',
                                '& span': {
                                    color: 'rgb(0, 132, 221)',
                                },
                            },
                            '& .timelineBlock': {
                                marginTop: '8px',
                                minHeight: '130px',
                                // max-height: 160px,
                                // overflow-y: scroll,
                                paddingBlock: '1.5rem',
                                '&:hover': {
                                    '& .timeline:hover': {
                                        borderRadius: '20px',
                                        backgroundColor: '#ffffff',
                                    },
                                    '& .timeline:not(:hover)': {
                                        opacity: 0.7,
                                        backgroundColor: '#fff2000d',
                                    },
                                },
                                '& .timeline': {
                                    transition: 'all 240ms ease-in-out',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'stretch',
                                    gap: '1rem',
                                    '& .timeBlock': {
                                        width: '90px',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1rem',
                                        position: 'relative',
                                        paddingBottom: '40px',
                                        justifyContent: 'flex-end',
                                        '& .timeStamp': {
                                            textAlign: 'right',
                                            textTransform: 'uppercase',
                                            '& .date': {
                                                color: '#444',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                            },
                                            '& .time': {
                                                color: '#737373',
                                                fontSize: '12px',
                                            },
                                        },
                                        '& .badge': {
                                            marginTop: '1rem',
                                            zIndex: 1,
                                            height: '1rem',
                                            width: '1rem',
                                            borderRadius: '50%',
                                            background: '#444',
                                            border: `3px solid white`,
                                            boxShadow: `0 0 2px #a8a8a8`,
                                        },
                                        '&::after': {
                                            content: '""',
                                            width: '2px',
                                            height: '100%',
                                            position: 'absolute',
                                            left: '81px',
                                            top: ' 16px',
                                            zIndex: 0,
                                            borderLeft: '2px dashed #444',
                                        },
                                    },
                                    '& .description': {
                                        textTransform: 'capitalize',
                                        paddingBottom: '1rem',
                                        fontSize: '12px',
                                        flex: 1,
                                        color: '#737373',
                                        position: 'relative',
                                        '& .activity, & .location': {
                                            'span.activityHeading': {
                                                color: '#444',
                                                fontWeight: 600,
                                            },
                                        },
                                        '& .activity': {
                                            marginBottom: '12px',
                                        },
                                        '& .trackLink': {
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            position: 'absolute',
                                            right: '1rem',
                                            top: '1rem',
                                            textDecoration: 'none',
                                            color: 'rgb(0, 132, 221)',
                                            borderRadius: '50vh',
                                            padding: '2px 12px',
                                            boxShadow: '0 0 12px #83838360',
                                            backgroundColor: '#fff',
                                        },
                                        '& .imageBlock': {
                                            marginTop: '10px',
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr 1fr',
                                            justifyContent: 'center',
                                            gap: '16px',
                                            width: '80%',
                                            textAlign: 'center',
                                            '& img': {
                                                cursor: 'pointer',
                                                padding: '2px',
                                                borderRadius: '8px',
                                                height: '70px',
                                                maxWidth: '100%',
                                                objectFit: 'contain',
                                                border: `1px solid ${'#444'}`,
                                            },
                                        },
                                    },
                                    '&:last-of-type': {
                                        '& .timeBlock': {
                                            paddingBottom: '10px',
                                            '&::after': {
                                                content: '""',
                                                display: 'none',
                                            },
                                        },
                                    },
                                    '&:first-of-type': {
                                        '& .timeBlock': {
                                            '& .badge': {
                                                background: 'green',
                                            },
                                        },
                                    },
                                },
                            },
                        },

                        '& .orderBlock': {
                            padding: '1rem',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            marginBottom: '24px',
                            '& .detailLine': {
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                fontSize: '12px',
                                color: '#444',
                                fontWeight: 600,
                                marginBottom: '10px',
                                '& span:nth-child(1)': {
                                    flex: 1,
                                },
                                '& span:nth-child(2)': {
                                    flex: 2,
                                    fontWeight: 'normal',
                                    color: '#737373',
                                },
                            },
                        },
                        '& .reviewBlock': {
                            position: 'sticky',
                            top: '1rem',
                            padding: '1rem',
                            backgroundColor: 'white',
                            borderRadius: '12px',
                            paddingBottom: '72px',
                            '& .dateLine': {
                                fontWeight: 500,
                            },
                            '& .rating': {
                                display: 'flex',
                                flexDirection: 'row-reverse',
                                justifyContent: 'center',
                                '& > input': {
                                    display: 'none',
                                    '&:checked ~ label:before': {
                                        opacity: 1,
                                    },
                                },
                                '& > label': {
                                    position: 'relative',
                                    width: '1em',
                                    fontSize: '50px',
                                    fontWeight: 300,
                                    color: '#ffd600',
                                    cursor: 'pointer',
                                    // '& ::before': {
                                    //     content: '\\2605',
                                    //     position: 'absolute',
                                    //     opacity: 0,
                                    // },
                                    '&:hover': {
                                        '&:before, & ~ label:before': {
                                            opacity: '1 !important',
                                        },
                                    },
                                },
                                '&:hover > input:checked ~ label:before': {
                                    opacity: 0.4,
                                },
                            },
                            '& textarea': {
                                borderRadius: '8px',
                                width: '100%',
                                padding: '8px 12px',
                                border: 'none',
                                outline: 'none',
                                background: '#f2f2f2',
                                resize: 'none',
                                fontSize: '12px',
                                color: '#737373',
                                '&:hover, &:focus': {
                                    border: 'none',
                                    outline: 'none',
                                },
                            },
                            '& button': {
                                marginTop: '8px',
                                height: '40px',
                                width: '110px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                float: 'right',
                                clear: 'both',
                                border: 'none',
                                backgroundColor: '#f3ba0a',
                                color: '#fff',
                                fontSize: '16px',
                                fontWeight: 500,
                                transition: 'all 240ms ease-in-out',
                                // box-shadow: 2px 3px 0px 1px $'#444',
                                '&:hover': {
                                    '&:active': {
                                        boxShadow: `0 0 0 0 #444`,
                                        transform: 'scale(0.96)',
                                    },
                                },
                            },
                        },
                    },
                },

                ['@media(max0width: 600px)']: {
                    '& .description': {
                        '& .location': {
                            marginBottom: '12px',
                        },
                        '& .trackLink': {
                            position: 'relative !important',
                            right: 'auto !important',
                            top: 'auto !important',
                        }
                    }

                },

            }}>
                <Box className="content">
                    <Box className="statusBlock">
                        <Box className="deliveryStatus">
                            <p className="dateLine">Delivery Date</p>
                            <Box className="dateBlock">
                                <span className="day">Saturday</span>
                                <span className="month">January</span>
                                <Box className="date">
                                    <span>07</span>
                                    <span className="year">2023</span>
                                </Box>
                            </Box>

                            <span className="statusHead">Status:</span>


                            <p className="status delivered">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-check-circle"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                Delivered
                            </p>

                            {/*in transit status */}
                            {/*    <p className="status inTransit">*/}
                            {/*    <svg*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        width="24"*/}
                            {/*        height="24"*/}
                            {/*        viewBox="0 0 24 24"*/}
                            {/*        fill="none"*/}
                            {/*        stroke="currentColor"*/}
                            {/*        strokeWidth="2"*/}
                            {/*        strokeLinecap="round"*/}
                            {/*        strokeLinejoin="round"*/}
                            {/*        className="feather feather-truck"*/}
                            {/*    >*/}
                            {/*        <rect x="1" y="3" width="15" height="13"/>*/}
                            {/*        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>*/}
                            {/*        <circle cx="5.5" cy="18.5" r="2.5"/>*/}
                            {/*        <circle cx="18.5" cy="18.5" r="2.5"/>*/}
                            {/*    </svg>*/}
                            {/*    In Transit*/}
                            {/*</p> */}
                        </Box>

                        <Box className="trackingTimeline">
                            <p className="trackingId">Tracking Id - <span>1504839275606</span></p>

                            <Box className="timelineBlock">
                                {/* Delivered */}
                                <Box className="timeline">
                                    <Box className="timeBlock">
                                        <Box className="timeStamp">
                                            <Box className="date">27 Aug</Box>
                                            <Box className="time">02:30 pM</Box>
                                        </Box>
                                        <Box className="badge"/>
                                    </Box>
                                    <Box className="description">
                                        <Box className="activity">
                                            <span className="activityHeading">Activity :</span>
                                            Delivered
                                        </Box>
                                        <Box className="location">
                                            <span className="activityHeading">Location :</span>
                                            Hisar
                                        </Box>
                                        <Box className="imageBlock">
                                            <a href="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                               target="_blank">
                                                <img
                                                    src="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                    alt="pod images"/>
                                            </a>
                                            <a href="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                               target="_blank">
                                                <img
                                                    src="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                    alt="pod images"/>
                                            </a>
                                            <a href="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                               target="_blank">
                                                <img
                                                    src="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                    alt="pod images"/>
                                            </a>
                                        </Box>
                                    </Box>
                                </Box>
                                {/*out for delivery */}
                                <Box className="timeline">
                                    <Box className="timeBlock">
                                        <Box className="timeStamp">
                                            <Box className="date">27 Aug</Box>
                                            <Box className="time">01:30 pM</Box>
                                        </Box>
                                        <Box className="badge"/>
                                    </Box>
                                    <Box className="description">
                                        <Box className="activity">
                                            <span className="activityHeading">Activity :</span>
                                            Out for delivery
                                        </Box>
                                        <Box className="location">
                                            <span className="activityHeading">Location :</span>
                                            Hisar
                                        </Box>
                                    </Box>
                                </Box>
                                {/* arrived */}
                                <Box className="timeline">
                                    <Box className="timeBlock">
                                        <Box className="timeStamp">
                                            <Box className="date">27 Aug</Box>
                                            <Box className="time">10:30 aM</Box>
                                        </Box>
                                        <Box className="badge"/>
                                    </Box>
                                    <Box className="description">
                                        <Box className="activity">
                                            <span className="activityHeading">Activity :</span>
                                            Arrived at nearest hub
                                        </Box>
                                        <Box className="location">
                                            <span className="activityHeading">Location :</span>
                                            Hisar
                                        </Box>
                                    </Box>
                                </Box>
                                {/*departed */}
                                <Box className="timeline">
                                    <Box className="timeBlock">
                                        <Box className="timeStamp">
                                            <Box className="date">27 Aug</Box>
                                            <Box className="time">04:00 AM</Box>
                                        </Box>
                                        <Box className="badge"/>
                                    </Box>
                                    <Box className="description">
                                        <Box className="activity">
                                            <span className="activityHeading">Activity :</span>
                                            departed (in transit)
                                        </Box>
                                        <Box className="location">
                                            <span className="activityHeading">Location :</span>
                                            from Chandigarh
                                        </Box>

                                        <a className="trackLink" href="#">Track Link</a>
                                    </Box>
                                </Box>
                                {/*pickup*/}
                                <Box className="timeline">
                                    <Box className="timeBlock">
                                        <Box className="timeStamp">
                                            <Box className="date">26 Aug</Box>
                                            <Box className="time">05:30 PM</Box>
                                        </Box>
                                        <Box className="badge"/>
                                    </Box>
                                    <Box className="description">
                                        <Box className="activity">
                                            <span className="activityHeading">Activity :</span>
                                            Pick up Scheduled
                                        </Box>
                                        <Box className="location">
                                            <span className="activityHeading">Location :</span>
                                            Chandigarh
                                        </Box>
                                    </Box>
                                </Box>
                                {/*menifested*/}
                                <Box className="timeline">
                                    <Box className="timeBlock">
                                        <Box className="timeStamp">
                                            <Box className="date">26 Aug</Box>
                                            <Box className="time">11:30 AM</Box>
                                        </Box>
                                        <Box className="badge"/>
                                    </Box>
                                    <Box className="description">
                                        <Box className="activity">
                                            <span className="activityHeading">Activity :</span>
                                            Shipment menifested
                                        </Box>
                                        <Box className="location">
                                            <span className="activityHeading">Location :</span>
                                            Chandigarh
                                        </Box>
                                    </Box>
                                </Box>
                                {/*recieved*/}
                                <Box className="timeline">
                                    <Box className="timeBlock">
                                        <Box className="timeStamp">
                                            <Box className="date">26 Aug</Box>
                                            <Box className="time">08:30 AM</Box>
                                        </Box>
                                        <Box className="badge"/>
                                    </Box>
                                    <Box className="description">
                                        <Box className="activity">
                                            <span className="activityHeading">Activity :</span>
                                            Order Received
                                        </Box>
                                        <Box className="location">
                                            <span className="activityHeading">Location :</span>
                                            Chandigarh
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="infoBlock">
                        <Box className="orderBlock">
                            <p className="dateLine">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-file"
                                >
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                                    <polyline points="13 2 13 9 20 9"/>
                                </svg>
                                Order Details
                            </p>
                            <hr/>

                            <p className="detailLine">
                                <span>Order ID</span>
                                <span>wretyui567</span>
                            </p>

                            <p className="detailLine">
                                <span>Order Placed On</span>
                                <span>12 Jan 2023</span>
                            </p>

                            <p className="detailLine">
                                <span>Order Status</span>
                                <span>Currently in transit</span>
                            </p>
                        </Box>

                        <Box className="reviewBlock">
                            <p className="dateLine">How was your Delivery Experience?</p>

                            <Box className="rating">
                                <input type="radio" name="rating" value="5" id="5"/>
                                <label htmlFor="5">☆</label>
                                <input type="radio" name="rating" value="4" id="4"/>
                                <label htmlFor="4">☆</label>
                                <input type="radio" name="rating" value="3" id="3"/>
                                <label htmlFor="3">☆</label>
                                <input type="radio" name="rating" value="2" id="2"/>
                                <label htmlFor="2">☆</label>
                                <input type="radio" name="rating" value="1" id="1"/>
                                <label htmlFor="1">☆</label>
                            </Box>

                            <textarea name="feedback" rows={4}
                                      placeholder="Please enter your remarks (Max 250 characters)"/>

                            <Button variant={'contained'}>Submit</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </NewPageContainer>
    )
}