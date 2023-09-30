import React from 'react'
import AboutImg from '../assets/profile.jpg'

const About = () => {
  return (
    <section className='bg-secondary text-white py-32'>
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className='about-info'>
          <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About Me</h1>
            <p className='py-5 text-lg'>
            Hi, my name is Thando Baca, a passionate front-end developer 
            with a creative touch. With a keen eye for design adn extensive know how of HTML, CSS, and javaScript, I specialise in 
            bringing digital visions to life through captivating and interactive user experience. .
            </p>
           
        </div>

        <div className="hero-img">
            <img src={AboutImg} alt="Developer illustration" className="w-80 md:w-96 ml-auto rounded-2xl"/>
        </div>
        </div>
    </section>
  )
}

export default About