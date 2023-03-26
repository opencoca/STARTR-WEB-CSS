migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3kigxzc8xuwtbg")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y3kigxzc8xuwtbg")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
