import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './components/Footer'
import {FaBars, FaFilter} from 'react-icons/fa'
import './Home.css'
export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="whole-page">
          <div className="left-section">
            <div className='side'>
            <button className='containerh'>Folder</button>
            <button className='containerh'>My Surveys</button>
            <button className='containerh'>Templates</button>
            <button className='containerh'>Shared</button>
          </div>
          </div>
       
          <div className="right-section">
            <div className='my'>
              <div className='my1'><FaBars size={30}/>&nbsp;&nbsp;&nbsp;<FaFilter size={30}/></div>
              <div className='my2'><button className='butt'>Create Survey</button></div>
            </div>
            <div className='image1'><img src="https://img.freepik.com/free-vector/feedback-survey-concept-illustration_114360-15500.jpg?w=2000" width="110%" height="350px" alt=""></img> </div>
          </div>
        </div> 
        <Footer/>
      </div>
    )
  }
}

export default Home