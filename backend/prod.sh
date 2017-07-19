#!/bin/bash

java -Dconfig.file=./prod.conf -jar target/scala-2.11/jfc-assembly-0.0.5.jar > out.log 2>&1 &
