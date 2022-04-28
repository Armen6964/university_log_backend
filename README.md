# BUILD AND RUN PROJECT WITH DOCKER

cd /project/folder
docker-compose -f docker-compose.yml up --build -d

remove -d flag if you want also review the logs

# STOP DOCKER 
cd /project/folder
docker-compose -f docker-compose.yml down


