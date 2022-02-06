#!/bin/bash

IP_ADDRESS=$(/sbin/ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1' | grep '192')

SERVER_BASE_URL="http://$IP_ADDRESS:4000"


# server
if [ "$1" == '--server' ]; then
    if [ "$(node -v)" != "v14.0.0" ]; then
        echo "Failed to start up. You need to be running node v14.0.0"
        exit 1
    fi

    if [ "$2" == '--local' ]; then
        echo "Starting server in local mode"
        cd ./src/server && yarn dev || exit
    else
        echo "Starting server in broadcast mode"
        cd ./src/server && IP_ADDRESS="$IP_ADDRESS" yarn dev || exit
    fi
fi

# lightning-app
if [ "$1" == '--client-serve' ]; then

    if ! command -v lng &> /dev/null
    then
        echo "lightning cli could not be found"
        echo "installing..."
        npm install -g @lightningjs/cli
    fi

    cd ./src/app && APP_SERVER_BASE_URL="$SERVER_BASE_URL" lng build && lng serve || exit
fi

if [ "$1" == '--client-dev' ]; then

    if ! command -v lng &> /dev/null
    then
        echo "lightning cli could not be found"
        echo "installing..."
        npm install -g @lightningjs/cli
    fi

    cd ./src/app && APP_SERVER_BASE_URL="$SERVER_BASE_URL" lng dev || exit
fi

