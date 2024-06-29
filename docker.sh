docker compose down
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
docker rmi $(docker images -f “dangling=true” -q)
docker image rm $(docker image ls -f 'dangling=true' -q)
docker rmi coffe-and-code-api01
docker rmi coffe-and-code-api02
docker rmi coffe-and-code-api03
docker rmi coffe-and-code-lb
docker compose up --build