FROM hashicorp/terraform:1.2.6

# install Docker CLI
# RUN apk update && \
# apk add --no-cache docker-cli && \
# apk add --no-cache docker-compose

# install Azure CLI
RUN apk add py3-pip && \
apk add gcc musl-dev python3-dev libffi-dev openssl-dev cargo make && \
pip install --upgrade pip && \
pip install azure-cli

# RUN cd terraform && \
#   terraform init