migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3kigxzc8xuwtbg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "roqpkz0a",
    "name": "photo",
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
        "image/jp2",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3kigxzc8xuwtbg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "roqpkz0a",
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
        "image/jp2",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
