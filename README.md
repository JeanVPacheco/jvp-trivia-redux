# 🇺🇸 About | 🇧🇷 Sobre

This is a trivia game. It was developed using redux-toolkit, so I could study it.

# 🇺🇸 Hello! Follow the instruction to run the app:

1. Clone this repository to a local directory:
- $git clone (SSH or HTTTP)

## Running locally

2. After cloning, access the directory and install the dependencies needed:
- $ npm install

3. Now all you have to do is run the app with the command:
- $ npm start

## Running via docker

2. After cloning, access the directory and e run the command to start the docker container (*):
- $ docker run -v "$PWD:/app" -p 3000:3000 -it node:12 bash

3. Now you are in control of the docker terminal. Go into the "app" directory, install the dependencies needed and run the app:
- $cd app && npm i && npm start

4. Access the port 3000 through your browser:
- http://localhost:3000/


*A little info about the docker flags:
- -v -> maps the current directory to the container's "/app" directory
- -p -> links the local 3000 port with the container's 3000 port
- -it -> creates the container in an interactive mode, do you can use it's terminal
- node:12 -> docker image used
- bash -> the terminal used

# 🇧🇷 Olá! Siga as instruções para rodar o app:

1. Clone os arquivos para um diretório em sua máquina:
- $git clone (endereço SSH ou HTTTP)

## Rodando localmente

2. Depois de clonar, entre no diretório e instale as dependências necessárias:
- $ npm install

3. Instaladas as dependências, é só rodar o script para montar o aplicativo:
- $ npm start

## Rodando via docker

2. Depois de clonar, entre no diretório e rode o seguinte comando para iniciar o docker (*):
- $ docker run -v "$PWD:/app" -p 3000:3000 -it node:12 bash

3. Agora que você esta no terminal do container, entre na pasta "app", instale as dependências necessárias e inicie o projeto, que estará rodando na porta 3000:
- $cd app && npm i && npm start

4. Acesse a porta 3000 a partir do navegador:
- http://localhost:3000/


*Explicando um pouco sobre os comandos docker:
- -v -> mapeia o diretório atual para a pasta "/app" do container
- -p -> faz um link entre a porta 3000 do computador local com a porta 3000 do container
- -it -> cria o container de forma interativa, para que seja possível acessar o terminal do container
- node:12 -> imagem de docker utilizada
- bash -> o terminal a ser utilizado
