resource "aws_ecr_repository" "TestLaravelRepository" {
  encryption_configuration {
    encryption_type = "KMS"
  }

  image_scanning_configuration {
    scan_on_push = "true"
  }

  image_tag_mutability = "MUTABLE"
  name                 = "test-laravel"

  tags = {
    Name  = "test-laravel-repository"
    Group = "test"
  }

  tags_all = {
    Name  = "test-laravel-repository"
    Group = "test"
  }
}
