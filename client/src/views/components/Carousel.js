import React, { useState } from 'react'
import Nuka from "nuka-carousel"

export default function Carousel() {
    const [index, setIndex] = useState("")
    const [bannerIndex, setBannerIndex] = useState("")
    return (
        <Nuka className='carousel slide' wrapAround={true} autoplay autoplayInterval={1000} animation="zoom">
            <img
                className='carousel-item custom-carousel-item active'
                src={require("../../assets/images/banner/1.jpg")}
                height={520} />
            <img
                className='carousel-item custom-carousel-item active'
                src={require("../../assets/images/banner/2.jpg")}
                height={520} />
            <img
                className='carousel-item custom-carousel-item active'
                src={require("../../assets/images/banner/3.png")}
                height={520} />
        </Nuka>
    )
}
