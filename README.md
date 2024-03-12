az group create --name myResourceGroup --location eastus

az acr create --resource-group myResourceGroup \
  --name twofoldzuredep --sku Basic

az acr login --name twofoldzuredep

docker build \
--file apps/api/Dockerfile \
--tag twofoldzuredep.azurecr.io/api:v6 \
.
docker push twofoldzuredep.azurecr.io/api:v6

docker run -d -p 8080:8080 twofoldzuredep.azurecr.io/api:v6




<!-- az acr update -n twofoldzuredep.azurecr.io --admin-enabled true -->

<!-- "loginServer": "twofoldzuredep.azurecr.io", -->