package com.yimei.jfc

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.asset.AssetRoute
import com.yimei.jfc.bridge.BridgeRoute
import com.yimei.jfc.capital.CapitalRoute
import com.yimei.jfc.captcha.CaptchaRoute
import com.yimei.jfc.dict.DictRoute
import com.yimei.jfc.mock.MockRoute
import com.yimei.jfc.platform.PlatformRoute
import com.yimei.jfc.upstream.UpstreamRoute
import com.yimei.jfc.user.UserRoute

/**
  * Created by hary on 2017/5/12.
  */

trait AllRoute extends DictRoute
  with MockRoute
  with AssetRoute
  with CaptchaRoute
  with ResourceRoute
  with UserRoute
  with UpstreamRoute
  with BridgeRoute
  with PlatformRoute
  with CapitalRoute {

  def route: Route =
    resourceRoute ~
      pathPrefix("api") {
        mockRoute ~
          assetRoute ~
          dictRoute ~
          captchaRoute ~
          userRoute ~
          platformRoute ~
          bridgeRoute ~
          upstreamRoute ~
          capitalRoute
      } ~
      (path("option") & get & oint("hello")) { p =>
        println("get " + p)
        complete("ok")
      }

}


object JfcApp extends App with AllRoute {
  startHttp(route)
  log.info("JfcApp is started")
}

