import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = "tranqui";
export const siteTitle = 'tranqui.eth';

export default function Layout({ children, home }) {
   return (
     <div className={styles.container}>
       <Head>
         <link rel="icon" href="/favicon.ico" />
{/*          <meta
           name="description"
           content="tranqui.eth personal website"
         /> */}
         <meta
           property="og:image"
           content={`https://og-image.vercel.app/${encodeURI(
             siteTitle,
           )}.png?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg`}
         />
         <meta name="og:title" content={siteTitle} />
         <meta name="twitter:card" content={`https://og-image.vercel.app/${encodeURI(
             siteTitle,
           )}.png?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg`}
          />
         <meta name="twitter:card" content="summary_large_image"
          />
         <meta name="twitter:title" content="tranqui.eth"
          />
{/*          <meta name="twitter:description" content="personal website"
          /> */}
         <meta name="twitter:image" content={`https://og-image.vercel.app/${encodeURI(
             siteTitle,
           )}.png?theme=dark&md=0&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg`}
          />                                        
       </Head>
       <header className={styles.header} >
         {home ? (
           <>     
               <h1>
                  {"{ tranqui.eth }" }
               </h1>
{/*              <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
           </>
         ) : (
           <>
             <Link href="/">
               <h1 className="headerAwayFromHome">
                  {"{ tranqui.eth }" }
               </h1>
             </Link>
           </>
         )}
       </header>
       <main>{children}</main>
       {!home && (
         <div className={styles.backToHome}>
           <Link href="/">
             <a>← Back to home</a>
           </Link>
         </div>
       )}
     </div>
   );
 }