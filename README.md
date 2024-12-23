# Google Spread Sheet Writing test

Google Spread Sheet に Node.js から書き込みを行うテストファイルです。(for [Suiran Sell](https://github.com/suiranfes/sell.suiranfes.blue))

## 使い方

### 1. Google Spread Sheet の準備

1. Google Spread Sheet で適当なファイルを作成
1. アクセス権限を"リンクを知っている全員"、"編集者"に変更 
1. ID をメモしておく  
(ID とは、リンク `https://docs.google.com/spreadsheets/d/<ID>/edit?gid=0#gid=0` の `<ID>` の部分  
例: `https://docs.google.com/spreadsheets/d/abcdefghijklmn/edit?gid=0#gid=0` では `abcdefghijklmn`)

### 2. Google Cloud の準備

1. 18歳以上のアカウントを準備
1. `新しいプロジェクト`を作成
1. `API とサービス`から <kbd>API とサービスを有効にする</kbd>ボタンを押し、`Google Sheets API` を追加
1. また、サイドバーの `API とサービス`から`認証情報`を開き、`サービス アカウントを管理`を開く
1. <kbd>サービス アカウントを作成</kbd>ボタンを押し、適当に作成する
1. 作成したアカウントのメールアドレス (`***@***.***.gserviceaccount.com`) をメモする
1. また、作成したアカウントの`鍵を管理`から、新しい鍵 (JSON) を作成する
1. 自動的にダウンロードされた `.json` ファイル内の `private_key` をメモする

### 3. プログラムの動作

1. `npm` と `git` をインストール
1. このリポジトリをクローンする
1. `.env` ファイルを作成し、先ほどメモした情報を利用し、入力する  
    ```.env
    # スプレッドシートのURLに含まれる文字列
    SHEET_ID='シートのID'
    # サービスアカウントのアドレス
    GOOGLE_SERVICE_ACCOUNT_EMAIL='メアド'
    # サービスアカウントのkeyのJSONに含まれる`"private_key"`の値
    GOOGLE_PRIVATE_KEY='キー'
    ```
1. `npm i`
1. `npm run start`
1. (これで、スプレッドシートのタイトルがコンソールログに表示され、スプレッドシート内に `Sheet2` という名称のシートが作成されます)
1. (`src/main.ts` を編集すれば、読み取りや書き込みも可能なはずです: [詳細](https://zenn.dev/nananaoto/articles/e8c0ac181224cd#:~:text=%3B%0A%20%20%7D%0A%7D-,%E4%BD%BF%E3%82%8F%E3%82%8C%E6%96%B9%E3%81%AE%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%A7%E3%81%99%E3%80%82,-const%20spreadService%20%3D))

## 参考

- https://zenn.dev/nananaoto/articles/e8c0ac181224cd ([Source](https://github.com/nsuzuki7713/typescript-mono-repo/blob/b493fae44c32b509404e3afb478c63439884fe30/packages/playground/src/spreadsheet/main.ts))
