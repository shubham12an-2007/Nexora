# Nexora

**Nexora is a production-style job-search operating system built as a MERN portfolio project.**

It helps candidates track applications, interviews, resumes, companies and job-search analytics from one workspace.

> Frontend is complete and intentionally decoupled from the backend. Express + MongoDB + JWT can be added independently.

## Features

- Premium SaaS dashboard
- Application table and Kanban pipeline
- Job discovery UI
- Company tracking
- Interview calendar/preparation
- Multi-resume management
- Analytics dashboard
- AI career assistant UI
- Light/dark mode
- Responsive desktop/mobile layout
- Axios service layer ready for REST APIs
- Mock data for development

## Stack

- React + Vite
- JavaScript
- Tailwind CSS
- React Router
- Axios
- Recharts
- Lucide React
- React Hook Form

Planned backend:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Optional AI provider

## Run locally

```bash
npm install
npm run dev
```

Create `.env` from `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
```

## Project structure

```text
src/
├── components/
│   ├── applications/
│   ├── dashboard/
│   ├── layout/
│   └── ui/
├── context/
├── data/
├── pages/
├── services/
├── App.jsx
├── main.jsx
└── index.css
```

## Backend integration plan

The frontend service layer expects routes such as:

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/auth/me`
- `GET /api/applications`
- `POST /api/applications`
- `PUT /api/applications/:id`
- `DELETE /api/applications/:id`
- `GET /api/jobs`
- `GET /api/jobs/:id`
- `POST /api/jobs/:id/save`
- `GET /api/companies`
- `GET /api/interviews`
- `POST /api/interviews`
- `GET /api/resumes`
- `POST /api/resumes`

When the backend is connected, replace the mock data usage with the corresponding service methods. Keep API calls outside presentational components.

## Suggested MongoDB models

- User
- Application
- Job
- Company
- Interview
- Resume
- Activity

## Suggested backend architecture

```text
server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── app.js
└── server.js
```

## Future AI layer

The UI is prepared for:

1. Resume-job matching
2. Missing-skill analysis
3. Interview question generation
4. Application insights
5. Resume improvement suggestions

## Portfolio value

Nexora demonstrates:

- React component architecture
- REST API integration
- MongoDB data modeling
- Authentication
- CRUD operations
- Analytics
- Responsive SaaS UI
- State management
- File upload architecture
- AI integration readiness

## License

For portfolio and educational use.
