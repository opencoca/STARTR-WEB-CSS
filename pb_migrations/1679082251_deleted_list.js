migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zj0f0lnihnkamq1");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "zj0f0lnihnkamq1",
    "created": "2023-03-17 19:40:49.994Z",
    "updated": "2023-03-17 19:40:49.994Z",
    "name": "list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e8m2zslx",
        "name": "userID",
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
      },
      {
        "system": false,
        "id": "iqoppn6p",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
})
