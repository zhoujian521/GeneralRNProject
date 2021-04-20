import { UserInfo } from './UserApi.type';

export const UserInfoMappper = (info: any): UserInfo => {
  return { ...info, name: '8888' };
};
