#!/bin/bash

# server

if [ "$1" == '--server' ]; then
    cd ./src/server && yarn dev cd ../src/app && yarn dev || exit
fi

# lightning-app

if [ "$1" == '--client' ]; then

    if ! command -v lng &> /dev/null
    then
        echo "lightning cli could not be found"
        echo "installing..."
        npm install -g @lightningjs/cli
    fi

    cd ./src/app && yarn dev || exit
fi

