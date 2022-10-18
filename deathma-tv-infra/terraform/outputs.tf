# account id
output "account_id" {
  value = data.aws_caller_identity.current.account_id
}

# network
# vpc
output "aws_vpc_TestVPC_id" {
  value = aws_vpc.TestVPC.id
}

# subnet
output "aws_subnet_TestPublicSubnet1_id" {
  value = aws_subnet.TestPublicSubnet1.id
}

output "aws_subnet_TestPrivateSubnet2_id" {
  value = aws_subnet.TestPrivateSubnet2.id
}

output "aws_subnet_TestPrivateSubnet1_id" {
  value = aws_subnet.TestPrivateSubnet1.id
}

output "aws_subnet_TestPublicSubnet2_id" {
  value = aws_subnet.TestPublicSubnet2.id
}

output "aws_subnet_TestPublicSubnet1_availability_zone" {
  value = aws_subnet.TestPublicSubnet1.availability_zone
}

output "aws_subnet_TestPrivateSubnet2_availability_zone" {
  value = aws_subnet.TestPrivateSubnet2.availability_zone
}

output "aws_subnet_TestPrivateSubnet1_availability_zone" {
  value = aws_subnet.TestPrivateSubnet1.availability_zone
}

output "aws_subnet_TestPublicSubnet2_availability_zone" {
  value = aws_subnet.TestPublicSubnet2.availability_zone
}

# igw
output "aws_internet_gateway_TestIGW_id" {
  value = aws_internet_gateway.TestIGW.id
}

# route_table
output "aws_route_table_TestPublicRouteTable_id" {
  value = aws_route_table.TestPublicRouteTable.id
}

output "aws_route_table_TestPrivateRouteTable_id" {
  value = aws_route_table.TestPrivateRouteTable.id
}

output "aws_route_table_association_TestPublicSubnet1_id" {
  value = aws_route_table_association.TestPublicSubnet1.id
}

output "aws_route_table_association_TestPublicSubnet2_id" {
  value = aws_route_table_association.TestPublicSubnet2.id
}

output "aws_route_table_association_TestPrivateSubnet1_id" {
  value = aws_route_table_association.TestPrivateSubnet1.id
}

# sg
output "aws_security_group_TestALBSecurityGroup_id" {
  value = aws_security_group.TestALBSecurityGroup.id
}

output "aws_security_group_TestPostgresSecurityGroup_id" {
  value = aws_security_group.TestPostgresSecurityGroup.id
}

output "aws_security_group_TestECSTaskSecurityGroup_id" {
  value = aws_security_group.TestECSTaskSecurityGroup.id
}
output "aws_route_table_association_TestPrivateSubnet2_id" {
  value = aws_route_table_association.TestPrivateSubnet2.id
}

# db
# rds
output "aws_db_instance_TestPostgres_id" {
  value = aws_db_instance.TestPostgres.id
}

output "aws_db_subnet_group_TestDBSubnetGroup_id" {
  value = aws_db_subnet_group.TestDBSubnetGroup.id
}

# backend
# ecr
output "aws_ecr_repository_TestLaravelRepository_id" {
  value = aws_ecr_repository.TestLaravelRepository.id
}

# ecs
output "aws_ecs_cluster_TestECSCluster_id" {
  value = aws_ecs_cluster.TestECSCluster.id
}

output "aws_ecs_cluster_TestECSCluster_name" {
  value = aws_ecs_cluster.TestECSCluster.name
}

# alb
output "aws_lb_listener_TestBackendECSIbListernerHttp_id" {
  value = aws_lb_listener.TestBackendECSIbListernerHttp.id
}

output "aws_lb_listener_TestBackendECSIbListernerHttps_id" {
  value = aws_lb_listener.TestBackendECSIbListernerHttps.id
}

output "aws_lb_target_group_TestTG_id" {
  value = aws_lb_target_group.TestTG.id
}

output "aws_lb_TestALB_id" {
  value = aws_lb.TestALB.id
}
