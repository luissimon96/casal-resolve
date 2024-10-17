# Usa a imagem oficial do Node.js como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Builda o projeto React para produção
RUN npm run build

# Servidor para servir os arquivos estáticos (usando serve)
RUN npm install -g serve

# Exposição da porta que o serve vai usar
EXPOSE 3000

# Comando para rodar o frontend no serve
CMD ["serve", "-s", "build", "-l", "3000"]
