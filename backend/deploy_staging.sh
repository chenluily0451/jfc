#!/bin/bash


# 前端编译
(
  cd ../frontend-admin;
  npm run build;
  scp -r static gw:~/jfc/
);

# 后端编译
sbt assembly
scp target/scala-2.11/jfc-assembly-0.0.5.jar gw:~/jfc/

ssh gw "cd ~kernel/jfc; ./start.sh"

