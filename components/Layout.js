import Link from 'next/link'
import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        Basic Next.js
                    </Link>
                    <div className={styles.navLinks}>
                        <Link href="/" className={styles.navLink}>
                            Home
                        </Link>
                        <Link href="/about" className={styles.navLink}>
                            About
                        </Link>
                        <Link href="/blog" className={styles.navLink}>
                            Blog
                        </Link>
                    </div>
                </nav>
            </header>

            {children}

            <footer className={styles.footer}>
                <p>
                    Built with{' '}
                    <a
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerLink}
                    >
                        Next.js
                    </a>
                    {' '}and hosted on{' '}
                    <a
                        href="https://aws.amazon.com/amplify/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerLink}
                    >
                        AWS Amplify
                    </a>
                </p>
            </footer>
        </div>
    )
}