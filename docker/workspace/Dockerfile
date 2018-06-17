FROM node:8.9.4-alpine

LABEL maintainer="filipef9@hotmail.com"

RUN \
    apk add --no-cache --virtual .persistent-deps \
        curl \
        openssl \
        vim \
        git \
        # node-sass dependencies
        build-base \
        python \
        py-pip &&\
    # shell setup
    sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd &&\
    npm cache verify &&\
    # config npm with user root
    npm -g config set user root &&\
    # install node dev packages
    npm install -g \
        typescript@2.4.1 \
        @angular/cli@1.2.1

# set up the workspace directory
VOLUME ["/workspace"]
WORKDIR /workspace

EXPOSE 4200

CMD ["npm", "-v"]