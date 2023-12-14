resource "aws_security_group" "thehome1_sg" {
  name        = "thehome1_sg"
  description = "thehome1 security group"
  vpc_id      = aws_vpc.thehome1_vpc_1.id
  tags        = {
    "Name" = "thehome1_sg"
  }
}

resource "aws_security_group_rule" "public_out" {
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.thehome1_sg.id
}

resource "aws_security_group_rule" "public_in_ssh" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.thehome1_sg.id
}

resource "aws_key_pair" "thehome1_key" {
  key_name   = "thehome1_key"
  public_key = file("~/.ssh/thehome1_key.pub")
}

resource "aws_security_group_rule" "public_in_http" {
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.thehome1_sg.id
}