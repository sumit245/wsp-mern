import React from 'react'

export default function Rewards() {
    return (
        <section className="section section-top-border section-rewards">
            <div className="container">
                <div className="text-center intro-content">
                    <img src={require("../../assets/images/rewards.jpg")} alt="" className="main-image img-fluid" />
                    <p>
                        Playing online poker was never so rewarding
                        Keep generating Reward Points as you to unlock variety of Rewards
                    </p>
                </div>
                <div className="prizes text-center ">
                    <div className="row row-eq-height">
                        <div className="col-md-3 align-self-end">
                            <img src={require("../../assets/images/layout/prizes/gaming-table.png")} alt="" className="icon img-fluid" />
                            <h5 className="text-uppercase mt-2">Gaming <br /> Table</h5>
                        </div>
                        <div className="col-md-3 align-self-end">
                            <img src={require("../../assets/images/layout/prizes/poker-chipset.png")} alt="" className="icon img-fluid" />
                            <h5 className="text-uppercase mt-2">Poker <br /> Chips Set</h5>
                        </div>
                        <div className="col-md-3 align-self-end">
                            <img src={require("../../assets/images/layout/prizes/real-cash.png")} alt="" className="icon img-fluid" />
                            <h5 className="text-uppercase mt-2">Real Cash <br /> Prize</h5>
                        </div>
                        <div className="col-md-3 align-self-end">
                            <img src={require("../../assets/images/layout/prizes/ticket.png")} alt="" className="icon img-fluid" />
                            <h5 className="text-uppercase mt-2">Tournament <br /> Tickets</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
