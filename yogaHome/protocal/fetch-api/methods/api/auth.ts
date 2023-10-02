import { methods } from '../setting';
const router = {
  getDemo: '/api/announcementType',
  queryDemo: '/api/announcementRange',
  login: '/api/user/login'
};

export const GetDemo = ():Promise<GetDemoRes> =>
  methods.get(router.getDemo) as Promise<GetDemoRes>;

/**
 * @description Demo
 * @param params object {
 *  curr_page,
 *  announcement_type_id
 * }
 * @returns
 */
export const QueryDemo = (params: QueryDemoParams): Promise<QueryDemoRes> =>
  methods.get(router.queryDemo, params) as Promise<QueryDemoRes>;

export const PostDemo = (params: QueryDemoParams): Promise<any> =>
  methods.post(router.getDemo, params);

export const Login = (params: any): Promise<any> =>
  methods.post(router.login, params);
