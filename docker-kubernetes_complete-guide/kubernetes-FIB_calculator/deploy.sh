# GIT_SHA and GITMAINFOLDER are set in travis.yml file as global environment variables.
# change for change's sake

docker build -t mitchellgerdisch/multi-client:latest -t mitchellgerdisch/multi-client:$GIT_SHA -f $GITMAINFOLDER/client/Dockerfile $GITMAINFOLDER/client
docker build -t mitchellgerdisch/multi-server:latest -t mitchellgerdisch/multi-server:$GIT_SHA -f $GITMAINFOLDER/server/Dockerfile $GITMAINFOLDER/server
docker build -t mitchellgerdisch/multi-worker:latest -t mitchellgerdisch/multi-worker:$GIT_SHA -f $GITMAINFOLDER/worker/Dockerfile $GITMAINFOLDER/worker

docker push mitchellgerdisch/multi-client:latest  
docker push mitchellgerdisch/multi-server:latest
docker push mitchellgerdisch/multi-worker:latest

docker push mitchellgerdisch/multi-client:$GIT_SHA 
docker push mitchellgerdisch/multi-server:$GIT_SHA
docker push mitchellgerdisch/multi-worker:$GIT_SHA

kubectl apply -f $GITMAINFOLDER/k8s
kubectl set image deployments/client-deployment client=mitchellgerdisch/multi-client:$GIT_SHA
kubectl set image deployments/server-deployment server=mitchellgerdisch/multi-server:$GIT_SHA
kubectl set image deployments/worker-deployment worker=mitchellgerdisch/multi-worker:$GIT_SHA
