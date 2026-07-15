// Отправка заявок с лендинга в Telegram.
//
// ВАЖНО (безопасность): при таком подходе токен бота попадает в клиентский
// бандл и виден в браузере. Для «пока» с отдельным ботом, заведённым только
// под приём заявок, это допустимо. Когда будем подключать агента и MAX —
// вынесем токен на бэкенд (serverless-функцию), и из браузера он исчезнет.

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined

export interface Lead {
  name: string
  contact: string
  about: string
}

export async function submitLead(lead: Lead): Promise<void> {
  if (!BOT_TOKEN || !CHAT_ID) {
    throw new Error(
      'Telegram не настроен: заполни VITE_TELEGRAM_BOT_TOKEN и VITE_TELEGRAM_CHAT_ID в файле .env',
    )
  }

  const text =
    '🚀 Новая заявка — «Проект на автопилоте»\n\n' +
    `👤 Имя: ${lead.name}\n` +
    `📱 Контакт: ${lead.contact}\n` +
    `📝 О себе: ${lead.about.trim() || '—'}`

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      disable_web_page_preview: true,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`Telegram API ${res.status}: ${detail}`)
  }
}
