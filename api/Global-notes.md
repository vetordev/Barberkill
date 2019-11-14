# Anotações

`Built-in` => Módulos que já vem com o projeto
`process` => saber o diretório, ouvir eventos;
`process.argv` => apresenta os argumentos do process
`module.export` => exporta funções e variaveis do arquivo
`require` => pega as informações exportadas

`inspect` => utilizado para inspecionar a aplicação
`inspect-brk` => para na primeira linha da aplicação possibilitando inspecionar códigos rápidos

---

## NPM
`npm init -y` => inicia com as informações padrões
`npm i or npm install` => busca os pacotes que estão nas dependências do _package.json_ 
`npm install pacote` => instala um pacote 
`pacote@version` => yargs@10.0.0 **Exemplo**
`--save` => guarda o pacote no _package.json_
`--save-dev or -D` => guarda o pacote no _package.json_ como dependencias de desenvolvedor
`-E` => exatamente a verão do pacote
`-P` => mesmo que --save
---

## Package.json
`main` => diz qual é o arquivo a ser buscado 
`dependencies` => dependências do seu projeto

---

## TYPESCRIPT
`tsc` => compila os arquivos typescript
`tsc --init` => inicia o typescript
`tsc -w` => compila automaticamente os arquivos typescript
`Generics` => Definem um tipo apenas na hora do runtime ?
`Interface` => são utilizadas apenas para controle estático (não viram objetos)


Arquivos de node são tratados como um módulo, o que é declarado neles não fica vísivel aos outros arquivos
para disponibilizar informações usa-se `module.export`, para pegar usa-se `require`('nome-arquivo')

## SEQUELIZE  

`sequelize db:create` => cria sua base de dados  
`sequelize migration:create --name=create-users` => cria uma migration  
`sequelize db:migrate` => executa os migrates do seu code  
`sequelize db:migrate:undo` => desfaz o último migrate  


---
psql -Upostgres -hlocalhost

git add api/dist api/source api/.sequelizerc api/Global-notes.md api/main.ts api/package.json api/package-lock.json a
pi/tsconfig.json api/yarn.lock

## Links
[Módulos Node](https://nodejs.org/api/modules.html)
