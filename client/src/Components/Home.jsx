import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer_ from './Footer'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
    return (
        <>
            <div className='container bg-black'>
                <Header />
                <Banner/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer_/>
            </div>


        </>
    )
}
