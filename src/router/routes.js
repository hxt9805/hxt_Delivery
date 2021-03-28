import MSite from "@/pages/MSite/MSite.vue";
import Search from "@/pages/Search/Search.vue";
import Order from "@/pages/Order/Order.vue";
import Personal from "@/pages/Personal/Personal.vue";
export default [
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/',
    redirect: '/msite'
  }
]