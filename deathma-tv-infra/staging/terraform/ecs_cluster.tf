resource "aws_ecs_cluster" "TestECSCluster" {
  configuration {
    execute_command_configuration {
      logging = "DEFAULT"
    }
  }

  name = "stg-deathma-tv-server-cluster"

  setting {
    name  = "containerInsights"
    value = "disabled"
  }

  tags = {
    "ecs:cluster:createdFrom" = "ecs-console-v2"
    Name                      = "stg-test-ecs-cluster"
    Group                     = "test"
  }

  tags_all = {
    "ecs:cluster:createdFrom" = "ecs-console-v2"
    Name                      = "stg-test-ecs-cluster"
    Group                     = "test"
  }
}
