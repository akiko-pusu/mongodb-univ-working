rs.initiate()

// use admin のかわりにdb.getSiblingDB() を使う
db = db.getSiblingDB('admin')

db.createUser({
  user: "m103-admin",
  pwd: "m103-pass",
  roles: [
    {role: "root", db: "admin"}
  ]
})
