/*
 * @Author: zhangLing
 * @Date: 2020-04-02 15:27:17
 * @LastEditors: zhangLing
 * @LastEditTime: 2020-04-03 15:04:34
 * @Description: 文件描述
 */

module.exports = {
  webpack: function(config, env) {
    config.module.rules.forEach(item => {
      item.oneOf &&
      item.oneOf.forEach(el => {
        if (el && el.options && el.options.name) {
          el.options.name = el.options.name.replace('[hash:8].', '')
        }
      })
    })
    return config
  }
}