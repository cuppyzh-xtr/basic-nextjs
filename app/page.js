import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export const metadata = {
    title: 'Basic Next.js on AWS Amplify - App Router',
    description: 'A basic Next.js SSG site hosted on AWS Amplify using App Router'
}

export default function HomePage() {
    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Welcome to <a href="https://nextjs.org">Next.js App Router!</a>
                    </h1>

                    <p className={styles.description}>
                        This is a static site generated with Next.js App Router and hosted on AWS Amplify
                    </p>

                    <div className={styles.grid}>
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation &rarr;</h2>
                            <p>Find in-depth information about Next.js App Router features and API.</p>
                        </a>

                        <a href="https://nextjs.org/learn" className={styles.card}>
                            <h2>Learn &rarr;</h2>
                            <p>Learn about Next.js App Router in an interactive course with quizzes!</p>
                        </a>

                        <a href="/about" className={styles.card}>
                            <h2>About Page &rarr;</h2>
                            <p>Visit our about page built with generateStaticParams.</p>
                        </a>

                        <a href="https://aws.amazon.com/amplify/" className={styles.card}>
                            <h2>AWS Amplify &rarr;</h2>
                            <p>Learn about AWS Amplify hosting and deployment options.</p>
                        </a>
                    </div>
                </main>
            </div>
        </Layout>
    )
}