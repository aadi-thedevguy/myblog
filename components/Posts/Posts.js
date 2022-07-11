import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import styles from './Posts.module.scss'
import {FaCalendarAlt} from 'react-icons/fa'


function Posts({frontMatter}) {

  return (
    <>
        <Link href={`/posts/${frontMatter.slug}`}  passHref>
            <article className={styles.article}>
              <div className='image-container'/>
              <h2>{frontMatter.title}</h2>
              <div className={styles.time}>
                <p>
                  <span><FaCalendarAlt /></span>    {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')}
                </p> 
                <p> {frontMatter.readingTime} </p>
              </div> 
                
              <style jsx>
                {
                  `
                  .image-container {
                    width: 100%;
                    aspect-ratio: 2/1;
                    background-image: url(${frontMatter.cover_image});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 5px;
                    
                  }
                  `
                }
              </style>

            </article>
        </Link>
    </>
  )
}

export default Posts