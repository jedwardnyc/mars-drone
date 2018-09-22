#!/bin/bash
sh setup.sh

if [ -z "$SERVER_HOST" ]
then
  export SERVER_HOST="localhost"
fi

if [ -z "$SERVER_PORT" ]
then
  export SERVER_PORT="5000"
fi

node drone.js