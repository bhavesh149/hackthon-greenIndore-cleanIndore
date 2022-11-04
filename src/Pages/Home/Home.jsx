import React from 'react'
import Category from '../../components/Category/Category'
import Process from '../../components/Category/Process/Process'
import Navbar from '../../components/Navbar/Navbar'
import Products from '../../components/Products/Products'
import Slider from '../../components/Slider/Slider'
import Devices from '../../Devices/Devices'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
     <hr/>
      <Category/>
      <hr/>
      <Slider/>
      <Products />
      <Devices />
      <Process />
      <hr/>
      <div className="footer" style={{display: 'flex',justifyContent: 'center',fontSize: '14px'}}>
        <p>Copyright @ 2022 All rights reserved</p>
      </div>
    </div>
  )
}

export default Home