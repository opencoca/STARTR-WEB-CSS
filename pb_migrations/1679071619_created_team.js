migrate((db) => {
  const collection = new Collection({
    "id": "y3kigxzc8xuwtbg",
    "created": "2023-03-17 16:46:59.677Z",
    "updated": "2023-03-17 16:46:59.677Z",
    "name": "team",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y023w1l2",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lu0gfwpd",
        "name": "role",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cktuz24z",
        "name": "fact",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "roqpkz0a",
        "name": "field",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/vnd.mozilla.apng",
            "image/jpeg",
            "image/jp2",
            "image/gif",
            "image/webp"
          ],
          "thumbs": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y3kigxzc8xuwtbg");

  return dao.deleteCollection(collection);
})
