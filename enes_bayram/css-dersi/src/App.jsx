import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaHome, FaRegNewspaper, FaAddressCard } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";






function App() {


  return (
    <ul>
      <li><a href="https://x.com/home" target='_blank'><FaHome style={{ paddingRight: "5px" }} />
        Home</a></li>
      <li className='news-li'>
        <a href=""><FaRegNewspaper style={{ paddingRight: "5px" }} />
          News</a>
        <div id='news-content'>
          <ul >
            <li style={{ display: "block" }}><a href="">News 1</a></li>
            <li className="news2-li" style={{ display: "block" }}>
              <a href="">News 2</a>
              <div id='news2-content'>
                <ul>
                  <li><a href="">Detail 1</a></li>
                  <li><a href="">Detail 2</a></li>
                  <li><a href="">Detail 3</a></li>
                  <li><a href="">Detail 4</a></li>
                </ul>

              </div>
            </li>
            <li style={{ display: "block" }}><a href="">News 3</a></li>
            <li style={{ display: "block" }}><a href="">News 4</a></li>
          </ul>

        </div>
      </li>
      <li><a href=""><FaAddressCard style={{ paddingRight: "5px" }} />Contact</a></li>
      <li><a href=""><SiAboutdotme style={{ paddingRight: "5px" }} />About</a></li>
    </ul>
  )
}

export default App
