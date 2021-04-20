import ApiV1 from '../ApiV1';

class UserApi extends ApiV1 {
  getVerifyCode = this.request(
    (mobile: string) => this.apisauce.post('/login/verifyMobile', { mobile }),
    (data: any) => data,
  );
  login = this.request(
    (mobile: string, code: string) => this.apisauce.post('/login/doLogin', { mobile, code }),
    (data: any) => data,
  );
}

const userApi = new UserApi();
userApi.setup();
export default userApi;
