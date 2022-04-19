import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
export default [
  {
    url: '/api/getDashboardInfo',
    method: 'post',
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          nickname: '@cname',
          age: '@integer(10-100)',
          uid: '@id',
          url: '@image(200x100)',
          city: '@city',
          country: '@county(true)',
          province: '@province',
          mobile_phone: '@phone',
          email: '@email',
          region: '@region',
          menus: [
            {
              menu_name: '一级导航',
              id: '@id',
              code: 'Nav1',
              children: [
                {
                  code: 'about',
                  menu_url: 'views/about',
                  access_permissions: '["about"]',
                  children: [],
                  menu_name: '测试1',
                  id: '@id',
                },
                {
                  code: 'home',
                  menu_url: 'views/home',
                  access_permissions: '["home"]',
                  children: [],
                  menu_name: '测试2',
                  id: '@id',
                },
              ],
            },
          ],
        },
      });
    },
  },
] as MockMethod[];
