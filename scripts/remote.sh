###
 # @Author: Rainy
 # @Date: 2020-07-05 15:59:16
 # @LastEditors: Rainy
 # @LastEditTime: 2020-07-05 15:59:17
###

#!/usr/bin/env sh

# git@github.com:Rain120/vuepress-docs-template.git

set -e

if [[ -n "$1" ]];then

git remote -v

echo "Old Origin"

git remote remove origin

echo "Add origin $1"

git remote add origin $1

echo "New Origin"
git remote -v

else

echo "Please add the Origin Address"

fi
