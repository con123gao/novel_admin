#!/bin/bash

type=$1

if [ ! $type ]; then
  type=alpha
fi

if [ $type == alpha ]; then
  echo 发布到alpha环境
  yarn build:alpha
elif [ $type == test ]; then
  echo 发布到test环境
  yarn build:test
elif [ $type == prod ]; then
  echo 发布到prod环境
  yarn build
else
  echo 请输入正确的环境参数, alpha/test/prod
  exit
fi

echo 压缩打包文件
zip -v -r -n 9 pc-tmp.zip dist

scp -r pc-tmp.zip alliedgaming:/home/activatortube/$type

# ssh alliedgaming "
# >  cd /home/activatortube/$type
# >  rm -r -f ./pc
# >  unzip -d ./pc -o pc-tmp.zip
# >  rm -f pc-tmp.zip
# >  cd pc
# >  npm i --legacy-peer-deps
# >  pm2 restart pc-$type
# >  sudo systemctl restart nginx
# >  logout
# "

rm -f pc-tmp.zip

echo 上传完成，前往服务器部署