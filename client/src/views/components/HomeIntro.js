import React from 'react'

export default function HomeIntro() {
    return (
        <section className="section home-intro mx-4">
            <div className="row listing">
                <div className="col-md-3 text-center">
                    <img src={require("../../assets/images/icon/user.png")} alt="" className="icon img-fluid" />
                    <h4 className="heading mb-0">1+</h4>
                    <p>Registered <br /> Users</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={require("../../assets/images/icon/cash.png")} alt="" className="icon img-fluid" />
                    <h4 className="heading mb-0">1+</h4>
                    <p>Real Cash <br /> Bonus Given</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={require("../../assets/images/icon/rakeback.png")} alt="" className="icon img-fluid" />
                    <h4 className="heading mb-0">0</h4>
                    <p>Rakeback<br /> Given</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={require("../../assets/images/icon/ticket.png")} alt="" className="icon img-fluid" />
                    <h4 className="heading mb-0">0</h4>
                    <p>Tournament <br /> Tickets Given</p>
                </div>
            </div>

            <div className="row row-eq-height about-section mt-5">
                <div className="col-md-7">
                    <h1 className="heading text-uppercase">What is rakeback ?</h1>
                    <h3 className="subheading text-uppercase">How it is calculated</h3>
                    <p>
                        Rakeback online is free money and no one should refuse free money. Naturally when you play online poker you
                        want to be winning. But what about those days when you don’t win? Rather you breakeven or even lose a little?
                        Well when you breakeven, the rakeback you have earned means you’ve actually had a profitable day and when you
                        lose, the rakeback can offset some or all of that loss and possibly mean you breakeven or lose less that you
                        thought! So you should be able to see straight away that it’s a no brainer to make sure you are always playing
                        with a rakeback deal!
                    </p>
                </div>
                <div className="col-md-5">
                    <a href="#" className="play-video">
                        <img src={require("../../assets/images/icon/play.png")} alt="" className="img-fluid icon" />
                    </a>
                </div>
            </div>

        </section >
    )
}
