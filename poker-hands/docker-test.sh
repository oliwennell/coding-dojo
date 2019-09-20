#!/bin/bash

CONTAINER_NAME="APP-$(uuidgen)"

docker run -d --name=$CONTAINER_NAME microsoft/dotnet tail -f /dev/null
docker exec -t $CONTAINER_NAME /bin/bash -c 'mkdir -p /app'
docker cp . $CONTAINER_NAME:/app

docker exec -t $CONTAINER_NAME /bin/bash -c 'cd /app; dotnet restore'
docker exec -t $CONTAINER_NAME /bin/bash -c 'cd /app; dotnet test'

docker stop -t 0 $CONTAINER_NAME >> /dev/null
docker rm -fv $CONTAINER_NAME >> /dev/null