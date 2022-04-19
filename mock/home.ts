import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
export default [
  {
    url: '/api/getUserInfo',
    method: 'post',
    response: () => {
      return Mock.mock({
        code: 200,
        data: {
          nickname: 'about',
          age: '@integer(10-100)',
        },
      });
    },
  },
] as MockMethod[];
