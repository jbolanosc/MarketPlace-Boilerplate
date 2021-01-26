const routes = [
  {
    route: "/",
    component: Home,
    exact: "exact",
  },
  {
    route: "/cart",
    component: Cart,
  },
  {
    route: "/user",
    component: User,
  },
  {
    route: "/product",
    component: Product,
  },
  {
    route: "/store",
    component: Store,
  },
  {
    route: "*",
    component: NotFound,
  },
];

export default routes;
