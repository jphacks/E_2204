resource "aws_ecr_repository" "TestLaravelRepository" {
  encryption_configuration {
    encryption_type = "KMS"
  }

  image_scanning_configuration {
    scan_on_push = "true"
  }

  image_tag_mutability = "MUTABLE"
  name                 = "deathma-tv-server"

  tags = {
    Name  = "deathma-tv-server-repository"
    Group = "test"
  }

  tags_all = {
    Name  = "deathma-tv-server-repository"
    Group = "test"
  }
}
