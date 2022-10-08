How to run the todo-app locally

change to the parent directory todos and run below commands

# 1. Running Todo as a host process but Postgres as container

+ *docker-compose -f docker-compose.yml up --force-recreate --remove-orphans -d db*
+ *npm install*
+ *npm start*

# 2. Running everything as container but without docker-compose file

## Build docker image and push to dockerhub

+ *docker build -t milindadpaiker/todo-app -f docker/node.Dockerfile .*

//login to dockerhub and push above image - default tag latest
+ *docker login --username=yourhubusername*
+ *docker push milindadpaiker/todo-app*

//if you want to push with a different tag, create the tag from source image first - using image id/name
+ *docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]*
+ *docker tag 1babb1dde7e1 milindadpaiker/mil-redis*
    OR
    
+ *docker tag milindadpaiker/todo-app milindadpaiker/todo-app:manual*
+ *docker push milindadpaiker/todo-app:manual*

//Pull image from dockerhub
+ *docker pull milindadpaiker/mil-redis**

## docker-run

+ *docker network create my-network*
+ *docker run --name my-db -p 5432:5432 -v todos_todo-db:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=admin --network my-network -d postgres*
+ *docker run --name my-server -p 8000:8000 -e DB_SCHEMA=postgres -e DB_USER=postgres -e DB_PASSWORD=admin -e DB_HOST=my-db --network my-network -d todos_todo-server*

//Run multiple instances by updating --name and port

## docker stop

+ *docker stop container*
+ *docker rm container.*


#  3. Running everything as container but with docker-compose file


## with Nginx
+ *docker-compose -f docker-compose-with-nginx.yml build nginx todo-server db*
+ *docker-compose -f docker-compose-with-nginx.yml up --force-recreate --remove-orphans -d*
+ *docker-compose -f docker-compose-with-nginx.yml down --remove-orphans*

## without nginx

+ *docker-compose -f docker-compose.yml build todo-server db*
+ *docker-compose -f docker-compose.yml up --force-recreate --remove-orphans -d*
+ *docker-compose -f docker-compose.yml down --remove-orphans*




# 4. Create database schema
//Irrespective of whether you do 1/2/3. Make sure DB schema is created bfore app runs
// Run this in DB container (open from docker desktop)

//Login to sql shell
+ *psql -U postgres*

//create schema and data
+ *CREATE TYPE todo_status AS ENUM ('new', 'inProgress', 'done');
	CREATE TABLE todos (
	todo text,
	status todo_status
);*

+ *insert into todos values( 'excercise', 'new');*
+ *insert into todos values( 'fe', 'new');*

```
