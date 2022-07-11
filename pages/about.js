import React from 'react'

function About({posts}) {
  return (
      <div>
        <style jsx> {
          `
          div {
            min-height: 55vh;
            margin-block: 5rem;
            padding-block : 2rem;
            width: 100%;
            // border: 2px solid red;
          }

          h1 {
            text-align: center;
          }
          p {
            max-width: 60%;
            margin: 0 auto;
            color : var(--black-color);
            line-height: 1.8;
            font-weight: 500;
          }
          `
        }</style>
          <h1>About Me</h1>
        <p> Welcome to The Dev Guy's Blogs , your one stop source for an average programer figuring out stuff and hoping to help others with his experience in getting things done. Here you will find my knowledge on Modern Full-Stack Development </p><br />
        
        
        <p>Founded in 2022 by me, This blog was started as a personal NextJS Project.I hope you enjoy reading my posts as much as I enjoy writing them.</p>
          <p>
            Finally, this is my complete about us page about details are showing what is the motive to create this blog.
          </p> 
            
          <p>
            If you have any questions or comments, please don't hesitate to contact me on the below links. <br />
            Sincerely, <br />
            Aditya <br /> 
            Have a nice day 😇😇 
          </p>
      </div>	
    
    )
}

export default About