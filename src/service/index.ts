import Request from './request';
import { AxiosResponse } from 'axios';

import type { RequestConfig } from './request/types';

interface IResponse<T> {
  statusCode: number;
  desc: string;
  result: T;
}
interface IRequest<T> extends RequestConfig<IResponse<any>> {
  data?: T;
}

const request = new Request({
  baseURL: import.meta.env.VITE_API_HOST,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {IRequest} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const req = <D = any, T = any>(config: IRequest<D>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return request.request<IResponse<T>>(config);
};
export const upload = (url: string, data: File) => {
  return request.upload(url, data);
};
export const download = (url: string) => {
  return request.download(url);
};
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest();
};

export default req;
