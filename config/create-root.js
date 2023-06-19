const MONGO_ROOT_USER = process.env["MONGO_ROOT_USER"];
const MONGO_ROOT_PASSWORD = process.env["MONGO_ROOT_PASSWORD"];

const MONGO_CLIENT_USER = process.env["MONGO_CLIENT_USER"];
const MONGO_CLIENT_PASSWORD = process.env["MONGO_CLIENT_PASSWORD"];
const MONGO_CLIENT_DATABASE = process.env["MONGO_CLIENT_DATABASE"];

use("admin");

db.createUser({
  user: MONGO_ROOT_USER,
  pwd: MONGO_ROOT_PASSWORD,
  roles: [
    {
      role: "root",
      db: "admin",
    },
  ],
});

db.createUser({
  user: MONGO_CLIENT_USER,
  pwd: MONGO_CLIENT_PASSWORD,
  roles: [
    {
      role: "readWrite",
      db: MONGO_CLIENT_DATABASE,
    },
  ],
});

db.use(MONGO_CLIENT_DATABASE);

db.shutdownServer();

exit;
