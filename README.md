[![Build Status](https://travis-ci.com/NimfaMargo/project-lvl4-s403.svg?branch=master)](https://travis-ci.com/NimfaMargo/project-lvl4-s403)


#### * `GET /api/v1/channels/` - получить список каналов.

Формат ответа:
```
[
  { id: generalChannelId, name: 'general', removable: false },
  { id: randomChannelId, name: 'random', removable: false },
]
```

#### * `POST /api/v1/channels/` - создать новый канал

Формат запроса:
```
{ "data": { "attributes": { "name": "test" } } }
```
Формат ответа:
```
{"data":{"type":"channels","id":3,"attributes":{"name":"test","removable":true,"id":3}}}
```

#### * `DELETE /api/v1/channels/:id` - удалить канал по id
#### * `PATCH /api/v1/channels/:id` - обновить канал по id
#### * `GET /api/v1/channels/:channelId/messages` - получить все сообщения для channelId

Формат ответа:
```
[{"type":"messages","id":10,"attributes":{"message":"test","channelId":2,"id":10}}]
```
#### * `POST /api/v1/channels/:channelId/messages` - создать новое сообщение для channelId

Формат запроса:
```
{ "data": { "attributes": { "message": "test" } } }
```
Формат ответа:
```
{"data":{"type":"messages","id":10,"attributes":{"message":"test","channelId":2,"id":10}}}
```
