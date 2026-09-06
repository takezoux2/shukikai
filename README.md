This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to GitHub Pages

### 1. GitHub Actions (推奨・自動デプロイ)

リポジトリの `main` ブランチに push すると、`.github/workflows/deploy.yml` により自動でビルド＆デプロイされます。

**GitHub側の設定手順:**
1. GitHub リポジトリの **Settings** > **Pages** を開く。
2. **Build and deployment** > **Source** で **「GitHub Actions」** を選択する。
3. `main` ブランチに push すると自動的にデプロイが実行されます。

### 2. 手動デプロイ (gh-pages ブランチへの push)

ローカルから手動で `gh-pages` ブランチにデプロイする場合:

```bash
pnpm run deploy
```

> **Note**: 静的エクスポート (`output: 'export'`) を使用しており、`public/.nojekyll` がビルド時に `out/.nojekyll` へ自動配置されるため、Jekyll によるファイル無視を防止しています。

