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

# Exposição da porta em que o servidor irá rodar
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["node", "index.js"]
