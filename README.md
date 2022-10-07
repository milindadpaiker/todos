# Welcome to StackEdit!

How to run the project


# docker-build

//Always run from parent dir (/d/projects/personal/todos)
*docker build -t milindadpaiker/todo-app -f docker/node.Dockerfile . --no-cache
//login to dockerhub and push above image - default tag latest
docker login --username=yourhubusername
docker push milindadpaiker/todo-app

//if you want to push with a different tag, create the tag from source image first - using image id/name
docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]
docker tag 1babb1dde7e1 milindadpaiker/mil-redis
    OR
    
docker tag milindadpaiker/todo-app milindadpaiker/todo-app:manual
docker push milindadpaiker/todo-app:manual

//Pull image from dockerhub
docker pull milindadpaiker/mil-redis*

## docker-run

*docker network create my-network*

*docker run --name my-db -p 5432:5432 -v todos_todo-db:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin --network my-network -d postgres*

*docker run --name my-server -p 8000:8000 -e DB_SCHEMA=postgres -e DB_USER=postgres -e DB_PASSWORD=admin -e DB_HOST=my-db --network my-network -d todos_todo-server*

//Run multiple instances by updating --name and port

## docker stop

*docker stop container
docker rm container.*



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
