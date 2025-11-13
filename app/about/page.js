import Layout from '../../components/Layout'
import Link from 'next/link'
import styles from '../../styles/About.module.css'

export const metadata = {
    title: 'About | Basic Next.js on AWS Amplify - App Router',
    description: 'Learn about this Next.js App Router SSG project'
}

// This function generates static params at build time
export async function generateStaticParams() {
    // For this simple case, we're just generating one static page
    // In a real app, you might fetch from an API or database
    return [
        {} // Empty object for the base /about route
    ]
}

export default async function AboutPage() {
    // Simulate some build-time data generation
    const buildTime = new Date().toISOString()

    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>About This App Router Project</h1>

                    <div className={styles.content}>
                        <p className={styles.description}>
                            This is a basic Next.js application using the new App Router, configured for
                            Static Site Generation (SSG) and optimized for deployment on AWS Amplify.
                        </p>

                        <div className={styles.buildInfo}>
                            <strong>Built at:</strong> {buildTime}
                        </div>

                        <h2>App Router Features</h2>
                        <ul className={styles.featureList}>
                            <li>✅ App Router (Next.js 13+)</li>
                            <li>✅ generateStaticParams for SSG</li>
                            <li>✅ Server Components</li>
                            <li>✅ Custom 404 Page</li>
                            <li>✅ AWS Amplify Optimized</li>
                            <li>✅ Responsive Design</li>
                        </ul>

                        <h2>Technology Stack</h2>
                        <div className={styles.techStack}>
                            <span className={styles.tech}>Next.js App Router</span>
                            <span className={styles.tech}>React Server Components</span>
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
    )
}