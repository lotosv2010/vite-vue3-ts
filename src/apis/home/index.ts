import request from '@/service';

export const getUserInfo = (data?: object) =>
  request({
    url: '/getUserInfo',
    method: 'POST',
    data,
  });
