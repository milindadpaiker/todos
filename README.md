//with nginx - build, run, take down
docker-compose  -f docker-compose-with-nginx.yml build nginx todo-server db
docker-compose -f docker-compose-with-nginx.yml up --force-recreate --remove-orphans -d
docker-compose -f docker-compose-with-nginx.yml down --remove-orphans


//without nginx
docker-compose -f docker-compose.yml build todo-server db
docker-compose -f docker-compose.yml up --force-recreate --remove-orphans -d
docker-compose -f docker-compose.yml down --remove-orphans