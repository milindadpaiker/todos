# Welcome to StackEdit!

How to run the project


# docker-build

//Always run from parent dir (/d/projects/personal/todos)
*$ docker build -t mm-server -f docker/node.Dockerfile . --no-cache*

## docker-run

*docker network create my-network*

*docker run --name my-db -p 5432:5432 -v todos_todo-db:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin --network my-network -d postgres*

*docker run --name my-server -p 8000:8000 -e DB_SCHEMA=postgres -e DB_USER=postgres -e DB_PASSWORD=admin -e DB_HOST=my-db --network my-network -d todos_todo-server*

//Run multiple instances by updating --name and port

## docker stop

*docker stop container
docker rm container.*

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## docker push

*docker login --username=yourhubusername --email=youremail@company.com
docker tag 1babb1dde7e1 milindadpaiker/mil-redis
docker push milindadpaiker/mil-redis
docker pull milindadpaiker/mil-redis*

## docker-compose

//with Nginx
*docker-compose -f docker-compose-with-nginx.yml build nginx todo-server db
docker-compose -f docker-compose-with-nginx.yml up --force-recreate --remove-orphans -d
docker-compose -f docker-compose-with-nginx.yml down --remove-orphans*

//without nginx
*docker-compose -f docker-compose.yml build todo-server db
docker-compose -f docker-compose.yml up --force-recreate --remove-orphans -d
docker-compose -f docker-compose.yml down --remove-orphans*


## App as host process but Postgres as container

*docker-compose -f docker-compose.yml up --force-recreate --remove-orphans -d db*
	*npm install*
//change server port to 8000 in app.js
	*npm start*

## SB schema
//Run this in DB
//Login to pg shell
*psql -U postgres*

//create schema and data
		*CREATE TYPE todo_status AS ENUM ('new', 'inProgress', 'done');
		CREATE TABLE todos (
		todo text,
		status todo_status
		);*

	*insert into todos values( 'excercise', 'new');
	insert into todos values( 'fe', 'new');*

```