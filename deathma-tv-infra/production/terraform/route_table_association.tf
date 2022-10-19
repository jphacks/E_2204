resource "aws_route_table_association" "TestPublicSubnet1" {
  route_table_id = aws_route_table.TestPublicRouteTable.id
  subnet_id      = aws_subnet.TestPublicSubnet1.id
}

resource "aws_route_table_association" "TestPublicSubnet2" {
  route_table_id = aws_route_table.TestPublicRouteTable.id
  subnet_id      = aws_subnet.TestPublicSubnet2.id
}

resource "aws_route_table_association" "TestPrivateSubnet1" {
  route_table_id = aws_route_table.TestPrivateRouteTable.id
  subnet_id      = aws_subnet.TestPrivateSubnet1.id
}

resource "aws_route_table_association" "TestPrivateSubnet2" {
  route_table_id = aws_route_table.TestPrivateRouteTable.id
  subnet_id      = aws_subnet.TestPrivateSubnet2.id
}
