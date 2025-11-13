import Layout from '../../components/Layout'
import Link from 'next/link'
import styles from '../../styles/About.module.css'

export const metadata = {
    title: 'Blog | Basic Next.js App Router',
    description: 'Blog posts generated with generateStaticParams'
}

export default function BlogIndex() {
    const posts = [
        { slug: 'first-post', title: 'My First Blog Post', excerpt: 'Introduction to App Router' },
        { slug: 'second-post', title: 'Understanding generateStaticParams', excerpt: 'How SSG works in App Router' },
        { slug: 'third-post', title: 'Deploying to AWS Amplify', excerpt: 'Deploy App Router apps to Amplify' }
    ]

    return (
        <Layout>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>Blog Posts</h1>

                    <div className={styles.content}>
                        <p className={styles.description}>
                            These blog posts are generated using generateStaticParams at build time.
                        </p>

                        <div className={styles.postList}>
                            {posts.map((post) => (
                                <div key={post.slug} className={styles.postCard}>
                                    <h3>
                                        <Link href={`/blog/${post.slug}`} className={styles.postLink}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p>{post.excerpt}</p>
                                </div>
                            ))}
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