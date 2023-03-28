# 忽略错误
set -e

# 构建
yarn build

# 进入待发布的目录
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

cd -