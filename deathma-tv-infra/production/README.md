# ECS (Fargate)を Terraform で用意する

以下の AWS リソースを Terraform を使って作成し、ECS クラスターを用意するところまでを行います。ECS サービスやタスク定義の作成と更新は [kayac/ecspresso](https://github.com/kayac/ecspresso) で行います。

- vpc
- subnet
- igw
- route_table
- sg (security group)
- rds
- ecr
- alb
- ecs

## 注意

- 以下のリソースは自動生成されますが、削除も自動で行われるものなのでここでは Terraform で管理しません。
  - メインルートテーブル
    - VPC が自動生成＆削除するため
  - デフォルトネットワーク ACL
    - VPC が自動生成＆削除するため
- ドメインの割り当てや削除に関しては手動で行います。
- DB のマイグレーション基盤は入れていないので追加する必要があります。(ORM の機能で migration する方法もあるでしょう)

## インフラ構成図

![インフラ構成図](https://gyazo.com/f72a3698f3019ceb75c0275ac2f0fbef)

## 前提条件

以下を行なっておいてください。

1. AWS Profile のセットアップ
2. Terraform v0.13.7 のインストール
3. ecspresso のインストール
4. `ecsTaskExecutionRole` を IAM に作っておく。（内容は `AmazonEC2FullAccess`, `AmazonECSTaskExecutionRolePolicy` を一つ持ったもの。それから以下のようなインラインポリシーを持ったもの）
   ```
   {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "ssmmessages:CreateControlChannel",
                    "ssmmessages:CreateDataChannel",
                    "ssmmessages:OpenControlChannel",
                    "ssmmessages:OpenDataChannel"
                ],
                "Resource": "*"
            }
        ]
   }
   ```
5. リポジトリに GitHub Actions 用のシークレット（`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`）を登録しておく。

## Postgres のパスワードを変更

`terraform/db_instance.tf` の `aws_db_instance.TestPostgress` にある `password` を任意の値に変えます。8 文字以上にしてください。

## 全てのリソースの生成

```sh
cd ./terraform
terraform init
terraform apply -var="CERTIFICATE_ARN=XXXXXXXXXXXXXXXXXXXXXXX"
```

## ECR にイメージをデプロイ

.github/workflow/register.yml を GitHub 上で workflow_dispatch を使って手動で実行します。

## ECS でコンテナを起動

初回だけ以下のコマンドを実行します。

```
cd ecspresso
make create
```

## メモ

### Terraform の基本

Terraform はマネージドサービスをコードで管理できる IaC ツールです。
`terraform.tfstate` ファイルに構築したリソースを記録して管理しています。

### Terraform の操作

`terraform apply` する際に得られる差分を確認する。

```
terraform plan
```

tf ファイルを元にリソースを作成する。

```
terraform apply
```

terraform で管理しているリソースを削除する。

```
terraform destroy
```

yes か確認せずに強制的に適用する。

```
terraform apply -auto-approve
```

yes か確認せずに強制的に削除する。

```
terraform destroy -force
```
