/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cedgxhvfe6m4ysv");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cedgxhvfe6m4ysv",
    "created": "2024-07-16 09:14:20.313Z",
    "updated": "2024-07-16 09:14:20.313Z",
    "name": "releve",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "t07qswlj",
        "name": "tds",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "iwqs42pb",
        "name": "test",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
