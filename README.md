<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Desafio 2

## API no Nest.js com TypeORM

Nesse desafio você dará um passo além e criará um endpoint Rest com a listagem de todas aulas da Maratona Full Cycle 2.0 (utilize o menu do site: [maratona.fullcycle.com.br](http://maratona.fullcycle.com.br)).

### Requisitos
* Nest.js
* TypeORM
* Migrations
* Banco de dados: SQLite

### Detalhes

-[x] 1\. Estrutura do banco de dados: Tabela: maratona. Campos: id, aula.
-[x] 2\. Endpoint: "/maratona" com a opção de listar (GET) e inserir (POST)
-[x] 3\. Realize o build da aplicação usando o comando: "npm run build"
-[x] 4\. Gere uma imagem Docker copiando a pasta dist para dento do container incluindo o arquivo do banco do SQLite com as informações populadas
-[x] 5\. Utilize o comando como entrypoint: "npm start:prod"
-[x] 6\. A aplicação deverá rodar na porta 3000
-[x] 7\. Suba o container no DockerHub
-[x] 8\. Poste sua imagem nos comentários do site: [maratona.fullcycle.com.br](http://maratona.fullcycle.com.br)
-[x] 9\. Quando executarmos: "docker run -p 3000:3000 seu-login-docker/nome-da-sua-imagem" deveremos ter acesso a API na porta 3000

### Dicas

* Coloque o arquivo do banco de dados gerado pelo SQLite na raiz do projeto (não esqueça de copiá-lo para dentro do container em conjunto com a pasta dist). Utilize a configuração abaixo no arquivo: "app.module.ts"

```
TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'database.sqlite',
    entities: [Maratona],
 })
``` 

* Para facilitar o processo e rodar o comando do TypeORM no terminal, adicione em scripts no package.json:

```
"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
```

* Para realizar a configuração do banco de dados, crie um arquivo .env na raiz do projeto conforme abaixo:

```
TYPEORM_CONNECTION=sqlite
TYPEORM_DATABASE=database.sqlite
TYPEORM_ENTITIES=src/**/*.entity.ts
TYPEORM_MIGRATIONS=src/migrations/**/*.ts
TYPEORM_MIGRATIONS_DIR=src/migrations
```

* Para criar uma nova migração, execute o comando:

```
npm run typeorm migration:create -- -n maratona
```

### Resposta

##### Imagem disponível em [lourivaldo/maratona-full-cycle-desafio-2](https://hub.docker.com/r/lourivaldo/maratona-full-cycle-desafio-2)

```
npm i -g @nestjs/cli
nest new project-name
npm install --save @nestjs/typeorm typeorm sqlite3
npm run typeorm migration:create -- -n Maratona
npm install -D @nestjs/cli
npm run typeorm:migrate
npm run build
sudo docker build -t lourivaldo/maratona-full-cycle-desafio-2 .
sudo docker run --name maratona-full-cycle-desafio-2 -p 3000:3000 lourivaldo/maratona-full-cycle-desafio-2
sudo docker rm -f maratona-full-cycle-desafio-2
sudo docker push lourivaldo/maratona-full-cycle-desafio-2
sudo docker rmi -f lourivaldo/maratona-full-cycle-desafio-2 
sudo docker run -d --name maratona-full-cycle-desafio-2 -p 3000:3000 lourivaldo/maratona-full-cycle-desafio-2
```

