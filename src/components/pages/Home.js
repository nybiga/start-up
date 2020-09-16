import React from 'react'
import { Link } from 'react-router-dom'
import Join from '../layout/Join'
import { AiOutlineArrowRight } from 'react-icons/ai';
import home3 from '../../img/home3.png'
import home4 from '../../img/home4.png'

const Home = () => {
    return (
        <div>
            <div className="home1">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                        <br />
                        <h3 className="white-text">
                            Looking to growing your business with the right community?
                        </h3>
                        <br />
                        <h5 className="white-text">
                            Startup Accra is the best place for you to be.
                            With a vast network of industry experts, mentors 
                            and investors, you're on your way to bulding a business that scale.
                        </h5>
                        </div>
                    </div>
                </div>
            </div>
            <Join />
            <div className="home3">
                <div className="row">
                    <div className="col l6 s12">
                        <div className="container">
                            <br />
                            <h2 className="grey-text">
                                Build your business while networking with
                                smart people like you.
                            </h2>
                            <p className="grey-text home3-p">
                                Startup Accra is a place for you to be.
                                With a vast network of industry experts, mentors
                                and investors, you're on your way to building a
                                business that scales.
                            </p>
                            <Link className="green-text home3-p">Learn More <AiOutlineArrowRight className="arrow" /></Link>
                        </div>
                    </div>
                    <div className="col l6 s12 home3-right grey lighten-3">
                        <img src={home3} alt='networking'/>
                    </div>
                </div>
            </div>
            <div className="home4 green lighten-4">
                <div className="container home4-cont">
                    <div className="row">
                        <div className="col l9 s12">
                            <div class="card horizontal">
                                <div class="home4-img">
                                    <img src={home4} alt='know us' />
                                </div>
                                <div class="card-stacked">
                                    <div class="card-content">
                                        <span class="card-title">Get to know us</span>
                                        <p>
                                            Startup Accra is the best place for you to be.
                                            With a vast network of industry experts, mentors
                                            and investors, you're on your way to bulging a business
                                            that scales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home5">
                <div className="container">
                    <div className="row">
                        <div className="col l9 s12">
                            <h1 className="white-text home5-text">
                                Come . Connect . Build
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home6">
                <div className="container">
                    <h3 className="center">We are trusted by:</h3>
                </div>
            </div>
            <Join />
        </div>
    )
}

export default Home