---
author: richardanchieta
title: Introdução ao curso Web3 para Patos 
date: '2022-06-19'
tags: ['web3', 'blockchain', 'curso']
draft: false
summary: 'Introdução ao curso Web3 para Patos'
---

# Introdução

(ainda em construção)


Curso introdutório de Web3 (aplicações descentralizadas WEB com blockchain) para desenvolvedores curiosos.

## Rascunho de tópicos

Contexto

- História do dinheiro
- Bitcoin
- Blockchain
- Ethereum
- Smart Contracts
- Altcoins
- Gerações de blockchains
- Crédito de Carbono
- Algorand - A Blockchain Verde


Exploração

- algoexplorer
- Transações
- Contas
- Transferências
- FTs e NFTs

Mão na massa 1

- Criar carteira e conta
- Senha e Mnemônico
- Endereço
- Transferência 

Conceitos - criptografia

- Encoding
  - Hexadecimal
  - Base64
  - Base32

- Hash

Mão na massa 2

- replit
  

---
# Desenvolvimento prático

Durante o curso vamos criar uma aplicação real, funcional e extremamente útil para a gente: um Sistema de Gestão de Aprendizagem (LMS - Learning Management System) de código aberto, utilizando tecnologias da WEB3.

Uma plataforma de aprendizagem que será construída como prática do aprendizado, porém extrapolando os fins didáticos e podendo ser utilizada em produção livremente [(licença MIT)](https://choosealicense.com/licenses/mit).

A pilha de tecnologias é opinativa. São as tecnologias, ferramentas e práticas utilizadas pelo nosso time na empresa STEMativa (https://stemativa.com.br), especializada em soluções descentralizadas para o mercado Agro, Florestal e de Capitais.

## Pilha tecnológica

**Monorepo com NX**

**Autenticação e autorização com KeyCloak**
- OpenID Connect 
- Papeis e permissões baseados em grupos de usuário
- [Authentication and authorization using the keycloak REST API](https://developers.redhat.com/blog/2020/11/24/authentication-and-authorization-using-the-keycloak-rest-api#keycloak_connection_using_a_java_application) 

**FrontEnd com TypeScript**
- FrontEnd com React/Typescript/NextJS
- Controle de estado da aplicação com MobX
- Base local (no browser) com PouchDB sincronizada com bases remotas em CouchDB
- UI Kit / framework CSS com MUI (Material UI)
- Cliente GraphQL com graphql-hooks e relay
- Deploy na Vercel

**Mobile com Flutter**
- Controle de estado da aplicação com MobX
- Base de dados local com PouchDB sincronizada com bases remotas em CouchDB

**BackEnd com GO**
- Framework WEB com Gin Gonic
- API GraphQL com gqlgqn (Mutations)
- ORM com gorm e smallnest/gen
- Lógica e responsabilidades distribuída em pequenos serviços assíncronos (ver tópico de mensaggeria)

**Banco de dados com PostgreSQL**
- HeadlessCMS com Directus
- Hub Graphql com Hasura
- Base de dados analítica segregada da transacional
- GraphQL (Query e Subscriptions) na base analítica
- Denormalização e uso de JSON documents para performance

**Mensageria com NATS**
- Comunicação baseada em eventos e abordagem pub/sub
- Stream de mensagens com JetStream

**Deploy com HashiCorp e Docker**
- Receitas Terraform
- Receitas Waypoint

**Blockchain Algorand**
- Carteira MOBILE com Pera / Algorand Wallet
- Integração com carteiras com WalletConnect protocol
- Aceleração e simplificação de desenvolvimento com API e SDK do Boa-Fé Community Edition