import React, { useEffect, useRef, useState } from 'react'
import useDownloader from 'react-use-downloader';

import { gsap, TextPlugin } from 'gsap/all';
import profile_img from '/profile_2 copy.jpeg'
gsap.registerPlugin(TextPlugin);
export default function Banner() {
    const animatedTextvalues = ["Pranav Sankpal", "A Full Stack Enthusiastic,", "A Backend Developer"]; // List of texts
    const [index, setIndex] = useState(0)
    const animated = useRef(null)
    useEffect(() => {
        const text = animatedTextvalues[index]
        gsap.to(animated.current, {
            duration: text.length * 0.1,
            text: text,
            ease: 'none',
            delay:1,
            onComplete: () => {
                // Pause before erasing
                gsap.to({}, {
                    duration: 1, // 1-second pause
                    onComplete: () => {
                        gsap.to(animated.current, {
                            duration: text.length * 0.1,
                            text: '',
                            ease: 'none',
                            onComplete: () => {
                                setIndex(prev => (prev + 1) % animatedTextvalues.length)
                            }
                        })
                    }

                }

                )
            }
        })
    }, [index])

    const {download} =
        useDownloader();

    const fileUrl ='/Resume_Pranav_Sankpal_WebDeveloper.pdf'
    const filename = 'Resume_Pranav_Sankpal_WebDeveloper.pdf';
    const downloadResume = () => {
        download(fileUrl,filename)
    }

    return (
        <>
            <div className='p-[30px] md:grid md:grid-cols-[70%_auto] justify-center md:justify-normal relative min-h-screen animate-fadIn origin-top-right' id='banner'>
                <div>
                    <h1 className='bg-clip-text bg-gradient-to-r from-orange-400 via-orange-100 to-orange-300 text-transparent md:text-[100px] text-[50px] font-bold w-fit'>Hello,I am</h1>
                    <h2 className='bg-clip-text md:text-nowrap bg-gradient-to-tr from-orange-500 via-white to-orange-400 text-transparent md:text-[90px] text-[40px] font-bold min-h-[120px]' ref={animated}></h2>
                </div>
                <div className=''>
                    <img src={profile_img} className='rounded-[50%] w-[80%] md:h-[50%] h-[10%] mx-auto md:mx-0'></img>
                </div>
                <div className='absolute md:top-[60%] md:left-[5%] left-5 '>
                    <a href='#contact' className='text-white border border-violet-400 p-[10px_20px] text-lg rounded-xl shadow-2xl shadow-orange-200'>Contact Me</a>
                    <button className='p-[20px] md:text-nowrap text-center bg-clip-text  bg-gradient-to-r from-violet-500 via-white to-violet-400 text-transparent text-[30px] animate-bounce font-serif' onClick={downloadResume}>Download Resume</button>
                </div>

            </div>
        </>
    )
}
