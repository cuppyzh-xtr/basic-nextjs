# AWS Amplify Deployment Guide

This project is configured for deployment on AWS Amplify with Static Site Generation (SSG).

## Prerequisites

- AWS Account
- GitHub repository (or other supported Git provider)

## Deployment Steps

### 1. Connect to Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git provider and select this repository
4. Choose the branch you want to deploy (typically `main`)

### 2. Build Settings

Amplify should automatically detect the `amplify.yml` file in the root directory. If not, you can manually configure:

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

### 3. Environment Variables

No additional environment variables are required for this basic setup.

### 4. Custom Domain (Optional)

1. In the Amplify console, go to "Domain management"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Important Notes

- This project uses `output: 'export'` in `next.config.js` for static export
- The custom 404 page will work automatically with Amplify's error document configuration
- All images are configured as `unoptimized: true` for static export compatibility
- The site will be automatically rebuilt and deployed on every push to the connected branch

## Local Development

To test the static build locally:

```bash
npm install
npm run build
```

The static files will be generated in the `out/` directory.

## Troubleshooting

- Ensure `node_modules` and `.next` are in `.gitignore`
- If the 404 page doesn't work, check that the build output contains `404.html`
- For build issues, check the Amplify build logs in the console