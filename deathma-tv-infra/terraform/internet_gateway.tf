resource "aws_internet_gateway" "TestIGW" {
  tags = {
    Name  = "TestProgect-igw"
    Group = "test"
  }

  tags_all = {
    Name  = "TestProgect-igw"
    Group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}
