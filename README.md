# ポートフォリオサイト（静的）

シンプルで軽量な日本語ポートフォリオのスターターです。HTML/CSS/JSのみで構成し、レスポンシブ対応・ダークモード切替・アクセシビリティの基本に配慮しています。

## 使い方

- ローカルでプレビュー
  - 任意のHTTPサーバーで `index.html` を開いてください。
  - 例（Python）: `python3 -m http.server` を実行し、表示されたURLにアクセス。
- デプロイ
  - 任意の静的ホスティング（GitHub Pages, Netlify, Vercel など）に `index.html` を配置するだけです。

## 主な編集箇所

- `index.html`
  - タイトル、メタ情報（`<title>`/`<meta name="description">`/OGタグ）の修正。
  - ヒーロー見出しの「あなたの名前」を実名に変更。
  - 各セクション（プロフィール/スキル/制作物/経歴/お問い合わせ）の文言とリンクを更新。
  - 連絡先のメールアドレス（`mailto:you@example.com`）を変更。
- `styles/main.css`
  - カラートークン（`--primary`/`--accent`/`--bg` など）で配色を微調整。
  - レイアウト/間隔/カードの見た目を調整。
- `assets/`
  - `logo.svg` をご自身のロゴに差し替え。
  - `avatar.svg` をプロフィール画像に差し替え（PNG/JPGでも可、`index.html` の `img` を更新）。
- `scripts/main.js`
  - ダークモードの初期設定や、必要に応じて機能追加。

## 構成

- `index.html` — サイトの本体
- `styles/main.css` — テーマ変数とレスポンシブスタイル
- `scripts/main.js` — テーマ切替、モバイルナビ
- `assets/` — ロゴ/アバター等のアセット

## カスタマイズのヒント

- セクションの追加：`<section>` を既存の構造にならって追加してください。
- プロジェクトカード：`.grid.projects` 内の `<article class="card">` を複製・編集します。
- 速度最適化：画像はできるだけ `*.webp` を使い、幅に応じて `width/height` を指定します。
- アクセシビリティ：画像 `alt`、`aria-label`、見出しレベルの順序を適切に保つようにしてください。

## よくある変更例

- フォントを変えたい：`body{ font-family: ... }` を書き換え。
- アクセントカラー変更：`:root{ --primary: #... ; --accent: #... }`。
- ダークモードをデフォルトに：`scripts/main.js` 内の初期判定を `applyTheme('dark')` に変更。

---
不明点や追加入力（実名、職種、スキルリスト、制作物URL、SNSリンク等）をいただければ、こちらで反映して完成版に調整します。
