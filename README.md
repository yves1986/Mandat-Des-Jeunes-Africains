# Mandat des Jeunes Africains

Site web officiel et plateforme numérique du mouvement panafricain **Mandat des
Jeunes Africains** : un site vitrine (Next.js), une API applicative
(Node.js/Express) et un microservice d'analyse de données (Python/FastAPI).

## Identité visuelle

La charte graphique du site reprend les couleurs du logo du mouvement :

| Couleur          | Usage                                      | Code       |
| ---------------- | ------------------------------------------- | ---------- |
| Vert panafricain  | Accents, pictos, éléments de confiance      | `#146C43`  |
| Or / jaune        | Boutons d'action principaux, mise en avant  | `#E8A93A`  |
| Rouge             | Étiquettes, accents de plaidoyer            | `#C1272D`  |
| Brun (silhouette Afrique) | Typographie, fonds sombres          | `#4A2E1F` / `#2B1B12` |
| Écru / crème      | Fond principal du site (comme le logo)      | `#F7F1E3`  |

Typographies : **Poppins** (titres) et **Inter** (texte courant), chargées via
`next/font/google`.

## Architecture

```
mandat-jeunes-africains/
│
├── frontend/                  # Next.js (App Router, TypeScript, Tailwind CSS)
│   ├── app/
│   │   ├── page.tsx           # Accueil
│   │   ├── mouvement/         # Histoire, valeurs, gouvernance
│   │   ├── actions/           # Campagnes et actions de terrain
│   │   ├── medias/            # Vidéos, presse, publications
│   │   ├── sengager/          # Formulaire d'engagement
│   │   └── contact/           # Formulaire de contact
│   ├── components/            # Header, Footer, cartes, formulaires...
│   ├── lib/                   # Client API + contenus statiques
│   └── public/
│
├── backend-node/               # API Express
│   ├── src/
│   │   ├── routes/             # contact, engagement, actions
│   │   ├── controllers/
│   │   ├── models/              # Mongoose (MongoDB)
│   │   └── server.js
│   └── package.json
│
├── service-python/             # Microservice FastAPI
│   ├── main.py
│   ├── scripts/
│   │   ├── generate_report.py  # Rapport CSV (membres + actions)
│   │   └── analyze_members.py  # Statistiques d'adhésion
│   └── requirements.txt
│
├── .github/workflows/          # CI/CD (lint, build, déploiement)
├── docker-compose.yml          # Environnement de développement local
└── .gitignore
```

## Fonctionnalités

- **Site vitrine multi-pages** (Accueil, Le Mouvement, Actions, Médias,
  S'engager, Contact) entièrement responsive, en français.
- **Formulaire de contact** et **formulaire d'engagement** connectés en
  temps réel à l'API Express (`POST /api/contact`, `POST /api/engagement`).
- **Inscription newsletter** (`POST /api/contact/newsletter`).
- **Catalogue d'actions** exposé par l'API (`GET /api/actions`) et un script
  de seed pour peupler MongoDB.
- **Microservice Python** pour l'analyse des membres
  (`GET /analyze/members/live`) et la génération de rapports CSV
  (`GET /reports/members`), consommant l'API Node.js.
- **CI/CD GitHub Actions** : lint + build du frontend, tests + build/push des
  images Docker du backend et du microservice vers GHCR.

## Démarrage local (Docker)

```bash
cp backend-node/.env.example backend-node/.env
cp service-python/.env.example service-python/.env
cp frontend/.env.example frontend/.env.local

docker compose up --build
```

- Frontend : http://localhost:3000
- API Node.js : http://localhost:4000/health
- Microservice Python : http://localhost:8000/health
- MongoDB : `mongodb://localhost:27017`

Pour peupler la base avec des actions de démonstration :

```bash
docker compose exec backend-node npm run seed
```

## Démarrage local (sans Docker)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend Node.js

```bash
cd backend-node
npm install
npm run dev
```

### Microservice Python

```bash
cd service-python
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Déploiement

- `.github/workflows/deploy-frontend.yml` : build/lint du frontend puis
  déploiement sur Vercel (variables `VERCEL_TOKEN`, `VERCEL_ORG_ID`,
  `VERCEL_PROJECT_ID` à configurer dans les secrets du dépôt).
- `.github/workflows/deploy-backend.yml` : tests du backend Node.js et du
  microservice Python, puis publication des images Docker sur GitHub
  Container Registry (GHCR).
