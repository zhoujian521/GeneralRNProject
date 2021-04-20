import ApiV1 from '../ApiV1';

class UserApi extends ApiV1 {
  getVerifyCode = this.request(
    (params) => this.apisauce.post('/login/verifyMobile', params),
    (data: any) => data,
  );
  login = this.request(
    (params) => this.apisauce.post('/login/doLogin', params),
    (data: any) => data,
  );
}

const userApi = new UserApi();
userApi.setup();
export default userApi;
