# Basic Next.js SSG Site for AWS Amplify

A production-ready Next.js application configured for Static Site Generation (SSG) and optimized for deployment on AWS Amplify.

## Features

- ✅ **Static Site Generation (SSG)** - Pre-rendered at build time for optimal performance
- ✅ **Custom 404 Page** - Properly configured for static hosting
- ✅ **AWS Amplify Ready** - Optimized configuration for seamless deployment
- ✅ **Responsive Design** - Mobile-first approach with CSS modules
- ✅ **TypeScript Support** - Ready for TypeScript development
- ✅ **Dark Mode Support** - Automatic dark/light theme detection
- ✅ **SEO Optimized** - Proper meta tags and structured data

## Project Structure

```
basic-nextjs/
├── components/
│   └── Layout.js          # Main layout component with navigation
├── pages/
│   ├── _app.js           # App wrapper component
│   ├── index.js          # Home page (SSG)
│   ├── about.js          # About page (demonstrates getStaticProps)
│   └── 404.js            # Custom 404 error page
├── public/
│   └── favicon.ico       # Site favicon
├── styles/
│   ├── globals.css       # Global styles
│   ├── Layout.module.css # Layout component styles
│   ├── Home.module.css   # Home page styles
│   ├── About.module.css  # About page styles
│   └── 404.module.css    # 404 page styles
├── amplify.yml           # AWS Amplify build configuration
├── next.config.js        # Next.js configuration for static export
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000)

### Build for Production

1. **Generate static build:**
   ```bash
   npm run build
   ```

2. **Output:** Static files will be generated in the `out/` directory

## AWS Amplify Deployment

### Automatic Deployment

1. **Connect Repository:**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect your Git repository

2. **Build Configuration:**
   - Amplify will automatically detect the `amplify.yml` configuration
   - No additional setup required

3. **Deploy:**
   - Push to your connected branch to trigger deployment
   - Your site will be available at `https://[app-id].amplifyapp.com`

### Manual Configuration

If needed, use this build configuration in Amplify:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

## Key Configuration Details

### Next.js Configuration (`next.config.js`)

```javascript
const nextConfig = {
  output: 'export',        // Enable static export
  trailingSlash: true,     // Add trailing slashes for compatibility
  images: {
    unoptimized: true      // Disable image optimization for static export
  },
  distDir: 'out'          // Output directory
}
```

### 404 Page Handling

The custom 404 page (`pages/404.js`) is automatically:
- Generated as `404.html` during build
- Served by AWS Amplify for any non-existent routes
- Styled consistently with the rest of the site

## Pages Overview

- **Home (`/`)** - Landing page with feature showcase
- **About (`/about`)** - Demonstrates SSG with `getStaticProps`
- **404** - Custom error page for invalid routes

## Styling

- **CSS Modules** - Scoped styling for components
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Automatic theme detection
- **Modern CSS** - Flexbox and Grid layouts

## Performance

- **Static Generation** - All pages pre-rendered at build time
- **Optimized Assets** - Automatic code splitting and optimization
- **CDN Ready** - Perfect for global content delivery
- **Lighthouse Score** - Optimized for Core Web Vitals

## Browser Support

- Modern browsers (ES2018+)
- Mobile browsers
- Automatic polyfills via Next.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build: `npm run build`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For deployment issues, see [DEPLOYMENT.md](DEPLOYMENT.md) for detailed AWS Amplify configuration guidance.