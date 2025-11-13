import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>About | Basic Next.js on AWS Amplify</title>
                <meta name="description" content="Learn about this Next.js SSG project" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <h1 className={styles.title}>About This Project</h1>

                        <div className={styles.content}>
                            <p className={styles.description}>
                                This is a basic Next.js application configured for Static Site Generation (SSG)
                                and optimized for deployment on AWS Amplify.
                            </p>

                            <h2>Features</h2>
                            <ul className={styles.featureList}>
                                <li>✅ Static Site Generation (SSG)</li>
                                <li>✅ Custom 404 Page</li>
                                <li>✅ AWS Amplify Optimized</li>
                                <li>✅ Responsive Design</li>
                                <li>✅ TypeScript Ready</li>
                            </ul>

                            <h2>Technology Stack</h2>
                            <div className={styles.techStack}>
                                <span className={styles.tech}>Next.js</span>
                                <span className={styles.tech}>React</span>
                                <span className={styles.tech}>AWS Amplify</span>
                                <span className={styles.tech}>CSS Modules</span>
                            </div>

                            <Link href="/" className={styles.backButton}>
                                ← Back to Home
                            </Link>
                        </div>
                    </main>
                </div>
            </Layout>
        </>
    )
}

// This function gets called at build time for SSG
export async function getStaticProps() {
    return {
        props: {
            buildTime: new Date().toISOString()
        }
    }
}