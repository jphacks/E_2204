resource "aws_subnet" "TestPublicSubnet1" {
  assign_ipv6_address_on_creation                = "false"
  cidr_block                                     = "10.0.0.0/25"
  enable_dns64                                   = "false"
  enable_resource_name_dns_a_record_on_launch    = "false"
  enable_resource_name_dns_aaaa_record_on_launch = "false"
  ipv6_native                                    = "false"
  map_public_ip_on_launch                        = "false"
  private_dns_hostname_type_on_launch            = "ip-name"
  availability_zone                              = "ap-northeast-1a"

  tags = {
    Name  = "prod-TestProgect-subnet-public1-ap-northeast-1a"
    group = "test"
  }

  tags_all = {
    Name  = "prod-TestProgect-subnet-public1-ap-northeast-1a"
    group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}

resource "aws_subnet" "TestPublicSubnet2" {
  assign_ipv6_address_on_creation                = "false"
  cidr_block                                     = "10.0.0.128/25"
  enable_dns64                                   = "false"
  enable_resource_name_dns_a_record_on_launch    = "false"
  enable_resource_name_dns_aaaa_record_on_launch = "false"
  ipv6_native                                    = "false"
  map_public_ip_on_launch                        = "false"
  private_dns_hostname_type_on_launch            = "ip-name"
  availability_zone                              = "ap-northeast-1c"

  tags = {
    Name  = "prod-TestProgect-subnet-public2-ap-northeast-1c"
    group = "test"
  }

  tags_all = {
    Name  = "prod-TestProgect-subnet-public2-ap-northeast-1c"
    group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}

resource "aws_subnet" "TestPrivateSubnet1" {
  assign_ipv6_address_on_creation                = "false"
  cidr_block                                     = "10.0.1.0/25"
  enable_dns64                                   = "false"
  enable_resource_name_dns_a_record_on_launch    = "false"
  enable_resource_name_dns_aaaa_record_on_launch = "false"
  ipv6_native                                    = "false"
  map_public_ip_on_launch                        = "false"
  private_dns_hostname_type_on_launch            = "ip-name"
  availability_zone                              = "ap-northeast-1a"

  tags = {
    Name  = "prod-TestProgect-subnet-private1-ap-northeast-1a"
    group = "test"
  }

  tags_all = {
    Name  = "prod-TestProgect-subnet-private1-ap-northeast-1a"
    group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}

resource "aws_subnet" "TestPrivateSubnet2" {
  assign_ipv6_address_on_creation                = "false"
  cidr_block                                     = "10.0.1.128/25"
  enable_dns64                                   = "false"
  enable_resource_name_dns_a_record_on_launch    = "false"
  enable_resource_name_dns_aaaa_record_on_launch = "false"
  ipv6_native                                    = "false"
  map_public_ip_on_launch                        = "false"
  private_dns_hostname_type_on_launch            = "ip-name"
  availability_zone                              = "ap-northeast-1c"

  tags = {
    Name  = "prod-TestProgect-subnet-private2-ap-northeast-1c"
    group = "test"
  }

  tags_all = {
    Name  = "prod-TestProgect-subnet-private2-ap-northeast-1c"
    group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}
