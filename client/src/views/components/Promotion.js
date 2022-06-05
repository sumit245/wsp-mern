import React from 'react'

export default function Promotion() {
    return (
        <section className="section section-top-border text-center  section-promotions default-gradient" style={{ marginTop: '20px' }}>
            <div className="container">
                <h2 className="heading text-uppercase mb-3">Promotions</h2>
                <div className="row">
                    <div className="col-md-3">
                        <img src={require("../../assets/images/icon/whisp-logo.png")} alt="" className="icon img-fluid" />
                        <h4 className="text-uppercase mt-2">Rakeback Deals</h4>
                    </div>
                    <div className="col-md-3">
                        <img src={require("../../assets/images/icon/leaderboard.png")} alt="" className="icon img-fluid" />
                        <h4 className="text-uppercase mt-2">Leaderboards</h4>
                    </div>
                    <div className="col-md-3">
                        <img src={require("../../assets/images/icon/rewards.png")} alt="" className="icon img-fluid" />
                        <h4 className="text-uppercase mt-2">Rewards</h4>
                    </div>
                    <div className="col-md-3">
                        <img src={require("../../assets/images/icon/refer-a-friend.png")} alt="" className="icon img-fluid" />
                        <h4 className="text-uppercase mt-2">Refer A Friend</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
