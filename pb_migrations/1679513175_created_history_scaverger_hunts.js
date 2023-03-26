migrate((db) => {
  const collection = new Collection({
    "id": "xc5t3cspcn4rob1",
    "created": "2023-03-22 19:26:15.935Z",
    "updated": "2023-03-22 19:26:15.935Z",
    "name": "history_scaverger_hunts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "n6wqfgbq",
        "name": "name",
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
        "id": "im6hb8yo",
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
            "image/jxl",
            "image/jp2"
          ],
          "thumbs": []
        }
      },
      {
        "system": false,
        "id": "wiziyecr",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("xc5t3cspcn4rob1");

  return dao.deleteCollection(collection);
})
