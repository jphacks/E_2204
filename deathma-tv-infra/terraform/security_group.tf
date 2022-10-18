resource "aws_security_group" "TestALBSecurityGroup" {
  description = "TestALBSG"

  egress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = "0"
    protocol    = "-1"
    self        = "false"
    to_port     = "0"
  }

  ingress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = "443"
    protocol    = "tcp"
    self        = "false"
    to_port     = "443"
  }

  ingress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = "80"
    protocol    = "tcp"
    self        = "false"
    to_port     = "80"
  }

  name = "TestALBSecurityGroup"

  tags = {
    Name  = "test-alb-security-group"
    Group = "test"
  }

  tags_all = {
    Name  = "test-alb-security-group"
    Group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}

resource "aws_security_group" "TestPostgresSecurityGroup" {
  description = "Created by RDS management console"

  egress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = "0"
    protocol    = "-1"
    self        = "false"
    to_port     = "0"
  }

  ingress {
    cidr_blocks = [
      aws_subnet.TestPublicSubnet1.cidr_block,
      aws_subnet.TestPublicSubnet2.cidr_block
    ]
    from_port = "5432"
    protocol  = "tcp"
    self      = "false"
    to_port   = "5432"
  }

  name = "TestPostgresSecurityGroup"

  tags = {
    Name  = "test-postgres-security-group"
    Group = "test"
  }

  tags_all = {
    Name  = "test-postgres-security-group"
    Group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}

resource "aws_security_group" "TestECSTaskSecurityGroup" {
  description = "TestECSTaskSecurityGroup"

  egress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = "0"
    protocol    = "-1"
    self        = "false"
    to_port     = "0"
  }

  ingress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port   = "80"
    protocol    = "tcp"
    self        = "false"
    to_port     = "80"
  }

  name = "TestECSTaskSecurityGroup"

  tags = {
    Name  = "test-ecs-task-security-group"
    Group = "test"
  }

  tags_all = {
    Name  = "test-ecs-task-security-group"
    Group = "test"
  }

  vpc_id = aws_vpc.TestVPC.id
}
