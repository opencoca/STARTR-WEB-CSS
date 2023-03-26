migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xc5t3cspcn4rob1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "im6hb8yo",
    "name": "preview",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xc5t3cspcn4rob1")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
