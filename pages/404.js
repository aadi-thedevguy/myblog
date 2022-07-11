import Link from 'next/link'
import React from 'react'
import {FaHome} from 'react-icons/fa'

export default function Custom404() {
    return <section>
        <div className='main'>

        </div>
        <div className='text'>

        <h2>Uh oh! Didn't Find what you were looking for</h2>
        
            <Link href={'/'}>
            <h3>Navigate back to 
                <a><FaHome width={30} height={30} /></a>
            </h3>
            </Link>
        
        </div>
        <style jsx>{
            `
            
            .main { 
            margin-top: 4rem;
            margin-inline : auto;
            height: 18rem;
            width: 100%;
            background-image: url('/images/error.jpg');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            font-family: 'Nunito', sans-serif;
                     
        }
        .text {
            padding-inline: 2rem;
            display : flex;
            flex-direction: column;
            align-items: center;
            width:100%;
            margin-bottom: 5rem;
        }
        h3 {
            color : var(--brown-color);
            cursor : pointer;
        }
        a {
            padding-left: .4rem;
        }

        h3:hover {
            color : var(--gray-color);
        }

        @media (min-width: 800px) {
            .main {
                margin-top : 7rem;
            }
        }
            `

        }</style>
    </section>
  }
