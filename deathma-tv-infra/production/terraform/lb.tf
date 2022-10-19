resource "aws_lb" "TestALB" {
  desync_mitigation_mode     = "defensive"
  drop_invalid_header_fields = "false"
  enable_deletion_protection = "false"
  enable_http2               = "true"
  enable_waf_fail_open       = "false"
  idle_timeout               = "60"
  internal                   = "false"
  ip_address_type            = "ipv4"
  load_balancer_type         = "application"
  name                       = "prod-TestALB"
  preserve_host_header       = "false"
  security_groups            = [aws_security_group.TestALBSecurityGroup.id]

  subnet_mapping {
    subnet_id = aws_subnet.TestPublicSubnet1.id
  }

  subnet_mapping {
    subnet_id = aws_subnet.TestPublicSubnet2.id
  }

  tags = {
    Name  = "prod-test-backend-ecs-alb"
    Group = "test"
  }

  tags_all = {
    Name  = "prod-test-backend-ecs-alb"
    Group = "test"
  }
}
