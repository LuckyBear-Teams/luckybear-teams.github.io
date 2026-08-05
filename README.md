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

`_posts/` に `YYYY-MM-DD-スラッグ.md` という名前でファイルを作成し、以下の形式で書きます。

```markdown
---
title: "記事タイトル"
tags: [タグ1, タグ2]
slug: url-slug
---
本文をここに書きます。
```

記事のURLは `permalink` 設定により
`/記事/{年}年{月}月{日}日/{slug}/` の形式になります。

## ローカルでの確認

```bash
bundle install
bundle exec jekyll serve
```

`http://localhost:4000/` で確認できます。
