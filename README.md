# gshop-client_blank

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 如何判断路由之间的关系
  看路由和路由之间的关系不是看怎么跳转的
  而是看位置,看跳转的路由和路由显示的区域的关系
  如果跳转的路由是在显示路由的区域里面切换页面的,那就是显示当前路由的子路由
  如果跳转的页面是改变的当前的路由的界面, 那么是兄弟关系的路由

## git切换分支
  使用 git checkout -b dev
    创建分支dev并切换到dev分支
  在dev分支push代码
    远程仓库又dev分支就更新, 没有就创建
  在dev修改好了代码后, 推送至远程的dev
  本地切换至master分支, 将dev分支代码合并到master上
    git merge dev
  再将master分支的代码推送至远程的master

## 克隆代码
  使用git clone 仓库地址
  注意此时本地只会又master分支,但是远程并不是只有master分支
  使用git checkout -b dev origin/dev 
  这是根据远程的dev 创建本地的dev分支, 如果只写git checkout -b dev是根据本地创建dev分支, 远程的dev分支的代码是没有的