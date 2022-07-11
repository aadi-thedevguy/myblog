import React from 'react'
import Head from 'next/head'
import {getSlug, getArticleFromSlug} from '../../utils/mdx'
import styles from '../../components/Blog.module.scss'

import {ProgressBar} from 'scrolling-based-progressbar'
import dayjs from 'dayjs'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark-reasonable.css'


function BlogPost({post : { source, frontmatter }}) {

  return (
    <>
    <ProgressBar height="6px" color="var(--primary-color)"  />
      
      <Head> 
        <title>{frontmatter.title}</title>
        <meta name='description' content={frontmatter.excerpt} />
        <link rel="icon" type='image/vnd.microsoft.icon' href={frontmatter.icon} />
        
      </Head>
      <article className={styles.container}>
        <div className={styles.cover}>

        {/* <Image  src={`${frontmatter.cover_image}`} width={500} height={300} loading="lazy" /> */}
        </div>
        <header>
          <h1>{frontmatter.title}</h1>
          <p>
            {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')}
            
          </p>

        </header>
        <div className={styles.content}>
          <MDXRemote {...source}/>
        </div>
      </article>
    </>
  )
}

export default BlogPost

// dynamically generate the slugs for each article(s)

export async function getStaticPaths() {
    // getting all paths of each article as an array of objects with their unique slugs
    const paths = (await getSlug()).map(slug => ({ params: { slug } }))
  
    return {
      paths,
      // in situations where you try to access a path
      // that does not exist. it'll return a 404 page
      fallback: false,
    }
  }

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)

  const optionsObj = {
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        { behaviour: 'wrap' },
      ],
    ],
  }

  const mdxSource = await serialize(content, {
    mdxOptions: optionsObj,
    parseFrontmatter: true,
  })

    return {
        props : {

            post: {
                source: mdxSource,
                frontmatter,
              },
        }
    }
}

