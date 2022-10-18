resource "aws_ecs_cluster_capacity_providers" "TestECSCapacityProider" {
  cluster_name = aws_ecs_cluster.TestECSCluster.name

  capacity_providers = ["FARGATE", "FARGATE_SPOT"]
}
