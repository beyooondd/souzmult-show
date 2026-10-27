# Тайна Вселенной — Next.js

## Запуск локально
    npm install
    npm run dev      # http://localhost:3000

## Деплой на Vercel
1. Залей папку в GitHub (или `npx vercel` из этой папки).
2. vercel.com → Add New → Project → выбери репозиторий.
3. Framework — Next.js (определится сам). Жми Deploy.

## Где что править
- `app/body.html` — вся разметка и тексты
- `app/globals.css` — стили
- `app/Behavior.jsx` — расписание (массив D), бегущая строка, меню
- `public/assets/` — картинки и шрифты
