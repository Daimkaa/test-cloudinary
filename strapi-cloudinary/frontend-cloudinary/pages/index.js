import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Query from "../components/query";
import POSTS_QUERY from "../apollo/queries/posts/posts";
import Image from 'next/image'
import useSWR from 'swr'

export default function Home() {
  return (
    <div className={styles.container}>
      <Query query = {POSTS_QUERY}>
        {({data:posts}) => {
          {const coder = posts.posts.data}
          {console.log(coder)}
          
            return(
            <div>
              <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
              </Head>
            
 
              <main className={styles.main}>
                <h1 className={styles.title}>
                  Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <p className={styles.description}>
                  Get started by editing{' '}
                  <code className={styles.code}>pages/index.js</code>
                </p>
                <div className = {styles.grid}> 
                 
                  {coder.map((post) => (
                    
                      <div className = {styles.card}>
                        <div className = {styles.image}>
                          <Image src = {post.attributes.cover.data.attributes.url} width={150} height={150}></Image>
                        </div>
                        <h1>{post.attributes.title}</h1>
                       
                      </div>
                    
                 ))}
                </div>
              </main>
              <footer className={styles.footer}>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Powered by{' '}
                  <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
              </footer>
            </div>
            )
          }
          
        }
        
      </Query>
    </div>
    
  )};