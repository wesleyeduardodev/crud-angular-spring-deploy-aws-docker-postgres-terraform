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
echo "Subdindo containers..."
docker compose -f docker-compose-dev.yml up -d
echo ""
echo "Containers rodando..."


echo ""
read -p "Pressione enter para encerrar..."