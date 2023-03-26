migrate((db) => {
  const collection = new Collection({
    "id": "8kooxbzbupkltd8",
    "created": "2023-03-17 19:45:45.116Z",
    "updated": "2023-03-17 19:45:45.116Z",
    "name": "items",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g653i9vm",
        "name": "text",
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
        "id": "frrjhjyg",
        "name": "done",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("8kooxbzbupkltd8");

  return dao.deleteCollection(collection);
})
