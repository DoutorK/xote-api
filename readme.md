# XoteCariri API

A XoteCariri API é uma API desenvolvida para gerenciar eventos na plataforma XoteCariri, que conecta os usuários a eventos na região de Juazeiro do Norte e Cariri. A API foi construída utilizando o padrão MVC (Model-View-Controller) para melhor organização e manutenibilidade do código.


Obs: Mais informações no arquivo swagger, "use o swagger editor".
## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/) (ou acesso a um cluster MongoDB no Atlas)
- [Postman](https://www.postman.com/) (opcional, para testar a API)

## Configuração do Ambiente

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Caiorhcp/xote-api.git
   ``` 
2. Instale as Dependências

```bash
npm install 
```


3. Configuração do Banco de Dados
Crie um banco de dados no MongoDB ou utilize um cluster no MongoDB Atlas. Em seguida, crie um arquivo .env na raiz do projeto e adicione a seguinte variável de ambiente, substituindo <USERNAME> e <PASSWORD> pelas suas credenciais do MongoDB:

Exemplo figurativo

```bash
module.exports = {
    dbURI: 'mongodb+srv://<USERNAME>:<PASSWORD>@xote.0mz6p.mongodb.net/xote?retryWrites=true&w=majority'
};
```

4. Inicie o Servidor

Execute o seguinte comando no terminal:
```bash
node app.js
```

O servidor deve iniciar e você verá a mensagem "app running" no terminal + "Conectado ao banco de dados" caso estiver usando o MongoDb.

## Como Utilizar a API
Testando com o Postman
Após iniciar o servidor, você pode utilizar o Postman para interagir com a API.

Obter todos os eventos

1. Método: GET
URL: http://localhost:3000/xote/get
Descrição: Retorna todos os eventos. 

2. Criar um novo evento

Método: POST
URL: http://localhost:3000/xote/post
Body: Selecione raw e JSON e insira o seguinte:

```bash
{
            "image_url": "URL aqui",
			"title": "titulo",
			"description": "Descrição",
			"date": "26-10-2025",
			"time": "20:00",
			"pay": false,
			"type": "Futebol",
			"localgoogleurl": "Link do google maps verdadeiro"
}
```
Descrição: Cria um novo evento e retorna o evento criado.

3. Obter um evento por ID

Método: GET
URL: http://localhost:3000/xote/put/{id} (substitua {id} pelo ID do evento)
Descrição: Retorna os detalhes de um evento específico.

4. Atualizar um evento por ID

Método: PUT
URL: http://localhost:3000/xote/delete/{id} (substitua {id} pelo ID do evento)
Body: Selecione raw e JSON e insira o seguinte:

```bash
{
            "image_url": "URL aqui",
			"title": "titulo",
			"description": "Descrição",
			"date": "26-10-2025",
			"time": "20:00",
			"pay": false,
			"type": "Futebol",
			"localgoogleurl": "Link do google maps verdadeiro"
}
```
Descrição: Atualiza um evento específico e retorna o evento atualizado.

5. Deletar um evento por ID

Método: DELETE
URL: http://localhost:3000/xote/{id} (substitua {id} pelo ID do evento)
Descrição: Deleta um evento específico.


## Estrutura do Projeto

O projeto segue o padrão MVC (Model-View-Controller), que ajuda a organizar e separar as responsabilidades do código. Isso facilita a manutenção, escalabilidade e entendimento do projeto.

## Padrão MVC

Model (Modelo): Representa a estrutura dos dados e as interações com o banco de dados. Na XoteCariri API, o modelo de eventos é definido utilizando o Mongoose.
View (Visualização): Como estamos desenvolvendo uma API, o conceito de "view" é tratado como as respostas JSON enviadas aos clientes, que podem ser consumidas por qualquer front-end ou outra aplicação.
Controller (Controlador): Responsável por lidar com as requisições, realizar as operações de negócio e devolver a resposta apropriada. Os controladores manipulam as requisições HTTP e interagem com os modelos.
Estrutura de Diretórios

```bash
/project-root
│
├── /controllers      # Controladores para gerenciar a lógica das requisições
│   └── eventController.js
│
├── /models           # Modelos do Mongoose para definir a estrutura dos dados
│   └── eventModel.js
│
├── /routes           # Definição das rotas da API
│   └── eventRoutes.js
│
├── /config           # Arquivos de configuração, como a conexão com o banco de dados
│   └── database.js
│
├── app.js            # Arquivo principal da aplicação, onde as rotas e o servidor são configurados
├── .env              # Variáveis de ambiente
├── package.json      # Arquivo de configuração do Node.js
```

## Benefícios do uso de MVC
O padrão MVC é uma abordagem amplamente utilizada em sistemas maiores devido à separação de responsabilidades:

Organização: O código fica mais modular, fácil de entender e de manter.
Reusabilidade: Facilita o reaproveitamento de componentes do código (controladores e modelos).
Escalabilidade: Com a separação de lógica de controle, regras de negócios e dados, é mais fácil adicionar novas funcionalidades sem gerar dependências desnecessárias.
Manutenção: Ao isolar o código em camadas, identificar e corrigir erros se torna mais simples.

# Obrigado pela atenção

## Developers:

### Caio Gonçalves 
### Giovanny Lucas
### Lucas Vieira