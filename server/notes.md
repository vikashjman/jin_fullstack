docker run --name some-postgres -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -d postgres
docker exec -it some-postgres psql -U root

docker run --name psdev 5432:5432 -e POSTGRES_PASSWORD=P@ssw0rd -d postgres

npx knex init
npx knex migrate:make init --migrations-directory db/migrations
npx knex migrate:latest --knexfile db/knexfile.js
npx knex seed:run --knexfile db/knexfile.js

docker run --name my-mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=root' -p 1433:1433 -d mcr.microsoft.com/mssql/server:latest

docker-compose up -d
docker-compose down
