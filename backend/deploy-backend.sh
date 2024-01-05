#!bin/bash

echo ""
echo "Gerando JAR da aplicação..."
mvn clean install
echo ""
echo "JAR gerado com sucesso!"

echo ""
echo "Gerando Imagem da aplicação..."
docker build -t wesleyeduardodev/crud-api .
echo ""
echo "Imagem gerada com sucesso!"

echo ""
echo "Realizando login no docker..."
docker login
echo ""
echo "Login realizado com sucesso!"

echo ""
echo "Atualizando imagem no Docker Hub..."
docker docker push wesleyeduardodev/crud-api
echo ""
echo "Imagem atualizada com sucesso!"

echo ""
echo "Abrindo diretório terraform..."
cd deploy/terraform
echo "Diretório encontrado com sucesso!"

echo ""
echo "Executando terraform init..."
terraform init
echo "terraform init executado com sucesso!"

echo ""
echo "Executando terraform plan..."
terraform plan
echo "terraform plan executado com sucesso!"

echo ""
echo "Executando terraform apply --auto-approve..."
terraform apply --auto-approve
echo "terraform apply --auto-approve executado com sucesso!"

echo ""
read -p "Pressione enter para encerrar..."