# SiteForge Berlin — готовый продакшн-шаблон сайта услуг

Полноценный сайт на **Next.js + TypeScript + Tailwind** с архитектурой для быстрого запуска MVP и дальнейшего роста.

## Что реализовано

- Лендинг (главная) с CTA и блоками услуг.
- Страница услуг и отдельные детальные страницы.
- Контакты с формой, серверным endpoint, валидацией (`zod`) и антиспамом (honeypot + rate limit).
- Блог на MDX (`content/blog/*.mdx`).
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD schema.org.
- Подключаемая аналитика (Plausible через env-переменную).
- A11y-friendly семантика + фокус на performance.
- Кастомные страницы 404 и 500.
- Простая админка контента через Decap CMS (`/admin`).

## Почему этот стек

- **Next.js (App Router):** SSR/SSG, API routes, встроенные SEO-механизмы.
- **TypeScript:** предсказуемость и меньше регрессий.
- **Tailwind CSS:** быстрые UI-итерации и консистентный дизайн.
- **MDX + Git-based CMS:** максимально простой контент-воркфлоу без отдельного бэкенда.

## Структура репозитория

```txt
app/
  api/contact/route.ts
  blog/[slug]/page.tsx
  blog/page.tsx
  contact/page.tsx
  services/[slug]/page.tsx
  services/page.tsx
  error.tsx
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  analytics.tsx
  contact-form.tsx
  footer.tsx
  header.tsx
content/
  blog/*.mdx
  services/*.mdx
lib/
  content.ts
  rate-limit.ts
  schemas.ts
  types.ts
public/
  admin/config.yml
  admin/index.html
.env.example
next.config.ts
postcss.config.mjs
tailwind.config.ts
```

## Локальный запуск

```bash
npm install
npm run dev
```

Ожидаемый результат: сайт доступен на `http://localhost:3000`, страницы рендерятся, блог/услуги подтягиваются из `content/*`.

## Проверка качества

```bash
npm run lint
npm run typecheck
npm run build
```

Ожидаемый результат: все команды проходят без ошибок.

## Деплой на Vercel

1. Залить репозиторий в GitHub.
2. Import Project в Vercel.
3. Добавить env-переменные из `.env.example`.
4. Нажать Deploy.

Ожидаемый результат: сайт публикуется, `sitemap.xml`/`robots.txt` доступны.

## .env

См. `.env.example`:

- `NEXT_PUBLIC_SITE_URL` — canonical URL сайта.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — домен для аналитики (необязательно).

## Контент-админка (Decap CMS)

1. Открыть `public/admin/config.yml`.
2. Указать `backend.repo` в формате `owner/repo`.
3. Настроить GitHub OAuth App для Decap (или использовать Netlify Identity при необходимости).
4. Открыть `/admin` и редактировать контент коллекций `blog` и `services`.

Ожидаемый результат: контент редактируется через GUI и коммитится в репозиторий.

## Тест-план (ручной)

1. Главная открывается, CTA ведут на нужные страницы.
2. Страница услуг показывает карточки и переходы в детали.
3. Блог отображает список и полные статьи.
4. Форма контактов:
   - валидирует email/длину сообщения,
   - принимает корректные данные,
   - блокирует спам-поле `website`,
   - ограничивает частоту запросов.
5. `/sitemap.xml` и `/robots.txt` отдают валидные данные.
6. Проверить 404 (несуществующий URL) и 500 (искусственно вызвать ошибку).
7. Lighthouse: Performance/SEO/Best Practices/Accessibility (цель 90+).

## Идеи для версии 2.0

- Подключить transactional email (Resend/Postmark) для заявок.
- Персистентный rate limit (Upstash Redis вместо in-memory).
- Мультиязычность (i18n: ru/en/de).
- Реальный headless CMS (Sanity/Contentful) при росте редакции.
- E2E тесты Playwright + visual regression.


## Что дальше делать

Смотри пошаговый файл: `NEXT_STEPS.md`.
