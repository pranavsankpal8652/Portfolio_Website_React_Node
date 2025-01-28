import React, { useState } from 'react'

const skills = ['JavaScript ES6+', 'MERN Stack', 'NEXTJS', 'TailwindCSS', 'Bootstrap', 'Git and GitHub', 'PHP', 'MySQL']
const Certifications=['MERN Stack Developer by WScubeTech','Drone Programming by Giftabled','Technical Trainee at V-shesh']
export default function About() {

    const [aboutsSec, setAboutSec] = useState('Skills')
    return (
        <>
            <div className="md:grid md:grid-cols-2 gap-0 min-h-screen justify-center items-center text-white p-[50px]" id='about'>
                <div className='w-[70%]'>
                    <img src="https://images.stockcake.com/public/e/b/5/eb563a84-2747-41ef-ab88-d89259aca6ec_large/tech-developer-setup-stockcake.jpg" className='w-[100%]'></img>
                </div>
                <div>
                    <div>
                        <h2 className='text-[40px]'>About Me</h2>
                        <p className=' first-letter:text-orange-400 first-letter:text-[40px] text-justify text-[20px]'>I'm a passionate Full Stack Developer Enthusiast with a obessesion for creating dynamic, responsive, and user-friendly web applications.My focus is always on the end-user experience, ensuring applications are intuitive and engaging.I'm a strong believer in the power of teamwork and thrive in collaborative environments, contributing effectively to cross-functional teams.
                        </p>

                    </div >

                    <div className='flex gap-5 items-center my-5'>
                        <div className={`${aboutsSec == 'Skills' ? 'underline decoration-orange-300' : 'opacity-[0.6]'} text-[25px] cursor-pointer`} onClick={()=>setAboutSec('Skills')}>
                            Skills
                        </div>
                        <div className={`${aboutsSec == 'certifications' ? 'underline decoration-orange-300' : 'opacity-[0.6]'} text-[25px] cursor-pointer`} onClick={()=>setAboutSec('certifications')}>
                          Certifications
                        </div>

                    </div>
                    <div className='marker:text-orange-400 text-[20px]'>
                        {
                            aboutsSec=='Skills'
                            ?
                            skills.map((skill,index)=>{
                                return(
                                    <li key={index}>{skill}</li>
                                )
                            })
                            :
                            Certifications.map((Certification,index)=>{
                                    return(
                                        <li key={index}>{Certification}</li>

                                    )
                            })
                        }
                    </div>



                    {/* <div>
                            <h3 className='pt-5 border-b-[5px] border-orange-300 w-fit text-[25px]'>Skills</h3>
                            <ul className=''>
                                {
                                    skills.map((skill, index) => {
                                        return (
                                            <li key={index} className="py-[2px] before:content-['🟠'] before:px-5 ">{skill}</li>
                                        )
                                    })
                                }

                            </ul>
                        </div> */}


                </div>
            </div >

        </>
    )
}
