data "terraform_remote_state" "variables" {
  backend = "s3"

  config = {
    bucket = "yukinissie-tfstate"
    key    = "test-ecs-infra/terraform.tfstate"
    region = "ap-northeast-1"
  }
}

variable "CERTIFICATE_ARN" { 
    type = string 
    description = "SSL Certificate arn for ALB"
}
