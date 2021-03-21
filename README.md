# My Personal blog

## Why
Created to learn nextjs and tailwind CSS and keep me organized.

## Deploy

### Vercel
    Deployed automatically on every new branch

### Docker
    Used in production ATM

#### Build
```bash
docker build -t helderferreira/blog .
```

#### Run
```bash
docker run -it -p 3000:3000 helderferreira/blog:latest
```