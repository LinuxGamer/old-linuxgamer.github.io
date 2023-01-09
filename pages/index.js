import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar.js';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LinuxGamer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
      <div id="cookiePopup">
        <h4>Cookie Consent</h4>
        <p>Our website uses cookies to provide your browsing experience and relavent informations.Before continuing to use our website, you agree & accept of our  <a href="#">Cookie Policy & Privacy</a></p>
        <button id="acceptCookie">Accept</button> 
      </div>
        {/* <Image src="../assets/panda1.png" alt="mascot placeholder" /> */}
        <p className={styles.titlecard}>
            <h1 className={styles.title}>
                Welcome to <a href="https://github.com/LinuxGamer/" target="_blank" rel="noreferrer">LinuxGamer's Website</a>
            </h1>
        </p>

        <p className={styles.titlecard}>
            <p className={styles.description}>
                I'm CJ, known online as LinuxGamer.
            </p>
            <p className={styles.description}>
                I am a Content Creator foccusing on Art and Tech.
            </p>
        </p>
      </main>

      <footer>
        <a href="https://twitter.com/The_LinuxGamer"><Image className={styles.footersocial} src="/twitter.png" width="24" height="24"></Image></a>
        <a href="https://www.youtube.com/channel/UCbBtLFxKBpcwt85EoP0kXRg"><Image className={styles.footersocial} src="/youtube.png" width="24" height="24"></Image></a>
        <a href="https://twitch.tv/the_linuxgamer"><Image className={styles.footersocial} src="/twitch.png" width="24" height="24"></Image></a>
        <a href="https://discord.gg/zsCX3Pqerq"><Image className={styles.footersocial} src="/discord.png" width="24" height="24"></Image></a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Venera", Calibri, Tahoma, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
        #cookiePopup {
          background: white;
          width: 25%;
          position: fixed;
          left: 10px;
          bottom: 20px;
          box-shadow: 0px 0px 15px #cccccc;
          padding: 5px 10px;
        }
        #cookiePopup p{
          text-align: left;
          font-size: 15px;
          color: #4e4e4e;
        }
        #cookiePopup button{
          width: 100%;
          border: navajowhite;
          background: #097fb7;
          padding: 5px;
          border-radius: 10px;
          color: white;
        }
      `}</style>
    </div>
  )
}