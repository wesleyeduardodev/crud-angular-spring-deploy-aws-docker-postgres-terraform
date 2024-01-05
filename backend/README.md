
## Requisitos Gerais
- Docker/WSL2 instalado e configurado no ambiente Windows
- Java 17 configurado nas variáveis de ambiente do Windows
- Maven 3+ configurado nas variáveis de ambiente do Windows

## Executar aplicação localmente via linha de comando
- Abrir um terminal na pasta do projeto backend (/crud-angular-spring-deploy-aws-docker-postgres-terraform/backend)
- Executar comando "mvn clean install" para gerar o target do projeto.
- Ainda com o terminal na pasta backend, executar "docker compose up -d" para subir o banco de dados postgres
- Entrar no diretório /target
- Executar: java -jar crud-api-0.0.1-SNAPSHOT.jar
- Swagger: http://localhost:8080/crud-api/swagger-ui.html

## Executar aplicação localmente via IDE
- Abrir um terminal na pasta do projeto backend (/crud-angular-spring-deploy-aws-docker-postgres-terraform/backend)
- Executar "docker compose up -d" para subir o banco de dados postgres
- Subir via IDE
- Swagger: http://localhost:8080/crud-api/swagger-ui.html

## Executar aplicação localmente via Docker
- Abrir um terminal na pasta do projeto backend (/crud-angular-spring-deploy-aws-docker-postgres-terraform/backend )
- Executar o comando "mvn clean install" para gerar o target do projeto.
- Executar o comando "docker build -t wesleyeduardodev/crud-api ." para gerar a imagem da aplicação 
- Executar "docker compose -f docker-compose-dev.yml up -d" para subir o banco de dados postgres e a aplicação
- Swagger: http://localhost:8080/crud-api/swagger-ui.html

## Executar aplicação via Shell Script e Docker
- Abrir pasta backend (Não é pelo terminal)
- Executar o arquivo run-backend.sh

## Dados abaixo ainda estão sendo organizados.....

- Gerar build da aplicação antes de gerar a imagem: mvn clean install
- Gerar imagem da aplicação: docker build -t wesleyeduardodev/crud-api .
- - Gerar imagem da aplicação: docker build -t wesleyeduardodev/crud-api -f Dockerfile.test .
- Subir container: docker run -p 8080:8080 --name crud-api wesleyeduardodev/crud-api

- Executar jar: java -jar target/crud-api-0.0.1-SNAPSHOT.jar
- Conectar máquina EC2: ssh ec2-user@"ip_aqui"
- Copiar jara para EC2: scp ./target/crud-api-0.0.1-SNAPSHOT.jar ec2-user@"ip_aqui":/home/ec2-user

## Comandos Docker úteis
- Login Docker: docker login
- Enviar imagem para o DockerHub: docker push wesleyeduardodev/crud-api
- Remover todos os containers: docker rm $(docker ps -a -q) -f
- Remover todos as imagens: docker rmi $(docker images -q) -f
- Remover todos os volumes: docker volume rm $(docker volume ls -qf dangling=true)
- docker compose up -d
- docker compose -f docker-compose-test.yml up -d
- docker compose -f docker-compose-prod.yml up -d
- docker logs --follow crud-api
- docker logs --follow postgres-db
- docker logs --follow crud-angular


## Permissões Usuário AWS necessárias para deploy
- AmazonEC2ContainerRegistryFullAccess
- AmazonEC2FullAccess
- AmazonVPCFullAccess
- AWSMarketplaceAmiIngestion

## Após criar usuário, gerar key e secret e configurar profile - Opção "Command Line Interface (CLI)"
- Gerar minha key e secret na AWS e salvar em algum lugar seguro
- Configurar profile: aws configure --profile crud
- regions: us-east-1
- output format: json
- Consulta diretório: ls ~/.aws

## Comandos Terraform (Instalar terraforma e jogar no path do Windows)
- Criar os arquivos de estrutura e instalar o provider: terraform init
- Verificar arquivos: terraform plan
- Criar estrutura na aws: terraform apply --auto-approve (Ao pesquisar a VPC no conole AWS, pesquisar pela mesma região especificada, aqui no caso "us-east-1")
- Destruir VPC criada: terraform destroy --auto-approve
- Entrar na máquina: ssh -i ~/.ssh/crud-api-key ubunto@34.232.44.70

## SSH
- Criação de chave: ssh-keygen -t ed25519
- Atribuir nome a chave gerada: C:\Users\Wesley Eduardo/.ssh/crud-api-key
- ls ~/.ssh

## Swagger
- Prod: "DNS-EC2"/crud-api/swagger-ui.html
- Local na porta 80: http://localhost/crud-api/swagger-ui/index.html

## Test
- http://localhost/actuator/health
- http://ec2-100-26-4-233.compute-1.amazonaws.com/actuator/health

## JAR
- crud-api-0.0.1-SNAPSHOT.jar


## Para analisar
- Uso de volumes no container do banco para não perder os dados. Sem usar a configuração de volumes se eu deletar o container do postgres e subir de novo irei perder meus dados.
- Melhorar a criação da imagem e container do angular. Está com tamanho grande e consumindo muita memória

## Anotações Gerais
- Em cenários de aplicações reais avaliar usar a solução Amazon RDS Postgres por ex. Manter o banco isolado e seguro.