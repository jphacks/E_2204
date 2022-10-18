variable "CERTIFICATE_ARN" {
  type        = string
  description = "SSL Certificate arn for ALB"
}

variable "TFSTATE_S3_BUCKET_NAME" {
  type        = string
  description = "S3 bucket name for tfstate"
}

variable "TFSTATE_S3_BUCKET_KEY" {
  type        = string
  description = "S3 bucket key for tfstate"
}
