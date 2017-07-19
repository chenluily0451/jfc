#!/bin/bash


# 前端编译
(
  cd ../frontend-admin;
  npm run build;
  scp -r static gw:~/jfc-test/
);

# 后端编译
sbt assembly
scp target/scala-2.11/jfc-assembly-0.0.5.jar pub:~/jfc/

ssh pub "cd ~kernel/jfc; ./start.sh"

