# 🍺 Fruit Beer — Landing Page

Адаптивный лендинг бренда **Fruit Beer**, свёрстанный по макету из Figma
([Лонгрид](https://www.figma.com/design/uyDJritHQLHMdomJ3DykC4/)).

## Стек

- **React 18** + **Vite 5**
- **Tailwind CSS** — стили, дизайн-токены, адаптивность
- **Framer Motion** — все анимации
- **React Router** — маршрутизация (лендинг + 404), age-gate как модалка

## Запуск

```bash
cd fruit-beer-landing
npm install
npm run dev        # дев-сервер на http://localhost:5173
```

Сборка прод-версии:

```bash
npm run build      # бандл в dist/
npm run preview    # локальный предпросмотр сборки
```

## Структура

```
src/
  assets/          # шрифты, иконки, изображения (скачаны из Figma)
  data/content.js  # весь текстовый контент (single source of truth)
  lib/motion.js    # переиспользуемые animation variants (Framer Motion)
  components/
    ui/            # дизайн-система: Button, Tag, Card'ы, Marquee, формы-фигуры
    sections/      # секции лендинга (Header, Hero, Mission, …, Footer)
    AgeGate.jsx    # модалка проверки возраста 18+
  pages/
    Landing.jsx    # сборка лендинга из секций
    NotFound.jsx   # страница 404
```

## Дизайн-токены (из Figma «Fons&colors»)

| Токен | Значение |
|-------|----------|
| `fiolet` | `#6637ed` |
| `green` | `#ceff1b` |
| `pink` | `#fbd2ff` |
| `black` | `#1c221b` |
| `white` | `#ffffff` |
| Дисплейный шрифт | **Caprasimo** |
| Текстовый шрифт | **Inter** |

Типографика (H1 135 / H2 50 / H3 35 / Description 20 / Body 16 px) задана в
`tailwind.config.js` и масштабируется плавно через `clamp()` (см. `index.css`).

## Брейкпоинты

Выведены из реальных ширин фреймов адаптаций в Figma:

| Фрейм | Ширина | Tailwind |
|-------|--------|----------|
| Phone | 393 px | базовый (mobile-first) |
| Tablet | 768 px | `md` |
| Desktop | 1440 px | `xl` |
| Wide | 1920 px | `2xl` |

Поведение между брейкпоинтами — fluid (заголовки на `clamp`, сетки на
`grid-cols` + `auto`), вёрстка не ломается на промежуточных ширинах.

## Анимации

- Появление секций при скролле — `whileInView` + `viewport={{ once: true }}`
  (мягкий fade + slide-up).
- `whileHover` / `whileTap` для кнопок и карточек.
- Stagger-анимация для сеток карточек.
- Анимированный вход age-gate и страницы 404.
- Бесконечные marquee (банки, логотипы магазинов, бегущая строка).
- **`prefers-reduced-motion`** уважается: `<MotionConfig reducedMotion="user">`
  + CSS-guard в `index.css` отключают анимации для тех, кто их не хочет.

## Доступность

- Семантические `header` / `nav` / `main` / `section` / `footer`.
- Skip-link, `aria-*` на меню и модалке, видимый focus-ring (`:focus-visible`).
- Навигация с клавиатуры, корректные `alt` у изображений.

## Служебные экраны

- **Age-gate 18+** — показывается при первом визите, ответ запоминается в
  `localStorage`. «Нет» → вежливый блок-экран.
- **404** — любой несуществующий маршрут (`/что-угодно`).
