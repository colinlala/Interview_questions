# GET 和 POST 的区别

- GET 获取资源
- POST 提交数据，即上传数据
- HEAD 获得报文首部
- PUT 更新资源
- PATCH 对PUT的补充，对**已知资源部分更新**
- DELETE 删除资源
- OPTIONS 列出请求资源支持的请求方法，用来跨域请求
- TRACE 追踪请求/响应路径，用于测试或诊断
- CONNECT 将连接改为管道方式用于代理服务器

1. GET在浏览器回退时是**无害**的，而POST会**再次发起请求**
2. GET请求会被浏览器**主动缓存**，而POST不会，除非手动设置
3. GET 只能进行 URL 编码，只能接收 **ASCII 字符**，而 POST 没有限制。
4. GET 一般放在 URL 中，因此**不安全**，POST 放在请求体中，更适合传输敏感信息。
5. GET产生**一个TCP数据包**，POST产生**两个数据包**(Firefox只发一次)。**GET浏览器把 http header和data一起发出去，响应成功200，POST先发送header，响应100 continue，再发送data，响应成功200**

