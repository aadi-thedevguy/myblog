import React, {useState} from 'react'
import styles from './Navbar.module.scss'
import { HiX} from 'react-icons/hi'
import {FaHamburger} from 'react-icons/fa'
import {motion, transform} from 'framer-motion'
import Link from 'next/link'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <nav className={styles.navbar}>
    
        
        <div className={styles.navbarLogo}>
            <img src="/images/logo.png" alt="logo" />
        </div>
        <ul className={styles.navbarLinks}>
            
            <li className={styles.flex}>    
                <Link href={'/'}>
                <a> Blogs</a>
                </Link>    
            
            </li>
            <li className={styles.flex}>    
                <Link href={'/about'}>
                <a> About</a>
                </Link>    
            
            </li>
        </ul>
        <div className={styles.navbarMenu}>
            <FaHamburger onClick={() => setToggle(true)} />
            {toggle && (
                <motion.div
                initial={{ width: 0 }} 
                animate={{ width: "50%" }}
                transition={{duration : 0.85, ease : 'easeInOut'}}
                >
                    <HiX onClick={() => setToggle(false)} />
                    <ul>  
                            
                        <li>
                        <Link href={'/'}>
                            <a onClick={() => setToggle(false)}>posts</a>
                        </Link>
                        </li>
                        <li>
                        <Link href={'/about'}>
                            <a onClick={() => setToggle(false)}>about</a>
                        </Link>
                        </li>
                            
                    </ul>
                </motion.div>
            )
            
            }
        </div>
    </nav>
  )
}

export default Navbar 