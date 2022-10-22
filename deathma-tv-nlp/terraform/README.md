[![Board Status](https://dev.azure.com/Tech-fusionStudio/4f341ad5-8d2f-47ac-89db-74ee7fa176ce/b12509d1-23de-4847-bdb3-6fa2afcec73f/_apis/work/boardbadge/150a41c3-a61d-4d84-9a8e-baee6a7a530f)](https://dev.azure.com/Tech-fusionStudio/4f341ad5-8d2f-47ac-89db-74ee7fa176ce/_boards/board/t/b12509d1-23de-4847-bdb3-6fa2afcec73f/Microsoft.RequirementCategory)
# Agilely_IaC

## Docker CMD
1. .envを作成してAzureのKEYを入力
```
$ cp .env.example .env
$ vim .env
```

2. docker-compose upで起動してコンテナ内で実行
```
$ docker-compose up -d
$ docker-compose exec terraform /bin/ash
```

3. initしてplan...etc
```
$ terraform init
$ terraform plan
```

## Azure login (in Docker CMD)
```
az login
az account set --subscription "35akss-subscription-id"
az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<SUBSCRIPTION_ID>"
```

## 変数の追加
```
$ terraform apply -var "resource_group_name=myNewResourceGroupName"
- var.resource_group_name  # コード中で
```