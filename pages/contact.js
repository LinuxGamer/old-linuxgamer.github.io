import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout.js';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import Button from  'next/button';

export default function Home() {
  return (
    <Layout home>
    <main>
      <Head>
        <title>CJ (Linux Gamer)</title>
      </Head>
      <Link href="/" passHref>
        <button>
          Home
        </button>
      </Link>
      <Link href="/about" passHref>
        <button>
          About
        </button>
      </Link>
      <Link href="/gallery">
        <button>
          Gallery
        </button>
      </Link>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm CJ, I'm a Digital/Pixel Artist, and software developer.</p>
      </section>        
        <div className={utilStyles.grid}>
          <a href="mailto:charl.cj.monke@gmail.com" className={utilStyles.card}>
            <h3>Email &rarr;</h3>
            {/* <img src="https://github.com/LinuxGamer/Art/blob/main/4DB7492F-B550-4114-8BB9-F3CBF4224202.png?raw=true"></img> */}
            <p>You can contact me via email if you prefer.</p>
          </a>
          <a href="https://discord.gg/s58s2b9Xpr" className={utilStyles.card}  target="_blank" rel="noreferrer">
            <h3>Discord &rarr;</h3>
            <p>Visit my Blog to see all my posts, about Art, Gaming, Tech and Linux.</p>
          </a>
          <br></br>
          <a href="https://linkfree.eddiehub.io/LinuxGamer" className={utilStyles.card}  target="_blank" rel="noreferrer">
            <h3>My Socials &rarr;</h3>
            <p>Contact me via one of my socials and I am quite likely to respond, but not always :)</p>
          </a>
        </div>
    </main>
    <footer>
        <a href="/contact">
          <button>
            Contact Us
          </button>
        </a>
        <p>Website made with ❤ by CJ (LinuxGamer) - Copyright ©️ 2022 CJ (LinuxGamer)</p>
      </footer>
    </Layout>
  );
}