import '../styles/globals.css'

export const metadata = {
    title: 'Basic Next.js on AWS Amplify',
    description: 'A basic Next.js SSG site hosted on AWS Amplify with App Router',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}