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
    bucket = var.TFSTATE_S3_BUCKET_NAME
    key    = var.TFSTATE_S3_BUCKET_KEY
    region = "ap-northeast-1"
  }
}
