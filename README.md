# Rick and Morty Universe Explorer

Интерактивное React-приложение для просмотра персонажей, локаций и эпизодов из вселенной **Рика и Морти**. Реализована поддержка **Lazy Loading**, **Suspense**, **Error Boundary** и **бесконечной прокрутки (infinite scroll)**.

---

## 🔍 Описание проекта

Это SPA-приложение, построенное с использованием **React + TypeScript**, в котором реализованы:

- Загрузка страниц с помощью `React.lazy()` и `Suspense`
- Обработка ошибок с помощью `ErrorBoundary`
- Infinity Scroll для всех категорий (персонажи, локации, эпизоды)
- Навигация через `React Router v6`
- Запросы к официальному API: [rickandmortyapi.com](https://rickandmortyapi.com/)

---

## 🗺️ Страницы

- `/` — главная страница
- `/:category` — список сущностей категории (`character`, `location`, `episode`) с бесконечной прокруткой
- `/:category/:id` — страница с подробной информацией об элементе
- `*` — страница 404 для несуществующих маршрутов

---

## ⚙️ Функциональность

### ✅ Lazy Loading & Suspense

Все страницы (`Home`, `Category`, `Detail`, `NotFound`) подгружаются динамически с использованием:

```tsx
const Home = React.lazy(() => import("./pages/Home"));
```

🛑 Error Boundary
Ошибки компонентов внутри приложения не блокируют работу всего сайта — они перехватываются и отображаются пользователю. Навигация и маршрутизация продолжают работать.

🔁 Infinity Scroll
На страницах категорий реализована бесконечная прокрутка. При достижении конца списка автоматически загружается следующая страница с API:

Примеры:

GET https://rickandmortyapi.com/api/character?page=2

GET https://rickandmortyapi.com/api/location?page=3

GET https://rickandmortyapi.com/api/episode?page=4

Лимит на одной странице — 20 элементов. Загрузка выполняется по мере прокрутки с использованием IntersectionObserver.
