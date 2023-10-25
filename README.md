

## Polling

### Легенда

Корпоративная система, в рамках которой есть система обмена сообщениями, аналогичная email. Реализован периодический опрос сервера о поступлении новых сообщений. Поскольку для работы в организации используестя RxJS, то сделано это нужно с его помощью.

### Описание

#### Серверная часть

Реализован простой REST endpoint `/messages/unread`, который возвращает непрочитанные сообщения. Для генерации случайных данных  - библиотека [faker](https://www.npmjs.com/package/faker).

Формат выдаваемых сообщений:
```json
{
  "status": "ok",
  "timestamp": 1553400000,
  "messages": [
    {
      "id": "<uuid>",
      "from": "anya@ivanova",
      "subject": "Hello from Anya",
      "body": "Long message body here" ,
      "received": 1553108200
    }
    {
      "id": "<uuid>",
      "from": "alex@petrov",
      "subject": "Hello from Alex Petrov!",
      "body": "Long message body here",
      "received": 1553107200
    },
    ...
  ]
}
```
 Серверная часть выложена на сервере Netlify
