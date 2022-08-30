//with nginx - build, run, take down
docker-compose  -f docker-compose-with-nginx.yml build nginx todo-server db
docker-compose -f docker-compose-with-nginx.yml up --force-recreate --remove-orphans -d
docker-compose -f docker-compose-with-nginx.yml down --remove-orphans


//without nginx
docker-compose -f docker-compose.yml build todo-server db
docker-compose -f docker-compose.yml up --force-recreate --remove-orphans -d
docker-compose -f docker-compose.yml down --remove-orphans

//to start node without docker in dev mode (but postgres still in docker)
docker-compose -f docker-compose.yml up --force-recreate --remove-orphans -d db
npm install
//change server port to 8000 in app.js
npm start

//todo db schema
CREATE TYPE todo_status AS ENUM ('new', 'inProgress', 'done');
CREATE TABLE todos (
	todo text,
    status todo_status
);
insert into todos values( 'excercise', 'new');
insert into todos values( 'fe', 'new');
