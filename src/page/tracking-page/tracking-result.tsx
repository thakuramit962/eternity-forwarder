import React, {useEffect, useState} from 'react'
import {Box, Button, CircularProgress, Toolbar, Typography, useTheme} from "@mui/material"
import NewPageContainer from "../../components/new-page-container";
import {useParams} from "react-router-dom";
import moment from "moment"
import noDataIllustration from '../../assets/illustrations/no-data.svg'
import {Block, StarBorderRounded, StarRounded} from '@mui/icons-material'
import thankYou from '../../assets/illustrations/success.svg'
import {serverRoute} from "../../utils/app-helper";


export default function TrackingResult() {


    const params = useParams()
    const theme = useTheme()
    const {trackId} = params

    const [fetching, setFetching] = useState(true)
    const [noData, setNoData] = useState(false)
    const [trackingResult, setTrackingResult] = useState({})
    const [timelineTrail, setTimelineTrail] = useState([])

    useEffect(() => {
        setFetching(true)
        window.scrollTo(0, 0)
        fetch(`${serverRoute}/get-lrtimeline/${trackId}`)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok')
                return response.json()
            })
            .then(data => {
                if (data.status == 'success') {
                    console.log(data)
                    setTrackingResult(data?.data)
                    setTimelineTrail(data?.driver_trail)
                } else {
                    setNoData(true)
                    console.log('some error')
                }
            })
            .catch(error => {
                setNoData(true)
                console.error('Error:', error)
            })
            .finally(() => setFetching(false))
    }, [trackId])


    return (
        <NewPageContainer>
            <Toolbar disableGutters sx={{
                height: '110px',
                transition: 'all 300ms ease-in-out',
            }}/>

            <Box sx={{
                padding: '0 1rem',
                minHeight: 'min(100vh, 700px)',
                '& .emptyContainer': {
                    display: 'grid',
                    placeItems: 'center',
                    minHeight: 'min(90vh, 500px)',
                    '& img': {
                        maxHeight: '300px',
                        objectFit: "contain",
                    },
                },
                // backgroundColor: 'aliceblue',
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
                            boxShadow: '0 0 17px -4px #83838380',
                            '& .dateLine': {
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                            },
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
                            mb: 2,
                            '& .statusDate': {
                                fontWeight: 600,
                                fontSize: 'clamp(2rem, 6vw, 2.2rem)',
                                mb: 2,
                            },
                            '& .day': {
                                fontWeight: 600,
                                fontSize: '24px',
                                display: 'inline',
                                color: theme.palette.secondary.light,
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
                                color: theme.palette.primary.main,
                                fontWeight: 500,
                                display: 'flex',
                                alignItems: 'flex-end',
                                marginTop: '12px',
                                '& .year': {
                                    marginBottom: '18px',
                                    fontWeight: 500,
                                    fontSize: '22px',
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
                            margin: 0,
                            '&.delivered': {
                                color: '#4ebb5b',
                            },
                            '&.cancelled': {
                                color: theme.palette.error.main,
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
                            boxShadow: '0 0 17px -4px #83838380',
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
                            boxShadow: '0 0 17px -4px #83838380',
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
                                minHeight: '40px',
                                mb: 2,
                                '& > input': {
                                    display: 'none',
                                    '&:checked ~ label': {
                                        '& svg': {
                                            '&.star': {
                                                display: 'none',
                                            },
                                            '&.checkedStar': {
                                                display: 'block',
                                            },
                                        },
                                        '&:before': {
                                            opacity: 1,
                                        },
                                    },
                                },
                                '& > label': {
                                    position: 'relative',
                                    display: 'grid',
                                    placeItems: 'center',
                                    width: '1em',
                                    fontSize: '50px',
                                    fontWeight: 300,
                                    color: '#ffd600',
                                    cursor: 'pointer',
                                    '& svg': {
                                        position: 'absolute',
                                        height: '48px',
                                        width: '48px',
                                        '&.checkedStar': {
                                            display: 'none',
                                        },
                                    },
                                    '& ::before': {
                                        content: '"\\2605"',
                                        position: 'absolute',
                                        opacity: 0,
                                    },
                                    '&:hover': {
                                        '& svg': {
                                            transform: 'scale(1.03)',
                                        },
                                        '& ~ label': {
                                            '& svg': {
                                                transform: 'scale(1.03)',
                                            },
                                            '&:before': {
                                                opacity: '1 !important',
                                            },
                                        },
                                    },
                                },
                                '&:hover > input:checked ~ label': {
                                    '& svg': {
                                        '&.star': {
                                            display: 'none',
                                        },
                                        '& svg': {
                                            '&.checkedStar': {
                                                display: 'inline',
                                            },
                                        },
                                        '&:before': {
                                            opacity: 0.4,
                                        },
                                    },
                                },
                            },
                            '& textarea': {
                                mx: 'auto',
                                width: '-webkit-fill-available',
                                borderRadius: '8px',
                                minWidth: '80%',
                                padding: '8px 12px',
                                border: 'none',
                                // outline: 'none',
                                // background: '#f16334',
                                outline: `1px solid ${theme.palette.secondary.light}`,
                                resize: 'none',
                                fontSize: '14px',
                                color: '#737373',
                                '&:hover, &:focus': {
                                    border: 'none',
                                    outline: `1px solid ${theme.palette.primary.main}`,
                                    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`

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
                }
            }}>
                {
                    fetching ? <FetchingView/>
                        : noData ? <NoDataView/>
                        : <TrackingData data={trackingResult} timelineData={timelineTrail}/>
                }
            </Box>
        </NewPageContainer>
    )
}


const FetchingView = () => {

    return (
        <Box className={'emptyContainer'}>
            <CircularProgress/>
        </Box>
    )
}

const NoDataView = () => {

    return (
        <Box className={'emptyContainer'}>
            <img src={noDataIllustration} alt='no data' className='animate__animated animate__fadeIn'/>
        </Box>
    )
}

const TrackingData = (props: any) => {

    const {data, timelineData} = props

    const [reviewSubmitted, setReviewSubmitted] = useState(false)

    return (
        <Box className="content">
            <Box className="statusBlock">
                <Box className="deliveryStatus">
                    <p className="dateLine">{data.delivery_status == 'Successful' ? 'Delivery Date' : 'Shipment Date'}</p>
                    <Box className="dateBlock">
                        <span
                            className="day">{data.delivery_date ? moment(data.delivery_date).format('dddd') : moment(data.created_at).format('dddd')}</span>
                        <span
                            className='statusDate'>{data.delivery_date ? moment(data.delivery_date).format('DD MMMM YYYY') : moment(data.created_at).format('DD MMMM YYYY')}</span>

                        {/* <span className="month">{data.delivery_date ? moment(data.delivery_date).format('MMMM') : moment(data.created_at).format('MMMM')}</span>
                        <Box className="date">
                            <span>{data.delivery_date ? moment(data.delivery_date).format('DD') : moment(data.created_at).format('DD')}</span>
                            <span className="year">{data.delivery_date ? moment(data.delivery_date).format('YYYY') : moment(data.created_at).format('YYYY')}</span>
                        </Box> */}
                    </Box>

                    <span className="statusHead">Status:</span>

                    {data.delivery_status == 'Successful'
                        ? <p className="status delivered">
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
                        : data.delivery_status == 'Cancel'
                            ? <p className="status cancelled">
                                <Block/>
                                Cancelled
                            </p>
                            : <p className="status inTransit">
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
                                    className="feather feather-truck"
                                >
                                    <rect x="1" y="3" width="15" height="13"/>
                                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                                    <circle cx="5.5" cy="18.5" r="2.5"/>
                                    <circle cx="18.5" cy="18.5" r="2.5"/>
                                </svg>
                                In Transit
                            </p>
                    }

                </Box>

                <Box className="trackingTimeline">
                    <p className="trackingId">Tracking Id - <span>{data.id}</span></p>

                    <Box className="timelineBlock">

                        {
                            data.delivery_status != 'Cancel' ?
                                timelineData?.reverse()?.map((timeline: any, index: number) => (
                                    <Box className="timeline">
                                        <Box className="timeBlock">
                                            <Box className="timeStamp">
                                                <Box
                                                    className="date">{moment(timeline.create_at).format('DD MMM')}</Box>
                                                <Box
                                                    className="time">{moment(timeline.create_at).format('hh:mm a')}</Box>
                                            </Box>
                                            <Box className="badge"/>
                                        </Box>
                                        <Box className="description">
                                            <Box className="activity">
                                                <span className="activityHeading">Activity : </span>
                                                {timeline.desc}
                                            </Box>
                                            <Box className="location">
                                                <span className="activityHeading">Location : </span>
                                                {timeline.location}
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                                : <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    '& img': {
                                        maxHeight: '120px',
                                        objectFit: 'contain',
                                    },
                                }}>
                                    <img src={noDataIllustration} alt='no data'
                                         className='animate__animated animate__fadeIn'/>
                                </Box>
                        }
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
                        <span>Order/ Shipment ID</span>
                        <span>{data.order_id ? data.order_id : data.id}</span>
                    </p>

                    <p className="detailLine">
                        <span>Order Placed On</span>
                        <span>{data.created_at ? moment(data.created_at).format('DD MMM YYYY') : '-na-'}</span>
                    </p>

                    <p className="detailLine">
                        <span>Order Status</span>
                        <span>{data.delivery_status == 'Successful' ? 'Delivered Successfully' : 'Currently in transit'}</span>
                    </p>
                </Box>

                <Box className="reviewBlock">
                    {!reviewSubmitted
                        ? <ReviewForm setReviewSubmitted={setReviewSubmitted}/>
                        : <ReviewSubmittedView/>
                    }

                </Box>
            </Box>
        </Box>
    )
}

const ReviewForm = (props: any) => {

    const {setReviewSubmitted} = props

    const [formData, setFormData] = useState({rating: 0, feedback: ''})

    const onReviewSubmit = () => {
        if (formData.rating == 0) alert('rating is required')
        else {
            console.log(formData)
            setReviewSubmitted(true)
        }
    }

    return (
        <>
            <p className="dateLine">How was your Delivery Experience?</p>

            <Box className="rating">
                <input type="radio" name="rating" value="5" id="5"
                       onClick={() => setFormData({...formData, rating: 5})}/>
                <label htmlFor="5"><StarRounded className='checkedStar'/><StarBorderRounded className='star'/></label>
                <input type="radio" name="rating" value="4" id="4"
                       onClick={() => setFormData({...formData, rating: 4})}/>
                <label htmlFor="4"><StarRounded className='checkedStar'/><StarBorderRounded className='star'/></label>
                <input type="radio" name="rating" value="3" id="3"
                       onClick={() => setFormData({...formData, rating: 3})}/>
                <label htmlFor="3"><StarRounded className='checkedStar'/><StarBorderRounded className='star'/></label>
                <input type="radio" name="rating" value="2" id="2"
                       onClick={() => setFormData({...formData, rating: 2})}/>
                <label htmlFor="2"><StarRounded className='checkedStar'/><StarBorderRounded className='star'/></label>
                <input type="radio" name="rating" value="1" id="1"
                       onClick={() => setFormData({...formData, rating: 1})}/>
                <label htmlFor="1"><StarRounded className='checkedStar'/><StarBorderRounded className='star'/></label>
            </Box>

            <textarea name="feedback" rows={4} onChange={(e) => setFormData({...formData, feedback: e.target.value})}
                      placeholder="Please enter your remarks (Max 250 characters)"/>

            <Button variant={'contained'} onClick={onReviewSubmit}>Submit</Button>
        </>
    )
}

const ReviewSubmittedView = () => {

    return (
        <Box sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            '& .dialogHead': {
                maxWidth: '320px',
                fontSize: '1.3rem',
                fontWeight: 500,
            },
            '& .dialogDes': {
                maxWidth: '320px',
                fontSize: '0.9rem',
            },
            '& .MuiButton-root': {
                height: '40px',
                borderRadius: '50vh',
                fontSize: '1rem',
                width: '90%',
                maxWidth: '300px',
                mx: 'auto'
            },
        }}>
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '& img': {
                    maxHeight: '100px',
                    objectFit: 'contain',
                    p: 4,
                },
            }}>
                <img src={thankYou} alt={'thank you'}/>
                <Typography className='dialogHead'>
                    Thank you for sharing your feedback!
                </Typography>
                <Typography className='dialogDes'>
                    Your feedback helps us improve our service and offer you a better experience.
                </Typography>
            </Box>
        </Box>
    )
}