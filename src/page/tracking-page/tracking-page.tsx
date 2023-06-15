import React from 'react'

import './style.css'
import {Toolbar} from "@mui/material"


export default function TrackingPage() {

    return (
        <>
            <Toolbar disableGutters sx={{
                height: '110px',
                transition: 'all 300ms ease-in-out',
            }}/>

            <main>
                <div className="content">
                    <div className="statusBlock">
                        <div className="deliveryStatus">
                            <p className="dateLine">Delivery Date</p>
                            <div className="dateBlock">
                                <span className="day">Saturday</span>
                                <span className="month">January</span>
                                <div className="date">
                                    <span>07</span>
                                    <span className="year">2023</span>
                                </div>
                            </div>

                            <span className="statusHead">Status:</span>


                            <p className="status delivered">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-check-circle"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                Delivered
                            </p>

                            {/*in transit status */}
                            {/*    <p class="status inTransit">*/}
                            {/*    <svg*/}
                            {/*        xmlns="http://www.w3.org/2000/svg"*/}
                            {/*        width="24"*/}
                            {/*        height="24"*/}
                            {/*        viewBox="0 0 24 24"*/}
                            {/*        fill="none"*/}
                            {/*        stroke="currentColor"*/}
                            {/*        stroke-width="2"*/}
                            {/*        stroke-linecap="round"*/}
                            {/*        stroke-linejoin="round"*/}
                            {/*        class="feather feather-truck"*/}
                            {/*    >*/}
                            {/*        <rect x="1" y="3" width="15" height="13"></rect>*/}
                            {/*        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>*/}
                            {/*        <circle cx="5.5" cy="18.5" r="2.5"></circle>*/}
                            {/*        <circle cx="18.5" cy="18.5" r="2.5"></circle>*/}
                            {/*    </svg>*/}
                            {/*    In Transit*/}
                            {/*</p> */}
                        </div>

                        <div className="trackingTimeline">
                            <p className="trackingId">Tracking Id - <span>1504839275606</span></p>

                            <div className="timelineBlock">
                                {/* Delivered */}
                                <div className="timeline">
                                    <div className="timeBlock">
                                        <div className="timeStamp">
                                            <div className="date">27 Aug</div>
                                            <div className="time">02:30 pM</div>
                                        </div>
                                        <div className="badge"></div>
                                    </div>
                                    <div className="description">
                                        <div className="activity">
                                            <span className="heading">Activity :</span>
                                            Delivered
                                        </div>
                                        <div className="location">
                                            <span className="heading">Location :</span>
                                            Hisar
                                        </div>
                                        <div className="imageBlock">
                                            <a
                                                href="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                target="_blank"
                                            >
                                                <img
                                                    src="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                    alt="pod images"
                                                />
                                            </a>
                                            <a
                                                href="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                target="_blank"
                                            >
                                                <img
                                                    src="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                    alt="pod images"
                                                />
                                            </a>
                                            <a
                                                href="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                target="_blank"
                                            >
                                                <img
                                                    src="https://easemylr.s3.us-east-2.amazonaws.com/images/b5XaHEI10K7dt9whpZZnuFUDDPGTCVhM1EA320TB.jpg"
                                                    alt="pod images"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/*out for delivery */}
                                <div className="timeline">
                                    <div className="timeBlock">
                                        <div className="timeStamp">
                                            <div className="date">27 Aug</div>
                                            <div className="time">01:30 pM</div>
                                        </div>
                                        <div className="badge"></div>
                                    </div>
                                    <div className="description">
                                        <div className="activity">
                                            <span className="heading">Activity :</span>
                                            Out for delivery
                                        </div>
                                        <div className="location">
                                            <span className="heading">Location :</span>
                                            Hisar
                                        </div>
                                    </div>
                                </div>
                                {/* arrived */}
                                <div className="timeline">
                                    <div className="timeBlock">
                                        <div className="timeStamp">
                                            <div className="date">27 Aug</div>
                                            <div className="time">10:30 aM</div>
                                        </div>
                                        <div className="badge"></div>
                                    </div>
                                    <div className="description">
                                        <div className="activity">
                                            <span className="heading">Activity :</span>
                                            Arrived at nearest hub
                                        </div>
                                        <div className="location">
                                            <span className="heading">Location :</span>
                                            Hisar
                                        </div>
                                    </div>
                                </div>
                                {/*departed */}
                                <div className="timeline">
                                    <div className="timeBlock">
                                        <div className="timeStamp">
                                            <div className="date">27 Aug</div>
                                            <div className="time">04:00 AM</div>
                                        </div>
                                        <div className="badge"></div>
                                    </div>
                                    <div className="description">
                                        <div className="activity">
                                            <span className="heading">Activity :</span>
                                            departed (in transit)
                                        </div>
                                        <div className="location">
                                            <span className="heading">Location :</span>
                                            from Chandigarh
                                        </div>

                                        <a className="trackLink" href="#">Track Link</a>
                                    </div>
                                </div>
                                {/*pickup*/}
                                <div className="timeline">
                                    <div className="timeBlock">
                                        <div className="timeStamp">
                                            <div className="date">26 Aug</div>
                                            <div className="time">05:30 PM</div>
                                        </div>
                                        <div className="badge"></div>
                                    </div>
                                    <div className="description">
                                        <div className="activity">
                                            <span className="heading">Activity :</span>
                                            Pick up Scheduled
                                        </div>
                                        <div className="location">
                                            <span className="heading">Location :</span>
                                            Chandigarh
                                        </div>
                                    </div>
                                </div>
                                {/*menifested*/}
                                <div className="timeline">
                                    <div className="timeBlock">
                                        <div className="timeStamp">
                                            <div className="date">26 Aug</div>
                                            <div className="time">11:30 AM</div>
                                        </div>
                                        <div className="badge"></div>
                                    </div>
                                    <div className="description">
                                        <div className="activity">
                                            <span className="heading">Activity :</span>
                                            Shipment menifested
                                        </div>
                                        <div className="location">
                                            <span className="heading">Location :</span>
                                            Chandigarh
                                        </div>
                                    </div>
                                </div>
                                {/*recieved*/}
                                <div className="timeline">
                                    <div className="timeBlock">
                                        <div className="timeStamp">
                                            <div className="date">26 Aug</div>
                                            <div className="time">08:30 AM</div>
                                        </div>
                                        <div className="badge"></div>
                                    </div>
                                    <div className="description">
                                        <div className="activity">
                                            <span className="heading">Activity :</span>
                                            Order Received
                                        </div>
                                        <div className="location">
                                            <span className="heading">Location :</span>
                                            Chandigarh
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="infoBlock">
                        <div className="orderBlock">
                            <p className="dateLine">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-file"
                                >
                                    <path
                                        d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                                    ></path>
                                    <polyline points="13 2 13 9 20 9"></polyline>
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
                        </div>

                        <div className="reviewBlock">
                            <p className="dateLine">How was your Delivery Experience?</p>

                            <div className="rating">
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
                            </div>

                            <textarea
                                name="feedback"
                                rows={4}
                                placeholder="Please enter your remarks (Max 250 characters)"
                            ></textarea>

                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}