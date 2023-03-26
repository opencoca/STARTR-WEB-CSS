migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8kooxbzbupkltd8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apzlpn49",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kyrabr6712xrabb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8kooxbzbupkltd8")

  // remove
  collection.schema.removeField("apzlpn49")

  return dao.saveCollection(collection)
})
