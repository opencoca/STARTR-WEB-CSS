migrate((db) => {
  const collection = new Collection({
    "id": "kyrabr6712xrabb",
    "created": "2023-03-17 19:46:20.567Z",
    "updated": "2023-03-17 19:46:20.567Z",
    "name": "lists",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "k9uoqzqi",
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
  const collection = dao.findCollectionByNameOrId("kyrabr6712xrabb");

  return dao.deleteCollection(collection);
})
