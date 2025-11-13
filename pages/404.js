import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/404.module.css'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found | Basic Next.js</title>
                <meta name="description" content="The page you're looking for doesn't exist" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>404</h1>
                            <h2 className={styles.subtitle}>Page Not Found</h2>
                            <p className={styles.description}>
                                The page you're looking for doesn't exist or has been moved.
                            </p>
                            <Link href="/" className={styles.homeButton}>
                                Go Back Home
                            </Link>
                        </div>

                        <div className={styles.illustration}>
                            <div className={styles.errorCode}>404</div>
                        </div>
                    </main>
                </div>
            </Layout>
        </>
    )
}