#!/bin/sh

echo "mode = $NODE_ENV"

if [ "$NODE_ENV" == "production" ] ; then
  yarn start
else
  yarn dev
fi
