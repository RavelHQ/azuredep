az group create --name myResourceGroup --location eastus

az acr create --resource-group myResourceGroup \
  --name twofoldzuredep --sku Basic

az acr login --name twofoldzuredep

docker build \
--file apps/api/Dockerfile \
--tag twofoldzuredep.azurecr.io/api:v1 \
.

docker run -d -p 3001:3001 twofoldzuredep.azurecr.io/api:v1

<!-- az acr update -n twofoldzuredep.azurecr.io --admin-enabled true -->


  "loginServer": "twofoldzuredep.azurecr.io",