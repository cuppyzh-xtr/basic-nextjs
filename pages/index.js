import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Basic Next.js on AWS Amplify</title>
                <meta name="description" content="A basic Next.js SSG site hosted on AWS Amplify" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <h1 className={styles.title}>
                            Welcome to <a href="https://nextjs.org">Next.js!</a>
                        </h1>

                        <p className={styles.description}>
                            This is a static site generated with Next.js and hosted on AWS Amplify
                        </p>

                        <div className={styles.grid}>
                            <a href="https://nextjs.org/docs" className={styles.card}>
                                <h2>Documentation &rarr;</h2>
                                <p>Find in-depth information about Next.js features and API.</p>
                            </a>

                            <a href="https://nextjs.org/learn" className={styles.card}>
                                <h2>Learn &rarr;</h2>
                                <p>Learn about Next.js in an interactive course with quizzes!</p>
                            </a>

                            <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
                                <h2>Examples &rarr;</h2>
                                <p>Discover and deploy boilerplate example Next.js projects.</p>
                            </a>

                            <a href="https://aws.amazon.com/amplify/" className={styles.card}>
                                <h2>AWS Amplify &rarr;</h2>
                                <p>Learn about AWS Amplify hosting and deployment options.</p>
                            </a>
                        </div>
                    </main>
                </div>
            </Layout>
        </>
    )
}