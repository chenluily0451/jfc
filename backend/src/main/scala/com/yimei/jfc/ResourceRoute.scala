package com.yimei.jfc

import java.io.File
import java.util.UUID

import akka.http.scaladsl.model.headers.HttpCookie
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.core.HttpSupport

/**
  * Created by hary on 2017/5/15.
  */
trait ResourceRoute extends HttpSupport {

  import akka.http.scaladsl.server.directives.ContentTypeResolver.Default

  def resourceRouteGen(systemName: String) = pathPrefix("web" / systemName) {
    path("index") {
      cookie(systemName) { cookie => getFromResource(s"web/$systemName/index.html") }
    } ~
      path("index" / Segments) { (parts) =>
        cookie(systemName) { cookie =>
          getFromResource(s"web/$systemName/index.html")
        }
      } ~
      path("login") {
        val clientId = UUID.randomUUID().toString
        setCookie(HttpCookie(systemName, clientId, path = Some("/"))) {
          println("cookie set ok.....")
          getFromResource(s"web/$systemName/login.html")
        }
      } ~
      path("register") {
        val clientId = UUID.randomUUID().toString
        setCookie(HttpCookie(systemName, clientId, path = Some("/"))) {
          println(s"cookie set ok[$systemName => $clientId]")
          getFromResource(s"web/$systemName/register.html")
        }
      }
  }

  def welcomePageRoute = pathPrefix("web") {
    path("index") {
      getFromResource("web/page/index.html")
    } ~
      path("financing") {
        getFromResource("web/page/financing.html")
      } ~
      path("security") {
        getFromResource("web/page/security.html")
      } ~
      path("enterprise") {
        getFromResource("web/page/enterprise.html")
      } ~
      path("cooperation") {
        getFromResource("web/page/cooperation.html")
      }
  }

  //开发环境静态资源路由
  def staticResourceRoute = (path("static" / Segments) & get) { parts =>
    getFromFile(new File("../frontend-admin/static/" + parts.mkString("/")))
  }

  def resourceRoute: Route =
    resourceRouteGen("platform") ~
      resourceRouteGen("capital") ~
      resourceRouteGen("bridge") ~
      resourceRouteGen("upstream") ~
      welcomePageRoute ~
      staticResourceRoute
}
