migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyrabr6712xrabb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxmlvplm",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyrabr6712xrabb")

  // remove
  collection.schema.removeField("pxmlvplm")

  return dao.saveCollection(collection)
})
