import React from 'react'
import Carousel from './views/components/Carousel'
import Footer from './views/components/Footer'
import Header from './views/components/Header'
import HomeIntro from './views/components/HomeIntro'
import Leaderboard from './views/components/Leaderboard'
import Promotion from './views/components/Promotion'
import RakebackDeals from './views/components/RakebackDeals'
import Refer from './views/components/Refer'
import Rewards from './views/components/Rewards'
export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <HomeIntro />
      <Promotion />
      <RakebackDeals />
      <Leaderboard />
      <Rewards />
      <Refer />
      <Footer />
    </div>
  )
}
