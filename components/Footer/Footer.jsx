import React from 'react'
import {AiFillGithub,AiOutlineCodepen,AiOutlineTwitter} from 'react-icons/ai'
import {FaDev,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://dev.to/thedevguy">
              <FaDev />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/monztercoder">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://codepen.io/Aadi_khare">
              <AiOutlineCodepen />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/Aadi__khare">
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aadikhare1999">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright © 2022   <span><a target="_blank" rel="noreferrer" href="https://www.thedevguy.in">
           TheDevGuy.  
        </a></span>  All Rights Reserved.</p>

    </footer>
  )
}

export default Footer