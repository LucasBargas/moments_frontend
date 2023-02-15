## Projeto Moments
O projeto **Moments** foi desenvolvido por mim, Lucas Bargas, para estudo, durante um curso no Youtube ministrado pelo Matheus Battisti, do Hora de Codar, que tem como objetivo apresentar uma simples rede social onde os usuários podem compartilhar fotos de momentos marcantes que vivenciaram.
Fiz mínimas alterações durante o desenvolvimento, utilizei SCSS, diferente do professor que fez uso de CSS. Construí todo o backend por conta própria, como desafio própio, com Nodejs e MongoDB, já o instrutor usou Adonisjs e SQL Lite.

### Por que fiz este projeto?
Tenho notado já há algum tempo que grandes empresas/corporações, especialmente focadas em tecnologia, no Front end, fazem muito uso do Angular em suas versões mais recentes. Notei também ao consultar a quantidade de candidatos às vagas que pedem esta tecnologia, é consideravelmente menor que as que que requerem Reactjs ou Vuejs, ou seja, a concorrência, querendo ou não, sendo bom ou ruim, é menor. Além de eu considerar extremamente importante está aberto em conhecer as tecnologias disponíveis, seja para o Front end ou Backend.
Especialmente por estes motivos decidi aprender Angular.

### Link para visualizar o projeto
<https://moments-frontend.vercel.app/>

### Principais recursos do App
* Postagem de momentos;
* Edição de momentos;
* Exclusão de momentos;
* Pesquisa de momentos.

### Tecnologias utilizadas
#### Front end
<table>
  <tr>
    <td>Angular</td>
    <td>Typescript</td>
    <td>SASS/SCSS</td>
    <td>UUID</td>
  </tr>
  <tr>
    <td>15.1</td>
    <td>4.9</td>
    <td>1.57</td>
    <td>9.0</td>
  <tr>
</table>

### Prints do App (Versão Desktop e Mobile)

#### Página incial
<img alt="Página inicial" src="https://user-images.githubusercontent.com/76006347/218905895-5312bc6e-774a-4ac9-9649-19fdc73cb7a7.png">

#### Página para Compartilhar Momento
<img alt="Página para Compartilhar Momento" src="https://user-images.githubusercontent.com/76006347/218906023-5a9ed0fc-2abf-4caa-ad9b-b61305fbc9a8.png">

#### Página de Sobre
<img alt="Página de Sobre" src="https://user-images.githubusercontent.com/76006347/218906067-b1234b14-73fa-40f6-b36f-1c5fdaaafd98.png">

#### Página de Momento Individual
<img alt="Página de Momento Individual" src="https://user-images.githubusercontent.com/76006347/218906180-7ad4b095-8abe-4d45-8060-ae8db62e758f.png">

#### Página de Edição de Momento
<img alt="Página de Edição de Momento" src="https://user-images.githubusercontent.com/76006347/218906710-ed0f8b6d-3e5a-4b78-a830-3ae8999c6630.png">

### Como executar este Front End

#### Pré-requisitos
* Possuir o Nodejs instalado;
* Estar com o backend em execução (link do repositório do mesmo no final do readme).

#### Clone o repositório
```bash
git clone https://github.com/LucasBargas/moments_frontend.git
```
#### Entre na pasta
```bash
cd moments_frontend
```
#### Instale as dependências
```bash
npm install
```
#### Configure as variáveis de ambiente
```bash
# Gere um arquivo de enviroments e adicione 'http://localhost:8080/' em apiURL
ng generate environments
```
#### Execute o App
```bash
ng serve --open
```

# Autor
Lucas Bargas da Silva
</br>
<https://projetoslucasbargas.vercel.app/>
</br>
<https://www.linkedin.com/in/lucas-bargas/>

Gostaria de ver o repositório do Backend deste app?
[Clique aqui](https://github.com/LucasBargas/moments-backend)
