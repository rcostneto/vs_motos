# PROJETO CADASTRO OFICINA MECÂNICA

### Objetivo do projeto é cadastrar usuários(clientes) pertencentes a oficina mecânica, usando recursos como props, hooks(useState, useNavigate useEffect, useLocation), eventos(onSubmit), em três páginas com reaproveitamento de componentes.

## **INSTALAÇÃO**

#### **Primeiramente baixe o NODE na versão mais atual e instale na sua maquina, link para download**(https://nodejs.org/en/download)

#### **Baixe os arquivos do projeto no github pelo link disponível no MVP e salve na sua máquina local.**

>*Extraia os arquivos baixados e com o botao direito do mouse clique em extract files, em seguida escolha o local da extração e entre na pasta do projeto.*

>*Abra o Terminal **PROMPT DE COMANDO(CMD)** em modo Administrador e entre na pasta do arquivo baixado.*
obs: Você pode entrar na pasta, clicar na barra de endereço e copiar o caminho da pasta, em seguida cola-lo no terminal com o comando abaixo.
```
>>>cd [caminho da pasta]
```
>*Em seguida instale o pacote **NPM** com o comando listado abaixo.*
Obs: Esse comando deve ser executado dentro da pasta do projeto, pois irá criar uma pasta com os arquivos node em seu projeto.
```
>>>npm install
```
>*Agora instale dependências do projeto e o recurso para fazer o roteamento de URLs.*
```
>>>npm install i react-router-dom
```
>*Comando para gerenciar IDs no banco, cada tabela tem seu ID, semelhante as tabelas de bancos relacionais.*
```
>>>npm install react-router-dom uuid
```
>*Instale o **backend** fictício para fazer requisição com a API(resgate, atualização, exclusão e inserção de dados).*
obs: Note que foi criando uma pasta com o nome db.json para simular um backend. Foi criado também uma linha dentro de "scripts" chamada backend, dentro de package.json com a port: 5000, permitindo assim o acesso via terminal, após a execução do comando abaixo.
```
>>>npm install json-server
```
>*Execute o comando abaixo para iniciar o backend em seguida o projeto em terminais separados.*
```
>>>npm run backend
>>>npm start
```