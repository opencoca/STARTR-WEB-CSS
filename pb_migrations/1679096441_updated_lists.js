migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyrabr6712xrabb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k9uoqzqi",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyrabr6712xrabb")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
