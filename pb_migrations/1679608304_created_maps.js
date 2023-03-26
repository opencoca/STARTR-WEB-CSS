migrate((db) => {
  const collection = new Collection({
    "id": "cxtrmp7108133fv",
    "created": "2023-03-23 21:51:44.274Z",
    "updated": "2023-03-23 21:51:44.274Z",
    "name": "maps",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j34dqgoa",
        "name": "map",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "247pi4ud",
        "name": "title",
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
        "id": "gigxtou7",
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
  const collection = dao.findCollectionByNameOrId("cxtrmp7108133fv");

  return dao.deleteCollection(collection);
})
