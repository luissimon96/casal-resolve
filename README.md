# Casal Resolve - MVP

## Objetivo
O **Casal Resolve** é um MVP (Minimum Viable Product) desenvolvido para ajudar casais a resolver atritos e conflitos de maneira saudável e estruturada. A aplicação oferece uma plataforma onde os casais podem registrar seus conflitos e utilizar métodos guiados para resolvê-los de forma eficiente, promovendo melhor comunicação e entendimento mútuo.

## Funcionalidades principais:
- Registro de usuários (individuais ou como casal)
- Registro de atritos e conflitos
- Processo de resolução guiado
- Histórico de resoluções

## Stack de Tecnologias:
- **Frontend:** React.js
- **Backend:** Node.js (Express)
- **Banco de dados:** MongoDB
- **Containerização:** Docker e Docker Compose

---

## Pré-requisitos

Antes de iniciar, certifique-se de que você tem os seguintes requisitos instalados na sua máquina:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Como executar o projeto

### Passos para rodar a aplicação com Docker Compose:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/casal-resolve.git
   cd casal-resolve

2. Crie o arquivo .env na raiz do projeto com a variável de ambiente necessária:

   ```bash
   MONGO_URI=mongodb://mongo:27017/casal-resolve
   
3. Construa e inicie os containers com Docker Compose:

   ```bash
   docker-compose up --build


Este comando vai fazer o seguinte:
- Buildar as imagens do frontend e backend.
- Subir os containers do frontend, backend e do banco de dados MongoDB.

4. Acesse a aplicação:

- Frontend: (http://localhost:3000)
- Backend (API): (http://localhost:5000)


Estrutura do Projeto
   ```bash
   /casal-resolve
   │
   ├── /backend          # Código do backend (Node.js/Express)
   │   ├── Dockerfile    # Arquivo de configuração do Docker para o backend
   │   ├── index.js      # Arquivo principal do servidor backend
   │   └── package.json  # Dependências do backend
   │
   ├── /frontend         # Código do frontend (React)
   │   ├── Dockerfile    # Arquivo de configuração do Docker para o frontend
   │   ├── src/          # Código fonte do frontend
   │   └── package.json  # Dependências do frontend
   │
   ├── docker-compose.yml # Arquivo de configuração do Docker Compose
   └── .env              # Variáveis de ambiente

Comandos Úteis
- Para parar os containers:

   ```bash
   docker-compose down


- Para verificar os logs de um serviço específico (ex: backend):

   ```bash
   docker-compose logs backend


- Para rodar os containers em modo "detached" (em segundo plano):

   ```bash
   docker-compose up -d


Próximos Passos
Após rodar a aplicação localmente, o próximo passo será fazer o deploy da aplicação em uma plataforma de hospedagem compatível com Docker Compose, como Heroku, DigitalOcean, ou AWS.