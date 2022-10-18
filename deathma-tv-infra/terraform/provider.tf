provider "aws" {
  region = "ap-northeast-1"
}

terraform {
  required_providers {
    aws = {
      version = "~> 4.25.0"
    }
  }

  backend "s3" {
    bucket = "yukinissie-tfstate"
    key    = "test-ecs-infra/terraform.tfstate"
    region = "ap-northeast-1"
  }
}
