import React from "react";
import { Row, Col } from "react-bootstrap";
import Footer from "../footer/Footer";
import { Circle } from "react-feather";

import "../../assets/css/common.css";
import "../../assets/css/reading.css";

function Reading() {
    return (
        <div className="page-container">
            <div className="content-container">
                <Row className="mt-5">
                    <div>
                        <Col>
                            <p className="header">Reading</p>
                        </Col>

                        <Col>
                            <p className="intro mt-3">
                                Here's a (mostly) complete list of books I've read the past few years.
                            </p>
                        </Col>
                    </div>

                    <div className="books">
                        <Col>
                            <p className="year mb-2">2025</p>
                        </Col>

                        <Col>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">The Dip</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Seth Godin</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">20 Apr 2025</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating mb-0">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0 mb-md-4">Supercommunicators</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0 mb-md-4">Charles Duhigg</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0 mb-md-4">27 Jan 2025</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating mb-md-4">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <p className="year mb-2">2024</p>
                        </Col>

                        <Col>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Meditation for Mortals</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Oliver Burkeman</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">22 Dec 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Same as Ever</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Morgan Housel</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">11 Aug 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Thiking in Bets</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Annie Duke</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">27 Jul 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">When McKinsey Comes to Town</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Walt Bogdanich</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">06 Jul 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Elon Musk</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Ashlee Vance</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">25 May 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">The Last Lecture</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Randy Pausch</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">14 May 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 2 ? "#ff5c59" : "none"}
                                                stroke={circle <= 2 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Tomorrow, and Tomorrow, and Tomorrow</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Gabrielle Zevin</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">11 May 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title">Homo Deus</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author">Yuval Noah Harari</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date">29 Mar 2024</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <p className="year mb-2">2023</p>
                        </Col>

                        <Col>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Shoe Dog</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Phil Knight</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">17 Jun 2023</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Dopsick</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Beth Macy</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">24 Feb 2023</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title">The Psychology of Money</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author">Morgan Housel</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date">08 Jan 2023</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <p className="year mb-2">2022</p>
                        </Col>

                        <Col>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Make Time</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">James Knapp, John Zeratsky</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">25 Dec 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Greenlights</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Matthew McConaughey</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">19 Nov 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Sapiens</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Yuval Noah Harari</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">01 Nov 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">The Midnight Library</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Matt Haig</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">29 Aug 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Digital Minimalism</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Cal Newport</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">26 Jun 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Four Thousand Weeks</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Oliver Burkeman</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">02 Jun 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Project Hail Mary</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Andy Weir</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">07 Apr 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Born a Crime</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Trevor Noah</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">05 Mar 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">The Ride of a Lifetime</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Robert Iger</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">28 Feb 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">No Filter</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Sara Frier</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">21 Feb 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Deacon King Kong</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">James McBride</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">20 Feb 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Power</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Jeffrey Pfeffer</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">27 Jan 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Never Split the Difference</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Chris Voss</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">23 Jan 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Invisible Women</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Caroline Criado Perez</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">17 Jan 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">The Subtle Art of Not Giving a F*ck</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Mark Manson</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">08 Jan 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 2 ? "#ff5c59" : "none"}
                                                stroke={circle <= 2 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title">Atomic Habits</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author">James Clear</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date">01 Jan 2022</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 4 ? "#ff5c59" : "none"}
                                                stroke={circle <= 4 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <p className="year mb-2">2021</p>
                        </Col>

                        <Col>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">No Rules Rules</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Reed Hastings, Eric Meyer</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">24 Dec 2021</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title mb-0">Apartment</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author mb-0">Teddy Wayne</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date mb-0">02 Jul 2021</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 3 ? "#ff5c59" : "none"}
                                                stroke={circle <= 3 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <p className="title">Uncanny Valley</p>
                                </Col>

                                <Col sm={4}>
                                    <p className="author">Anna Wiener</p>
                                </Col>

                                <Col sm={2}>
                                    <p className="date">31 Jan 2021</p>
                                </Col>

                                <Col sm={2}>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((circle) => (
                                            <Circle
                                                className={`circle ${circle !== 5 ? 'circle-spacing' : ''}`}
                                                key={circle}
                                                size={10}
                                                fill={circle <= 5 ? "#ff5c59" : "none"}
                                                stroke={circle <= 5 ? "#ff5c59" : "lightgrey"}
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default Reading;
