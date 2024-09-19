import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>

        <div className='hero-content'>
            <h1>YOUR FEET <br></br> DESERVE<br></br> THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Catagory</button>
            </div>

            <div className="shoping">
                <p>Also Available On</p>

                <div className="brand-icons">
                   <img src="./images/amazon.png" alt="" />
                   <img src="./images/flipkart.png" alt="" />

                </div>
            </div>
        </div>

        <div className="hero-image">
            <img src="./images/hero-image.png" alt="hero-image" />
        </div>
    </div>
  )
}

export default Hero