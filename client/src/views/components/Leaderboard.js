import React from 'react'

export default function Leaderboard() {
    return (
        <section className="section section-leaderboard section-top-border">
            <div className="section-header" style={{ backgroundImage: 'url("../../assets/images/icon/whisp-leaderboard.png")', backgroundRepeat: 'no-repeat', height: '150px', maxWidth: '55rem' }}>
                <h2 className="heading section-heading text-uppercase mb-3 ">leaderboard</h2>
                <p className="intro-content" style={{ marginLeft: '15%' }}>
                    Our goal is to give as much money possible back to the player and on top of the rakeback we also have a leaderboard where top scorers are awarded with cash prizes.
                </p>
            </div>
            <table className="table table-borderless table-ggfish">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="l in leaderboardList">
                        <td>{'{'}{'{'}l.rank_detail{'}'}{'}'}</td>
                        <td style={{ textTransform: 'capitalize' }}>{'{'}{'{'}l.name{'}'}{'}'}</td>
                        <td>{'{'}{'{'}l.Amount{'}'}{'}'}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
