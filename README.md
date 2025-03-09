# Purpose
Public Blog for Bridge Education Center
Pre-rendered static pages using static generation with Next.js, Markdown, and TypeScript


# Development Setup
## Repository
git clone https://github.com/itlead-thebridge/bridge-edu-blog-website.git
cd bridge-edu-blog-website

## Clone CloudFlare Template
npm create cloudflare@latest -- blog --framework=next

 
-- Executive.director@thebridge.io's Account

cd blog
npx next telemetry disable
vercel telemetry disable

## Unit Testing
npm run build
npm run test

# Hosting
## Localhost
npm run dev


## Self hosting Node.js Server
npm run build
npm run start
Browse to [localhost:3000](http://localhost:3000)

## CloudFlare
Build output directory= .vercel/output/static
https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/
npm install --save-dev @cloudflare/next-on-pages
npm install --save-dev eslint-plugin-next-on-pages

## See also
https://nextjsstarter.com/blog/next-starter-code-examples-for-immediate-use/
