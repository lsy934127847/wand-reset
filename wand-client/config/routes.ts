export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
   // 组件管理  不要放在最后一个404的下面
   {
    name: 'module',
    icon: 'table',
    path: '/module',
    component: './Module',
  },
    // 活动页面管理  不要放在最后一个404的下面
    {
      name: 'page',
      icon: 'table',
      path: '/page',
      component: './Page',
    },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },

 
];
