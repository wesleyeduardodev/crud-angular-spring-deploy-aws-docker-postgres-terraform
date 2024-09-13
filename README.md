
## Executar o Projeto em ambiente local via Docker
- Opção 1: Abrir um terminal na pasta raiz do projeto e executar o comando "sh executar-projeto.sh"
- Opção 2: Abrir pasta raiz do projeto via windows e executar o arquivo "sh executar-projeto.sh".

## Links para uso da aplicação no ambiente local
- Swagger da API: http://localhost:8080/crud-api/swagger-ui.html

## Requisitos Gerais para execução do projeto em ambiente local
- Docker/WSL2 instalado e configurado no ambiente Windows. Sugestão(https://github.com/codeedu/wsl2-docker-quickstart)
- Java 17 configurado nas variáveis de ambiente do Windows. Sugestão(https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.zip)
- Maven 3+ configurado nas variáveis de ambiente do Windows. Sugestão(https://dlcdn.apache.org/maven/maven-3/3.9.6/source/apache-maven-3.9.6-src.zip)

## Objetivos do projeto
- O foco desse projeto é testar o deploy de uma aplicação estilo CRUD dentro da AWS usando Angular, Spring, Docker, Postgres e Terraform. Portanto, o projeto da API não seguirá os padrôes RESTFul, tampouco aspectos como clean code, SOLID, Testes Unitários/Integração Design Patterns e etc.
- O README do projeto backend contém anotações gerais sobre a API CRUD de clientes e o passo a passo do deploy na AWS usando uma instância da EC2
- O README do projeto frontend contém anotações gerais sobre a Aplicação Angular versão 16 e instruções de deploy na AWS usando o recurso Amazon S3
