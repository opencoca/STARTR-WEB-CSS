migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cxtrmp7108133fv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ikrrw15b",
    "name": "preview",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/vnd.mozilla.apng"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cxtrmp7108133fv")

  // remove
  collection.schema.removeField("ikrrw15b")

  return dao.saveCollection(collection)
})
