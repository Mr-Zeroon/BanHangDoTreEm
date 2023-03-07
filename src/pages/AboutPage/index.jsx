import React from 'react'
import './about.scss'
import avatar from "../../assets/Img/Huy.jpg"

const AboutPage = () => {
  return (
    <section className="about">
      <div className="main">
        <img src={avatar} alt="" srcset=""/>
        <div className="about-text">
          <h1>About Us</h1>
          <h5>Developer  <span className='span_about'> & Designer </span></h5>
          <p>Hello! My name is Huy Dep Trai
          I’m a web designer and front-end web developer with over 20 years of 
          professional experience in the design industry.
          As the owner of iDesign Studios, I specialize in creating custom websites for small businesses – focusing primarily on custom WordPress theme design and development.</p>
          <button className='btn_about' type="button">Read More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutPage;