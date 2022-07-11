
import React,{useState, useEffect} from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {FaCss3Alt, FaHtml5 , FaReact , FaSass , FaBookOpen,FaFigma, FaCode} from 'react-icons/fa'
import {TbBrandJavascript,TbBrandNextjs} from 'react-icons/tb'
import styles from '../styles/Home.module.scss'
import { getAllArticles } from '../utils/mdx'
import Posts from '../components/Posts/Posts'

const items = [
  {
    name : 'html',
    icon : <FaHtml5 />
  },
  {
    name : 'css',
    icon : <FaCss3Alt />
  },
  {
    name : 'javascript',
    icon : <TbBrandJavascript />
  },
  {
    name : 'react',
    icon : <FaReact />
  },
  {
    name : 'sass',
    icon : < FaSass />
  },
  {
    name : 'nextjs',
    icon : < TbBrandNextjs />
  },
  // {
  //   name : 'figma',
  //   icon : < FaFigma />
  // },
  // {
  //   name : 'firebase',
  //   icon : < TbBrandFirebase />
  // },
  {name : 'All',
   icon : <FaCode />
  }
]

export default function Blogs({ posts }) {


  const [filterBlog, setFilterBlog] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y : 0, opacity : 1})


  const handleBlogFilter = (item) => {

    setActiveFilter(item)
    setAnimateCard([{y : 100, opacity : 0}])

    setTimeout(() => {
      setAnimateCard([{y : 0, opacity : 1}])
      
      if (item === 'All') {
        setFilterBlog(posts)
      } 
      else {
        setFilterBlog(posts.filter(post => post.tags.includes(item)))

      }
    }, 500)
  }

  useEffect(() => {
    setFilterBlog(posts)

  }, [])


  return (
    
    <div className={styles.container}>

    <Head>
        <title>The DevGuy's blog</title>
        <meta name="description" content="The Archives of a Developer for the Developers. Quick and Easy explanation on the topics of the Modern full-stack web Development including code snippets, tips/tricks and best practices. " />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        
    </Head>

    <header className={`${styles.flex} ${styles.header}`}>
      <h1 className={styles.headText}> Welcome to the Archieves <FaBookOpen /> of <span> TheDevGuy</span></h1>
      <h1 className={styles.headText}> Latest <span> Posts</span></h1>
      <div
      
      className={styles.blogFilter}>
       {items.map((item,index) => (
         <motion.div
          initial={{ scale : 0, opacity: 0 }}
          animate={{ scale : 1, opacity: 1 }}
          transition={{duration : 0.5, delayChildren: .5}}
         key={index}
         className={`${styles.filterItem} ${activeFilter === item.name ? styles.active : ''}`}
         
         onClick={() => handleBlogFilter(item.name)}
         >
          <span> {item.icon && item.icon} </span>
          <span>{item.name}</span>
         </motion.div>
       ))}
      </div>
    </header>
      <motion.div
      
      animate={animateCard}
      transition={{duration : 0.5, delayChildren : 0.5}}
       className={styles.grid}>
        {filterBlog.map((post) => {
          
          return (

            <Posts frontMatter={post} key={post.slug}  />
            
          )
        })}
      </motion.div>
    </div>
    
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1

      return 0
    })

  return {
    props: {
      posts: articles.reverse(),
    },
  }
}