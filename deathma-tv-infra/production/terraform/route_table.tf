resource "aws_route_table" "TestPublicRouteTable" {
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.TestIGW.id
  }

  tags = {
    Name  = "prod-TestProgect-rtb-public"
    Group = "test"
  }

  tags_all = {
    Name  = "prod-TestProgect-rtb-public"
    Group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}

resource "aws_route_table" "TestPrivateRouteTable" {
  tags = {
    Name  = "prod-TestProgect-rtb-private"
    Group = "test"
  }

  tags_all = {
    Name  = "prod-TestProgect-rtb-private"
    Group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}
