
# API CRUD de cidades

Esse projeto foi para criar uma API
onde fosse colocado uma cidade e estado
 em uma lista, mostrar todas as cidades cadastradas ou
 localizar uma cidade em específico por meio do ID,
  atualizar os nomes das cidades ou estado
   e deletar, por meio do ID.


## Stack utilizada

**Back-end:** Node, Express

**Banco de dados:** MongoDB


## Documentação da API

#### Retorna todos os itens

```http
  GET /cities
```

| Parâmetro   | Tipo       |
| :---------- | :--------- |
| `api_key` | `string` | 

#### Retorna um item

```http
  GET /cities/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer achar |

#### Cria um item

```http
  POST /cities
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name` `state`| `string` | Criação de uma nova cidade na lista |

#### Atualiza um item

```http
  PUT /cities/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer atualizar com as correções na cidade |

#### Deleta um item

```http
  DELETE /cities/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer deletar |

## Autores

- [@FabioMTeixeira](https://github.com/FabioMTeixeira)

