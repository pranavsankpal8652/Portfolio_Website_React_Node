'use client'
import axios from 'axios'
import React, { useState } from 'react'
import SweetAlert2 from 'react-sweetalert2';
import { Spinner } from "flowbite-react";

export default function Contact() {
  const [swalProps, setSwalProps] = useState({});
  const [loader, setLoader] = useState(false)

  const sendEnquiry = (e) => {
    setLoader(true)
    e.preventDefault()
    const formData = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }

    axios.post('http://localhost:8080/submitEnquiry', formData)
      .then(res => {
        // console.log(res)
        // alert()
        setLoader(false)
        setSwalProps({
          show: true,
          title: res.data.msg,
          icon: 'success'
        })

      })
      .catch((Err) => {
        console.log(Err)
      })
    e.target.reset()
  }

  return (
    <>
      <SweetAlert2 {...swalProps} />
      <div className='min-h-screen max-w-[100%] text-white m-10 relative' id='contact'>
        <div className='max-w-[1500px] mx-auto  p-3 md:grid md:grid-cols-[30%_50%] justify-between '>
          <div>
            <h2 className='text-[30px] first-letter:text-orange-500 font-bold'>Let's Connect</h2>
            <p className='text-wrap'>I'm currently looking for new opportunities.Lets Connect to Craft More Amazing things..See you in Inbox! </p>
          </div>
          <form className='w-full' onSubmit={sendEnquiry} >
            <div className="mb-6 mt-3">
              <label htmlFor="email" className="mb-2 block">
                Your email
              </label>
              <input id="email" name="email" placeholder="name@company.com" type="email" className='w-full text-black' required />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="mb-2 block">
                Subject
              </label>
              <input id="subject" name="subject" placeholder="how we can help you" className='w-full p-4 text-black' required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block">
                Your message
              </label>
              <textarea id="message" name="message" placeholder="Your message..." rows={10} className='w-full md:min-h-[140px] min-h-[110px] text-black' required />
            </div>
            <div className="mb-6">
              <button disabled={loader}  type="submit" className={`w-full bg-gradient-to-r from-orange-400 via-orange-100 to-orange-300 text-black p-[10px_20px] ${loader?'cursor-wait':''}`}>
                {
                  loader ?
                    <div className="text-center">
                      Sending...
                      <Spinner  aria-label="Center-aligned spinner example" />
                    </div>
                    :
                    'Send Message'
                }
              </button>
            </div>
          </form>
          <div className='hidden md:block absolute w-[250px] h-[300px] bg-gradient-to-r from-orange-400 to-orange-300 blur-xl bottom-[-100px] left-[-100px] rounded-full opacity-[0.7] '></div>
        </div>

      </div>
    </>

  )
}
