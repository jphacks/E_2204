# resource "aws_db_instance" "TestPostgres" {
#   allocated_storage                     = "20"
#   auto_minor_version_upgrade            = "false"
#   availability_zone                     = "ap-northeast-1a"
#   backup_retention_period               = "0"
#   backup_window                         = "15:34-16:04"
#   ca_cert_identifier                    = "rds-ca-2019"
#   copy_tags_to_snapshot                 = "true"
#   customer_owned_ip_enabled             = "false"
#   db_name                               = "test"
#   db_subnet_group_name                  = aws_db_subnet_group.TestDBSubnetGroup.name
#   deletion_protection                   = "false"
#   engine                                = "postgres"
#   engine_version                        = "14.2"
#   iam_database_authentication_enabled   = "false"
#   identifier                            = "prod-test-postgres"
#   instance_class                        = "db.t4g.micro"
#   iops                                  = "0"
#   license_model                         = "postgresql-license"
#   maintenance_window                    = "sun:18:30-sun:19:00"
#   max_allocated_storage                 = "0"
#   monitoring_interval                   = "0"
#   multi_az                              = "false"
#   option_group_name                     = "default:postgres-14"
#   parameter_group_name                  = "default.postgres14"
#   performance_insights_enabled          = "false"
#   performance_insights_retention_period = "0"
#   port                                  = "5432"
#   publicly_accessible                   = "false"
#   skip_final_snapshot                   = "true"
#   storage_encrypted                     = "true"
#   storage_type                          = "gp2"
#   username                              = "postgres"
#   password                              = "aaaaaaaa"
#   vpc_security_group_ids                = [aws_security_group.TestPostgresSecurityGroup.id]
#   tags = {
#     Name  = "prod-test-postgres"
#     Group = "test"
#   }
#   tags_all = {
#     Name  = "prod-test-postgres"
#     Group = "test"
#   }
# }
