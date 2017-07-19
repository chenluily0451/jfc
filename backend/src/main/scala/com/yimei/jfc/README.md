### asset  阿里云文件上传下载

GET /asset/policy     - 下发一个上传policy  
POST /asset/callback  - 阿里云上传后返回给你  - 


### captcha 验证码

/:systemName/captcha/get  - 获取验证码   
/:systemName/captcha/check/:code  - 校验验证码  

### core 

### dict 字典表

### flow   ???

### user  用户管理模块

```
/web/:systemName/register.html   注册(下发cookie)    
/web/:systemName/login.html      登录(下发cookie)  
/web/:systemName/index.html      内页(使用登录下发的cookie)   

/:systemName/register/register           -- 登录API    
/:systemName/register/sms/:phone         -- 发送注册短信   
/:systemName/register/checkPhone/:phone  -- 检测手机是否可用  
/:systemName/register/checkName/:name    -- 检测用户名是否可用  

/:systemName/login/jwt                   -- jwt登录

/:systemName/security  -  安全管理
/:systemName/security/changeAdmin    - 更改管理员
/:systemName/security/changePassword - 更改密码
/:systemName/security/changePhone    - 更改手机号

/:systemName/identify        -  认证
/:systemName/identify/get    -  获取认证草稿
/:systemName/identify/save   -  保存认证草稿
/:systemName/identify/submit -  提交认证信息
```
 
### misc 杂项

### capital 资金方模块

### upstream 上游模块

### platform 易煤网平台模块

### bridge 核心企业模块

### service
公共服务

### user
用户管理通用路由


## 关于cookie
```
每个系统的cookie名称为: ${system}
```

## 关于redis
```
captcha的redis存储为  ${system}:kap
短信发送的redis存储为   ${system}:sms
```

## 关于前后端接口 - 统一都为json

```
成功
{
  data: "基本类型"   |  {对象类型} | { 分页数据
    list:  [ a, b, c, d] 
    pagination: {
        curPage: 1,
        pageSize: 10,
        totalPage: 10,
        totalSize: 100
    }
  }
  success: true
}

失败
{
  success:false
  error: {
    code: 40x/ 50x
    message: cust"
  }
}
```

### mongodb 设计

1. CompanyCollection   // 公司

2. UserCollection      // 用户 

3. BusinessCollection  // 业务申请 

4. DebtCollection      // 债权

5. FinanceCollection  // 融资

## 更换手机号-修改手机号[/upstream/security/updatePhone{?smsCode,newPhone}]

### 更换手机号-修改为新手机号[GET]

+ Parameters
   + smsCode:112222 (String) 短信验证码
   + newPhone:13939155835(String) 新手机号

+ Response 200 (application/json)

        {
            "success": true,
            "data":   true
        }

+ Response 400 (application/json)

        {
            "success": false,
            "error": {
                "code": 1000,
                "message": "手机号已经存在"
            }
        }

+ Response 400 (application/json)

        {
            "success": false,
            "error": {
                "code": 1005,
                "message": "图片验证码错误"
            }
        }




