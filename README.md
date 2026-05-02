# Anime Backend

Backend em Node.js que consome a API Jikan, salva animes no MongoDB e atualiza automaticamente a cada 5 minutos via cronjob.

##  Tecnologias

- **Node.js** — ambiente de execução
- **Express** — servidor HTTP e rotas REST
- **Mongoose** — modelagem e conexão com MongoDB Atlas
- **Axios** — requisições HTTP para a API externa
- **node-cron** — agendamento de tarefas (cronjob)
- **dotenvx** — gerenciamento de variáveis de ambiente
- **Jest + Nock** — testes automatizados com Mock API

##  Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/josearmandoja0007/anime-backend.git
cd anime-backend

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz com:
# MONGO_URI=sua_string_de_conexao_mongodb
# PORT=3000

# 4. Rode o projeto
npm start

# 5. Rode os testes
npm test
```

##  Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/animedb
PORT=3000
```

##  Funcionalidades

- Consome a API Jikan automaticamente
- Salva e atualiza os animes no MongoDB Atlas
- Atualiza toda a base a cada **5 minutos** via cronjob
- Expõe endpoint REST para consulta dos animes
- Testes com Mock API sem depender da API real
- Paralelismo com Promise.all para salvar múltiplos animes simultaneamente

##  Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/animes` | Lista todos os animes salvos no banco |

##  API utilizada

```
https://api.jikan.moe/v4/anime?q=legendado&limit=20
```

A [Jikan API](https://jikan.moe) é uma API REST pública e gratuita que consome dados do MyAnimeList.

##  Estrutura do projeto

```
anime-backend/
├── src/
│   ├── config/
│   │   └── database.js       # conexão com MongoDB
│   ├── models/
│   │   └── Anime.js          # modelo do anime
│   ├── services/
│   │   ├── animeService.js   # consome a API Jikan
│   │   └── scheduler.js      # cronjob a cada 5 minutos
│   ├── routes/
│   │   └── animeRoutes.js    # rotas REST
│   └── app.js                # entrada da aplicação
├── .env                      # variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
└── README.md
```

##  Conceitos aplicados

| Conceito | Onde foi aplicado |
|----------|-------------------|
| **Schedule Pattern** | Separação entre agendamento e lógica de negócio |
| **Cronjob** | `node-cron` executando a cada 5 minutos |
| **API REST** | Consumo da Jikan API + endpoint próprio `/animes` |
| **Mock API** | Simulação da API nos testes com `nock` |
| **Paralelismo** | `Promise.all()` para salvar animes simultaneamente |
| **Assíncrono** | `async/await` em todas as operações de I/O |

##  Testes

```bash
npm test
```

Testa o `fetchAnimes` com Mock API usando `nock` — sem depender da internet.

##  Autor

**josearmandoja0007** — [github.com/josearmandoja0007](https://github.com/josearmandoja0007)

