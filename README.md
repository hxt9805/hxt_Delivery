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