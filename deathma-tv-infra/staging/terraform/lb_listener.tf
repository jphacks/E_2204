resource "aws_lb_listener" "TestBackendECSIbListernerHttp" {
  default_action {
    target_group_arn = aws_lb_target_group.TestTG.arn
    type             = "forward"
  }

  load_balancer_arn = aws_lb.TestALB.arn
  port              = "80"
  protocol          = "HTTP"

  tags = {
    Name  = "stg-test-backend-ecs-lb-listerner-http"
    Group = "test"
  }

  tags_all = {
    Name  = "stg-test-backend-ecs-lb-listerner-http"
    Group = "test"
  }
}

resource "aws_lb_listener" "TestBackendECSIbListernerHttps" {
  certificate_arn = var.CERTIFICATE_ARN

  default_action {
    target_group_arn = aws_lb_target_group.TestTG.arn
    type             = "forward"
  }

  load_balancer_arn = aws_lb.TestALB.arn
  port              = "443"
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-2016-08"

  tags = {
    Name  = "stg-test-backend-ecs-lb-listerner-https"
    Group = "test"
  }

  tags_all = {
    Name  = "stg-test-backend-ecs-lb-listerner-https"
    Group = "test"
  }
}
