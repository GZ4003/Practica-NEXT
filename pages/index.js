import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAllFilesMetadata } from '../lib/mdx';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog-Alexis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
       Practica de JAMStack
        </h1>

        <div className={styles.grid}>
          {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`} className={styles.card}> 
            <a>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            </a>
          </Link>
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
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps(){
  const posts =  await getAllFilesMetadata();
  
  return{
    props:{ posts },
  };
}