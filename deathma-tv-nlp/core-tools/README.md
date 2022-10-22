# Agilely: Azure Functions

1. docker-compose upで起動してコンテナ内で実行
```
$ docker-compose build
$ docker-compose up -d
$ docker-compose exec terraform /bin/ash
```


## 環境/関数作成、ローカル/本番環境へのデプロイ
### Azure Functions プロジェクトを作成する
ターミナル ウィンドウまたはコマンド プロンプトで、プロジェクトの空のフォルダーに移動し、次のコマンドを実行します。
```
$ func init
```
また、プロジェクトのランタイムを選択するように求められます。 python を選択します。

### 関数を作成する
関数を作成するには、次のコマンドを実行します。
```
$ func new
$ func new --name HttpExample --template "HTTP trigger" --authlevel "anonymous"
```
関数のテンプレートを選択するように求められます。 作業の開始用として、HTTP トリガーをお勧めします。

### 関数プロジェクトをローカルで実行する
次のコマンドを実行して、関数アプリを開始します。
```
$ func start
```
HTTP 関数の URL が出力されます。これをブラウザーのアドレス バーにコピーして実行できます。

デバッグを停止するには、ターミナルで Ctrl + C を使用します。

__現状、Linux（Arm Architecture）はローカルテストには対応していないため、コンテナ外でテストする必要あり__

### コードを Azure にデプロイする
Functions プロジェクトを Azure に発行するには、次のコマンドを入力します。
```
$ func azure functionapp publish agilely-linux-function-app
```
Azure へのサインインを求めるメッセージが表示される場合があります。 画面の指示に従います。

When you're using the Azure CLI, you can turn on the param-persist option that automatically tracks the names of your created resources. For more information, see Azure CLI persisted parameter. \
$ az config param-persist on