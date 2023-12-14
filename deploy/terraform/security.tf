resource "aws_security_group" "crud_sg" {
  name        = "crud_sg"
  description = "crud security group"
  vpc_id      = aws_vpc.crud_vpc_1.id
  tags        = {
    "Name" = "crud_sg"
  }
}

resource "aws_security_group_rule" "public_out" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.crud_sg.id
}

resource "aws_security_group_rule" "public_in_ssh" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.crud_sg.id
}

resource "aws_key_pair" "crud-api-key" {
  key_name   = "crud-api-key"
  public_key = file("~/.ssh/crud-api-key.pub")
}

resource "aws_security_group_rule" "public_in_http" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.crud_sg.id
}