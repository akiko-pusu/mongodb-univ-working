## Run mongo ReplicaSet

```bash
docker-compose up -d

# wait for a while
docker-compose exec primary mongo --port 27011 /root/setup-script.js

# or load script inside Mongo Shell
# like: load('/root/setup-script.js')
#
```

After creating user, please recommect.

```bash
docker-compose exec primary mongo admin --port 27011 -u m103-admin -p m103-pass /root/add-member.js
```

### run secondaryOk() command

To read the documant from the secondary node, secondary node state is in a ``secondary ok`` mode.

First, connect to the secondary node via Mongo shell.
Then run ``rs.secondaryOk()`` command.
