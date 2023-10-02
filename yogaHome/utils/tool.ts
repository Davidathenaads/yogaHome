/**  async await 等待 */
const Wait = () => (ms = 1000) => new Promise((resolve) => setTimeout(() => resolve(null), ms));

/** object has key */
const HasKey = (object: object, key: string) => object != null && Object.hasOwnProperty.call(object, key);

/** UUID 生成 */
const CreateUUID = () => {
  let d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

/** 是物件 */
const IsObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

/** 是陣列 */
const IsArray = (arr: any) => {
  return Object.prototype.toString.call(arr) === '[object Array]';
};
/** 補零 */
// '123'.padStart(5, '0') // '00123';
// '123'.padEnd(5, '0') // '12300';
export default {
  Wait, /** 123 */
  HasKey,
  CreateUUID,
  IsObject,
  IsArray
};
