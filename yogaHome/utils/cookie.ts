import Cookies from 'js-cookie';
// import { encrypt, decrypt } from '@/utils/tools/crypto-js';
// const useHash = false;

/** key對應表 */
const keyMap = {
  demo: 'DEMO'
};
// -------------------------------------------------------------------------------------------------
// server header 攔截分解
const HeaderCookieObj = function (req: any) {
  const serviceCookie: any = {};
  if (req && req.headers && req.headers.cookie) {
    req.headers.cookie.split(';').forEach(function (val: string) {
      const parts = val.split('=');
      serviceCookie[parts[0].trim()] = (parts[1] || '').trim();
    });
  }
  return serviceCookie;
};

/** 刪除 cookie */
const Remove = function (key: string) {
  Cookies.remove(key);
};

/** 刪除 all cookie */
const RemoveAll = function () {
  Object.keys(Cookies.get()).forEach((key) => {
    Cookies.remove(key);
  });
};

// server ------------------------------------------
/** 取得 server cookie */
const ServerGet = function (key: string, req: any) {
  const cookieObj = HeaderCookieObj(req);
  const value = cookieObj[key];
  return value;
};
/** 設定 server cookie */
const ServerSet = function (key: string, value: string, res: any) {
  const _value = value;
  const _str = `${key}=${_value}`;
  res.setHeader('Set-Cookie', [`${_str}; path=/;`]);
};

// client ------------------------------------------
/** 取得 cookie */
const Get = function (key: string) {
  const value = Cookies.get(key);
  return value;
};

/** 設定 cookie */
const Set = function (key: string, value: string) {
  Cookies.set(key, value);
};

export default {
  keyMap,
  Get,
  Set,
  Remove,
  RemoveAll,
  ServerGet,
  ServerSet
};
