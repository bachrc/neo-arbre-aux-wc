/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3ohzxb6zpqym11")

  // remove
  collection.schema.removeField("sr1rguyn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrdetmbk",
    "name": "field",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a3ohzxb6zpqym11")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sr1rguyn",
    "name": "releves",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "cedgxhvfe6m4ysv",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("lrdetmbk")

  return dao.saveCollection(collection)
})
