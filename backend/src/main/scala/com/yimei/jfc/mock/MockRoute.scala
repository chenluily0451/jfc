package com.yimei.jfc.mock

import java.util.UUID

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import akka.http.scaladsl.model.headers.HttpCookie
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route
import com.yimei.jfc.core.{HttpSupport, ThymeleafSupport}
import com.yimei.jfc.service.NotificationService

/**
  * Created by hary on 2017/5/15.
  */
trait MockRoute extends ThymeleafSupport with NotificationService with HttpSupport {

 log.debug("MockRoute coreSystem is " + coreSystem)

  def genCookie(systemName: String): Route = {
    pathPrefix(systemName) {
      path("setcookie") {
        val clientId = UUID.randomUUID().toString
        setCookie(HttpCookie(systemName, clientId, path = Some("/"))) {
          complete("ok cookie is set")
        }
      }
    }
  }

  def mockRoute: Route = pathPrefix("mock") {
    path("sms") {
      formFields('msgType, 'phone, 'signature, 'smsUser, 'templateId, 'vars) { (msgType, phone, signature, smsUser, templateId, vars) =>
        log.info(s"smsMock got: msgType[${msgType}], phone[${phone}], signature[${signature}], smsUser[${smsUser}], templateId[${templateId}], vars[${vars}]")
        complete(""""result":true""")
      }
    } ~
      path("thymeleaf") { th("index") } ~
      genCookie("platform") ~
      genCookie("upstream") ~
      genCookie("capital") ~
      genCookie("bridge") ~
      (path("pageTest") & page & parameters("a", "b"))  { (page, a, b) =>
        println(s"a = $a, b = $b")
        result(page)
      }
  }
}
