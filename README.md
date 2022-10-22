# サンプル（プロダクト名）

[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/49345024/197320379-71f30e19-6878-4a89-864f-acac6c258697.png)](https://www.youtube.com/watch?v=LUPQFB4QyVo)

## 製品概要
「リモートワークで１人で開発をせざるを得ない人達」が快適な開発生活を送るために開発したものが
チーム開発特化型の配信プラットフォーム「デスマTV」です．

### 背景(製品開発のきっかけ、課題等）
私たちはチーム全員で計12社にインターンに行きました．その結果として全員が「１人の作業時間がつらすぎる」という体験をしています．
そこから，つらくない，より良い開発体験がリモートワークでも得られたらと考え，このプロダクトの開発が決まりました．

また，私たちは，この「リモートワークで１人の作業時間がつらすぎる」という事象は次の2つの課題に起因すると考えました．
1. １人だけの環境にいること
2. 上司からフォローが難しい

また，それぞれの課題は次の番号が対応する方法によって解決できると仮説を持っています．
1. 作業の生配信により，環境をオープン化
2. 配信視聴・コメントによる軽い介入手段の実現

そこでこれらの解決策を実現する，
リモートワークで１人の人を助ける配信プラットフォーム，デスマTVを開発しました．

### 製品説明（具体的な製品の説明）
具体的には次のことができます．
1. GitHubアカウントを用いたログイン
2. 配信
3. 配信視聴
4. 配信コメント
5. 配信コメントへの深層学習による処理・解析
6. GitHubのIssueの進捗状況によるプログレスバーの表示

### 今後の展望
- 「リモートワークで１人で開発をせざるを得ない人達」を助けるためには，実際に会社に導入してもらう必要があるため，その視点での開発の継続
- UI/UXの改善
- 解析基盤・内容の改善

### 注力したこと（こだわり等）
#### インフラ
ライブ動画配信基盤
- アプリの要となる動画配信基盤にはパブリッククラウドのAWSが提供しているAmazon Interactive Video Service (IVS)を使いました。これを用いることで一対多のライブ配信を実現させています。このサービスを活用することでバックエンドのタスクを削減することができます。Amazon IVSは再生用のSDKが容易されており今回はそれを利用して実行しています。

CDNキャッシュパージの自動化
- クライアントの提供にはCDNであるAmazon CloudFrontを用いています。また、CloudFrontのオリジンサーバーとしてAmazon S3を用いています。クライアントをS3にデプロイするたびにCloudFrontのキャッシュを削除する必要がありますが通常操作であるAWSの管理画面からいちいちパージをするのは開発サイクルの高速化にはボトルネックです。今回はAWS LambdaとAWS SDKを用いて自動化させました。S3のオブジェクトが更新されることをキッカケに、対応するCloudFrontのキャッシュ削除をリクエストするように構成しています。

本番環境とステージング環境の用意
- いつもハッカソンでは発表直前に環境を壊してしまうのはよくあることです。本番と全く同じステージング環境を用意して本番が壊れること防止しています。これにより仮にステージングが壊れようともデモで恥をかくことはありません。安心してステージング環境を壊せます！

CI/CDを構成
- 自動デプロイは最高です。それからフロントのlintチェックも行っています。今回は本番環境とステージング環境を用意しているのでその分だけGitHub Actionsのワークフローを用意しています。mainにプッシュするとステージングにtagでプッシュすると本番環境にデプロイされるようになっています。

#### 機械学習
独自のBERTの8クラス・マルチラベル感情解析の基盤・API
- BERTモデルを独自に転移学習させ，軽量化のために，onnxruntimeのモデルに書き換えたものをサーバレス構成，IaCの管理のもとで動かしています．

### ドメイン一覧（ドメインはサービス名が決定次第付け替える）
#### 本番環境

配信用Web
- https://streamer.deathmatv.online/

視聴用Web
- https://viewer.deathmatv.online/

内部API
- https://api.deathmatv.online/

内部API2
- tbd

#### ステージング環境

配信用Web
- https://stg-streamer.deathmatv.online/

視聴用Web
- https://stg-viewer.deathmatv.online/

内部API
- https://stg-api.deathmatv.online/

内部API２
- tbd

### 配信のやり方
編集中

## 開発技術

### 活用した技術
- クラウド
- 機械学習
- Web

#### API・データ
- 梶原智之ら, “主観感情と客観感情の強度推定のための日本語データセット,” 言語処理学会 第27回年次大会 発表論文集(2021年3月)

#### フレームワーク・ライブラリ・モジュール
- React, Kotlin
- Pytorch, Hugging face, onnxruntime

#### システム構成図
![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/49345024/197322305-3c2c7be8-ec22-4a03-9040-43f8a3e576c7.png)

### 独自技術

#### ハッカソンで開発した独自機能・技術

- **配信基盤**
- text**マルチラベル**感情解析基盤

#### 製品に取り入れた研究内容（データ・ソフトウェアなど）（※アカデミック部門の場合のみ提出必須）
- 梶原智之ら, “主観感情と客観感情の強度推定のための日本語データセット,” 言語処理学会 第27回年次大会 発表論文集(2021年3月)

## インストール

### deathmatv-streamer-web

```
cd deathmatv-streamer-web
yarn
yarn dev
```

https://localhost:3001

### deathmatv-viewer-web

```
cd deathmatv-viewer-web
yarn
yarn dev
```

https://localhost:3000

### deathma-tv-server

tbd
