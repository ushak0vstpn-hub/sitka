// Налаштування синхронізації. Встав сюди два значення з Supabase:
// Project Settings → API (або Connect) → Project URL та anon public / Publishable key.
// Цей ключ публічний за задумом: доступ до даних захищають правила безпеки (RLS) у базі.
window.SITKA_CONFIG = {
  SUPABASE_URL: "",
  SUPABASE_KEY: ""
};
