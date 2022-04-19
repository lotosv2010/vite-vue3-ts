import request from '@/service';

export const getMapData = (data?: any) => {
  return request({
    url: '/datav-res/datav/map.json',
    method: 'GET',
    data,
    interceptors: {
      requestInterceptors(res: any) {
        console.log('接口请求拦截');
        return res;
      },
      responseInterceptors(result: any) {
        console.log('接口响应拦截');
        return result;
      },
    },
  });
};

export const getDashboardInfo = (data?: object) =>
  request({
    url: '/getDashboardInfo',
    method: 'POST',
    data,
  });
