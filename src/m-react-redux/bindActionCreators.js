export default function bindActionCreators(obj, dispatch) {
  const needObj = {};
  for (let key in obj) {
    needObj[key] = (...args) => dispatch(obj[key](...args));
  }
  // 此处不要忘记自带的参数

  return needObj;
}
