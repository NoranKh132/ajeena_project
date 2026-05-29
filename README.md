# Ajeena Bakery — Full Stack Website

Bilingual Arabic/English bakery site for sourdough and baked goods.

## Stack
- Frontend: React + Bootstrap + CSS
- Backend: Python + Django + Django REST Framework
- DB: SQLite by default

## Run Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed
python manage.py runserver
```

Backend runs on: `http://127.0.0.1:8000`

## Run Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

## Admin
Create admin user:
```bash
cd backend
python manage.py createsuperuser
```
Then open: `http://127.0.0.1:8000/admin/`

## Notes
- No real product photos were provided, so product cards use warm illustrated placeholders.
- Logo and menu image are included in frontend assets.
