resource "aws_db_subnet_group" "TestDBSubnetGroup" {
  description = "Created from the RDS Management Console"
  name        = aws_vpc.TestVPC.id
  subnet_ids  = [aws_subnet.TestPublicSubnet1.id, aws_subnet.TestPublicSubnet2.id, aws_subnet.TestPrivateSubnet1.id, aws_subnet.TestPrivateSubnet2.id]
  tags = {
    Group = "test"
  }

  tags_all = {
    Group = "test"
  }
}
