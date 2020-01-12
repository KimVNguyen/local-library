wait-for-it mongodb:27017
[ ! -d "/code/node_modules" ] && npm install
nodemon ./bin/www