# Purpose
Public Blog for Bridge Education Center
Pre-rendered static pages using static generation with Next.js, Markdown, and TypeScript


# Development Setup
## Repository
git clone https://github.com/itlead-thebridge/bridge-edu-blog-website.git
cd bridge-edu-blog-website

## Developer Setup
Install NodeJS 22 LTS https://nodejs.org/en/download
node -v   command should print v22.

Install Next.js tools https://nextjs.org/docs/app/getting-started/installation
cd blog
npm install next@latest react@latest react-dom@latest

npx next telemetry disable
vercel telemetry disable


## Unit Testing
cd blog
npm run build
npm run test

# Hosting
## Localhost
cd blog
npm run build
npm run dev


## Self hosting Node.js Server
cd blog
npm run build
npm run start
Browse to [localhost:3000](http://localhost:3000)

## CloudFlare 
https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/
cd blog
npm run build
npm run deploy
-- This will create a new Preview-type deployment under Pages section of the https://dash.cloudflare.com/ menu.
 
Output directory= .vercel/output/static


## See also
https://nextjsstarter.com/blog/next-starter-code-examples-for-immediate-use/
