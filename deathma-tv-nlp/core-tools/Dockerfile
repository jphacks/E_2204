FROM python:3.8.6-buster

# install Azure CLI
RUN apt-get update && \
apt-get install gcc -y && \
#  musl-dev python3-dev libffi-dev openssl-dev cargo make 
pip install --upgrade pip && \
pip install azure-cli

# install Azure-func-core-tools
RUN apt-get install wget gpg curl lsb-release -y && \
  curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
  mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg && \
  sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/debian/$(lsb_release -rs | cut -d'.' -f 1)/prod $(lsb_release -cs) main" > /etc/apt/sources.list.d/dotnetdev.list'
RUN apt-get update &&\
  apt-get install azure-functions-core-tools-4 -y
# RUN apt-get install libicu67 -y