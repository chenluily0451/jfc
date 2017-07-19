package com.yimei.jfc.captcha

import akka.http.scaladsl.server.Directives.{complete, cookie, path, _}
import akka.http.scaladsl.server.Route

/**
  * Created by hary on 2017/5/13.
  */
trait CaptchaRoute extends CaptchaController {

  def captchaRouteGen(systemName: String) = pathPrefix(systemName) {
    cookie(systemName) { cookie =>
      log.info(s"captcha: get cookie ${cookie.name} -> ${cookie.value}")
      pathPrefix("captcha") {
        // 获取验证码 /upstream/captcha/get, res:  jpg图片 + cookie
        path("get") {
          complete(handleGetCaptcha(cookie.value)) // 这里就已经是个HttpResponse了
        } ~
          // 校验验证码 /upstream/captcha/check/:code, res: { sucess: true, data: true}
          path("check" / Segment) { code =>
            onSuccess(handleCheckCaptcha(cookie.value, code)) {
              case true => complete(success(true))
              case false => complete(failed[Boolean](400, "图形验证码错误"))
            }
          } ~
          path("find") {
            complete(findCaptcha(cookie.value))
          }
      }
    }
  }


  def captchaRoute: Route =
    captchaRouteGen("platform") ~
      captchaRouteGen("upstream") ~
      captchaRouteGen("bridge") ~
      captchaRouteGen("capital")
}
