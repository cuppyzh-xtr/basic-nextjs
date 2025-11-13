import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/404.module.css'

export const metadata = {
    title: '404 - Page Not Found | Basic Next.js App Router',
    description: "The page you're looking for doesn't exist"
}

export default function NotFound() {
    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>404</h1>
                        <h2 className={styles.subtitle}>Page Not Found</h2>
                        <p className={styles.description}>
                            The page you're looking for doesn't exist or has been moved.
                            This is a custom 404 page using App Router.
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
    )
}