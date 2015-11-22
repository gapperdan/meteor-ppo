# meteor-ppo
## Description
'ppo' stands for Planning Poker Online. Planning Poker is an agile process used by teams for sizing stories.
Reference: https://en.wikipedia.org/wiki/Planning_poker

## Goal
The goal of this project is to provide a free online platform where distributed team members can size stories together (with a moderator driving the session).

## meteor packages used
* meteor add random

## Mongo data model
### collection: sessions
```
{
    "session_id": "12345-a3a33-132da-fr456-009de",
    "title": "Sizing session 11/25/2015",
    "description": "Sizing stories - part 1",
    "sizes": [
        {
            "size": "XS",
            "points": 1
        },
        {
            "size": "S",
            "points": 2
        },
        {
            "size": "M",
            "points": 4
        },
        {
            "size": "L",
            "points": 8
        }
    ],
    "sizers": [
        {
            "id": "1",
            "name": "Joe"
        },
        {
            "id": "2",
            "name": "Sunil"
        },
        {
            "id": "3",
            "name": "Mary"
        },
        {
            "id": "4",
            "name": "Lisa"
        },
        {
            "id": "5",
            "name": "Harry"
        }
    ]
}
```
### collection: stories
```
{
    "_id": "5t7fd-4rr12-990ea-1dd8d-990ew",
    "session_id": "12345-a3a33-132da-fr456-009de",
    "stories": [
        {
            "id": 1,
            "description": "ITAA-001: Create a login page",
            "size": "XS",
            "points": 1,
            "sizers": [
                {
                    "name": "Mary",
                    "size": "XS",
                    "points": 1
                },
                {
                    "name": "Joe",
                    "size": "S",
                    "points": 2
                },
                {
                    "name": "Sunil",
                    "size": null,
                    "points": null
                },
                {
                    "name": "Harry",
                    "size": null,
                    "points": null
                },
                {
                    "name": "Lisa",
                    "size": null,
                    "points": null
                }
            ]
        }
    ]
}
```
