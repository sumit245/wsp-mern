import React from 'react'

export default function RakebackDeals() {
    return (
        <section className="section section-top-border section-rakeback-deals text-center show-desktop-only">
            <div className="container">
                <h2 className="heading section-heading text-uppercase mb-3 ">Rakeback Deals</h2>
                <div className="owl-carousel" style={{ display: 'none' }}>
                    <div className="content card--shadow">
                        <img src={require("../../assets/images/partner/pokerdangal-logo.png")} alt="" className="icon img-fluid" />
                        <h4 className="brand-name text-uppercase">Poker <br /> Dangal</h4>
                        <h3 className="heading">
                            <span>20%</span>
                            RAKEBACK
                        </h3>
                        <p>
                            130% First <br />
                            Deposit Bonus<br />&nbsp;
                        </p>
                        <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(4)">Grab Deal</a>
                    </div>
                </div>
                <div id="myCarousel5" className="carousel slide" data-ride="carousel" style={{ display: 'block' }}>
                    {/* Carousel indicators */}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarouse5" data-slide-to={0} className="active" />
                        <li data-target="#myCarouse5" data-slide-to={1} className="active" />
                    </ol>
                    {/* Wrapper for carousel items */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row row-eq-height">
                                <div className="col-md-4 col-sm-12">
                                    <div className="content card--shadow">
                                        <img src={require("../../assets/images/partner/pokerdangal-logo.png")} alt="" className="icon img-fluid" />
                                        <h4 className="brand-name text-uppercase">Poker <br /> Dangal</h4>
                                        <h3 className="heading">
                                            <span>20%</span>
                                            RAKEBACK
                                        </h3>
                                        <p>
                                            130% First <br />
                                            Deposit Bonus<br />&nbsp;
                                        </p>
                                        <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(4)">Grab Deal</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="content card--shadow">
                                        <img src={require("../../assets/images/partner/pokerbaazi-logo.png")} alt="" className="icon img-fluid" />
                                        <h4 className="brand-name text-uppercase">Poker <br /> Baazi</h4>
                                        <h3 className="heading">
                                            <span>25%</span>
                                            RAKEBACK
                                        </h3>
                                        <p>
                                            100% First <br />
                                            Deposit Bonus <br />
                                            upto ₹2500/-
                                        </p>
                                        <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(2)">Grab Deal</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="content card--shadow">
                                        <img src={require("../../assets/images/partner/poket52-logo.png")} alt="" className="icon img-fluid" />
                                        <h4 className="brand-name text-uppercase">Pocket <br /> 52</h4>
                                        <h3 className="heading">
                                            <span>₹ 100</span>
                                            SIGNUP BONUS
                                        </h3>
                                        <p>
                                            130% First <br />
                                            Deposit Bonus<br />&nbsp;
                                        </p>
                                        <a className="btn btn-primary btn--primary grab-deal" href="http://bit.ly/WSNAP52" target="_blank">Grab Deal</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row row-eq-height">
                                <div className="col-md-4 col-sm-12">
                                    <div className="content card--shadow">
                                        <img src={require("../../assets/images/partner/pokerbaazi-logo.png")} alt="" className="icon img-fluid" />
                                        <h4 className="brand-name text-uppercase">Poker <br /> Baazi</h4>
                                        <h3 className="heading">
                                            <span>25%</span>
                                            RAKEBACK
                                        </h3>
                                        <p>
                                            100% First <br />
                                            Deposit Bonus <br />
                                            upto ₹2500/-
                                        </p>
                                        <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(2)">Grab Deal</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="content card--shadow">
                                        <img src={require("../../assets/images/partner/poket52-logo.png")} alt="" className="icon img-fluid" />
                                        <h4 className="brand-name text-uppercase">Pocket <br /> 52</h4>
                                        <h3 className="heading">
                                            <span>₹ 100</span>
                                            SIGNUP BONUS
                                        </h3>
                                        <p>
                                            130% First <br />
                                            Deposit Bonus<br />&nbsp;
                                        </p>
                                        <a className="btn btn-primary btn--primary grab-deal" href="http://bit.ly/WSNAP52" target="_blank">Grab Deal</a>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="content card--shadow">
                                        <img src={require("../../assets/images/partner/9stacks-logo.png")} alt="" className="icon img-fluid" />
                                        <h4 className="brand-name text-uppercase">9Stacks<br />&nbsp;</h4>
                                        <h3 className="heading">
                                            <span>₹ 150</span>
                                            SIGNUP BONUS
                                        </h3>
                                        <p>
                                            10% <br />
                                            Rakeback<br />&nbsp;
                                        </p>
                                        <a className="btn btn-primary btn--primary grab-deal" href="javascript::" ng-click="RedirectToPartnerPage(17)">Grab Deal</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
