# Lucky Bear 公式サイト

Lucky Bear（学校内グループ）の公式サイトです。GitHub Pages + Jekyll で構築しています。

サイトURL: https://luckybear-teams.github.io

## 構成

- `index.html` … ホームページ（新着記事5件を表示）
- `blog/index.html` … ブログホーム（全記事一覧＋検索）
- `_posts/` … ブログ記事（Markdown）
- `_layouts/` … ページ共通レイアウト（`default.html` / `post.html`）
- `_includes/` … ヘッダー・フッター・ライセンス表記コメントの部品
- `assets/` … CSS・JS・アイコン画像

## 記事の追加方法

`_posts/` に `{年}-{月}-{日}-{タイトル}.md`（例: `2026-08-06-夏の活動報告.md`）という名前でファイルを作成し、以下の形式で書きます。

```markdown
---
title: "記事タイトル"
tags: [タグ1, タグ2]
---
本文をここに書きます。
```

記事のURLは `permalink` 設定により、ファイル名の日付とタイトルから自動生成され
`/記事/{年}年{月}月{日}日/{タイトル}/` の形式になります。
（例: `2026-08-06-夏の活動報告.md` → `/記事/2026年08月06日/夏の活動報告/`）

## 数式（LaTeX）の書き方

記事本文中に以下の記法で数式を書くと、MathJaxにより自動的に描画されます。

- 文中数式: `\( E = mc^2 \)`
- 別行立て数式: `$$ \int_0^1 x^2 \, dx = \frac{1}{3} $$`

## ローカルでの確認

```bash
bundle install
bundle exec jekyll serve
```

`http://localhost:4000/` で確認できます。
