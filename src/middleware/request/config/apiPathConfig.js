/**
 * API 路径前缀配置
 */
export default {
  stockBase: {
    dev: 'http://192.168.0.160:9088/stockproducer',
    test: 'http://101.132.100.21:8083/stockproducer',
    prod: 'http://www.jiaoyixunlian.com:8081/stockproducer'
  },
  saas: {
    dev: 'http://192.168.0.160:9088/saasplat',
    test: 'http://www.uwopai.com:8082/saasplat',
    prod: 'http://www.uwopai.com:8082/saasplat'
  },
  stock: {
    dev: 'http://139.196.104.246:8888',
    test: 'http://139.196.104.246:8888',
    prod: 'http://139.196.104.246:8888'
  },
  fchjr: {
    dev: 'http://101.132.100.21:8083/fchjr',
    test: 'http://101.132.100.21:8083/fchjr',
    prod: 'http://www.uwopai.com:8082/fchjr'
  }
}
