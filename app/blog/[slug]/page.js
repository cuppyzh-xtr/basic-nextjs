import Layout from '../../../components/Layout'
import Link from 'next/link'
import styles from '../../../styles/About.module.css'

export const metadata = {
    title: 'Blog Post | Basic Next.js App Router',
    description: 'A sample blog post generated with generateStaticParams'
}

// Generate static params for multiple blog posts
export async function generateStaticParams() {
    // In a real app, you'd fetch this from an API or database
    const posts = [
        { slug: 'first-post' },
        { slug: 'second-post' },
        { slug: 'third-post' }
    ]

    return posts.map((post) => ({
        slug: post.slug
    }))
}

export default async function BlogPost({ params }) {
    const { slug } = params

    // Simulate fetching post data (this runs at build time)
    const postData = {
        'first-post': {
            title: 'My First Blog Post',
            content: 'This is the content of my first blog post using App Router and generateStaticParams.',
            date: '2025-11-13'
        },
        'second-post': {
            title: 'Understanding generateStaticParams',
            content: 'This post explains how generateStaticParams works in Next.js App Router for static site generation.',
            date: '2025-11-14'
        },
        'third-post': {
            title: 'Deploying to AWS Amplify',
            content: 'Learn how to deploy Next.js App Router applications to AWS Amplify with static site generation.',
            date: '2025-11-15'
        }
    }

    const post = postData[slug] || {
        title: 'Post Not Found',
        content: 'This post does not exist.',
        date: 'Unknown'
    }

    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>{post.title}</h1>

                    <div className={styles.content}>
                        <p className={styles.description}>
                            <strong>Published:</strong> {post.date}
                        </p>

                        <div className={styles.postContent}>
                            <p>{post.content}</p>
                        </div>

                        <div className={styles.techStack}>
                            <span className={styles.tech}>Slug: {slug}</span>
                            <span className={styles.tech}>Generated with generateStaticParams</span>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <Link href="/blog" className={styles.backButton}>
                                ← Back to Blog
                            </Link>
                            <Link href="/" className={styles.backButton}>
                                ← Home
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}