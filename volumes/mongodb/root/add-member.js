// mongo --port 27011 -u m103-admin -p m103-pass
// add replset members
rs.add( { host: "second:27012" } )
rs.add( { host: "third:27013" } )

rs.status()

