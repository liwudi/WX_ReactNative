/**
 * Created by mapbar_front on 2018/3/10.
 */
/**
 * @introduction
 * 路径服务相关的配置，相当于一个全局config.js
 */
const serviceUrl = {
    'main': 'http://datainfo.duapp.com/shopdata/userinfo.php'
};

const Config = function () {
  let instance = null;
  function init() {
      return {
          projectName: "Weixin_ReactNative",
          serviceUrl: serviceUrl,

      }
  }
  return {
      getInstance: function () {
          if(!instance){
              instance = init();
          }
          return instance;
      }
  }
};

export default Config.getInstance();

