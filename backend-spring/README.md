
- Rodar Docker compose ambiente dev: docker compose up -d
- Rodar Docker compose ambiente test: docker compose -f docker-compose-test.yml up -d
- Rodar Docker compose ambiente prod: docker compose -f docker-compose-prod.yml up -d

- Gerar build da aplicação antes de gerar a imagem: mvn clean install
- Gerar imagem da aplicação: docker build -t wesleyeduardodev/thehome-api .
- - Gerar imagem da aplicação: docker build -t wesleyeduardodev/thehome-api -f Dockerfile.test .
- Subir container: docker run -p 8080:8080 --name thehome-api wesleyeduardodev/thehome-api

- Executar jar: java -jar target/thehome-api-spring-0.0.1-SNAPSHOT.jar
- Conectar máquina EC2: ssh ec2-user@"ip_aqui"
- Copiar jara para EC2: scp ./target/thehome-api-spring-0.0.1-SNAPSHOT.jar ec2-user@"ip_aqui":/home/ec2-user

## Comandos Docker úteis
- Login Docker: docker login
- Enviar imagem para o DockerHub: docker push wesleyeduardodev/thehome-api
- Remover todos os containers: docker rm $(docker ps -a -q) -f
- Remover todos as imagens: docker rmi $(docker images -q) -f
- Remover todos os volumes: docker volume rm $(docker volume ls -qf dangling=true) 
- docker logs --follow thehome-api
- docker logs --follow postgres-db
- docker logs --follow thehome-angular

## Configuração AWS
- Configurar profile: aws configure --profile thehome1
- Consulta diretório: ls ~/.aws

## Comandos Terraform (Instalar terraforma e jogar no path do Windows)
- Criar os arquivos de estrutura e instalar o provider: terraform init
- Verificar arquivos: terraform plan
- Criar estrutura na aws: terraform apply --auto-approve (Ao pesquisar a VPC no conole AWS, pesquisar pela mesma região especificada, aqui no caso "us-east-1")
- Destruir VPC criada: terraform destroy --auto-approve
- Entrar na máquina: ssh -i ~/.ssh/thehome_key1 ubunto@34.232.44.70

## SSH
- Criação de chave: ssh-keygen -t ed25519
- Atribuir nome a chave gerada: C:\Users\Wesley Eduardo/.ssh/thehome1_key
- ls ~/.ssh

## Swagger
- Prod: "DNS-EC2"/thehome-api/swagger-ui.html
- Local na porta 80: http://localhost/thehome-api/swagger-ui/index.html

## Test
- http://localhost/actuator/health

## JAr
- thehome-api-spring-0.0.1-SNAPSHOT.jar


## Para analisar
- Uso de volumes no container do banco para não perder os dados. Sem usar a configuração de volumes se eu deletar o container do postgres e subir de novo irei perder meus dados. 

## Anotações Gerais
- Em cenários de aplicações reais avaliar usar a solução Amazon RDS Postgres por ex. Manter o banco isolado e seguro.