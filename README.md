# 株式会社AiGIVE コーポレートサイト

株式会社AiGIVEの公式ウェブサイトプロジェクトです。
React + TypeScript + Tailwind CSSで構築されています。

## 🚀 デプロイ（公開）方法

このプロジェクトは、特定のプラットフォームに依存せず、一般的なホスティングサービスで簡単に公開できるように構成されています。
持続性と管理のしやすさから、**Vercel** または **Netlify** の利用を推奨します。

### 推奨1: Vercelでの公開（最も簡単・高速）

VercelはReact開発元が提供する、世界標準のホスティングサービスです。

1. [Vercel](https://vercel.com/)のアカウントを作成します。
2. ダッシュボードの「Add New...」→「Project」をクリックします。
3. GitHubアカウントを連携し、`aigive-website` リポジトリをImportします。
4. 設定は自動検出されるため、そのまま「Deploy」をクリックします。
   - Framework Preset: `Vite`
   - Build Command: `pnpm run build` (または `npm run build`)
   - Output Directory: `dist`
5. 数分で公開され、URLが発行されます。

※ プロジェクトに含まれる `vercel.json` により、ページ遷移時の404エラーも自動的に防がれます。

### 推奨2: Netlifyでの公開

Netlifyも非常に人気のある、安定したホスティングサービスです。

1. [Netlify](https://www.netlify.com/)のアカウントを作成します。
2. 「Add new site」→「Import an existing project」をクリックします。
3. GitHubを選択し、`aigive-website` リポジトリを選びます。
4. 設定は自動検出されますが、念のため確認してください。
   - Build command: `pnpm run build`
   - Publish directory: `dist`
5. 「Deploy site」をクリックします。

※ プロジェクトに含まれる `netlify.toml` により、必要な設定が自動的に適用されます。

### GitHub Pagesでの公開（現状の設定）

現在、GitHub Actionsにより `gh-pages` ブランチへ自動デプロイされる設定になっていますが、SPA（シングルページアプリケーション）特有のルーティング問題が発生しやすいため、上記VercelまたはNetlifyの利用を強く推奨します。

## 🛠️ 開発環境

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript

## 📁 プロジェクト構成

- `client/src`: ソースコード
- `client/public`: 静的ファイル（画像など）
- `vercel.json`: Vercel用設定ファイル
- `netlify.toml`: Netlify用設定ファイル
