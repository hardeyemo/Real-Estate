import React from 'react'
import fea from "../assets/fea.png"
import feat from "../assets/feat.png"
import feature from "../assets/feature.png"

const Features = () => {
  return (
    <div>
        <div className='flex flex-col justify-center ml-[15%]'>
            <h1  className='font-bold text-2xl'>Feature for all users</h1>
            <p>These are the list of all partners states</p>
    </div>
    <div className='flex items-center justify-center gap-[30px]  text-white mt-[80px]'>
       <div>
            <img className='h-[29vh] rounded-xl' src={fea} alt="" />
            <div className='relative bottom-16 ml-7'>
                <h1 className='font-bold'>Student</h1>
                <p>Want to rent house for schooling</p>
            </div>
       </div>
       <div>
            <img className='h-[29vh] rounded-xl' src={feat} alt="" />
            <div className='relative bottom-16 ml-7'>
                <h1 className='font-bold'>Tech professionals</h1>
                <p>Need house with working space environment</p>
            </div>
       </div>
       <div >
            <img className='h-[29vh] rounded-xl' src={feature} alt="" />
            <div className='relative bottom-16 ml-7'>
                <h1 className='font-bold'>Business men</h1>
                <p>Best place to settle down after the meeting</p>
            </div>
       </div>
    </div>
    </div>
  )
}

export default Features
