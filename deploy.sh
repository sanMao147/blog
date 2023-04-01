set -e


yarn docs:build
git add -A
git commit -m 'deploy'
git subtree push --prefix dist origin gh-pages



cd -