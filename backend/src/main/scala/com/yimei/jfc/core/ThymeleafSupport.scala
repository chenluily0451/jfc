package com.yimei.jfc.core

import akka.http.scaladsl.model.ContentTypes.`text/html(UTF-8)`
import akka.http.scaladsl.model.{HttpEntity, HttpResponse, StatusCodes}
import akka.http.scaladsl.server.Directives.complete
import akka.stream.scaladsl.Source
import akka.util.ByteString
import org.thymeleaf.TemplateEngine
import org.thymeleaf.context.Context
import org.thymeleaf.templatemode.TemplateMode
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver

import scala.concurrent.Future

/**
  * Created by hary on 2017/5/18.
  */
trait ThymeleafSupport extends Core {

  val templateResolver = new ClassLoaderTemplateResolver(this.getClass.getClassLoader)

  templateResolver.setPrefix(coreConfig.getString("thymeleaf.path"))
  templateResolver.setSuffix(".html");
  templateResolver.setTemplateMode(TemplateMode.HTML);
  templateResolver.setCacheTTLMs(3600000L);
  templateResolver.setCacheable(false);  // 生产应该是true

  val templateEngine = new TemplateEngine();
  templateEngine.setTemplateResolver(templateResolver);

  def th(template: String, context: Context = new Context()) = {
    val src = Source.fromFuture(Future {
      ByteString(templateEngine.process(template, context))
    })
    complete(HttpResponse(status = StatusCodes.OK, entity = HttpEntity(`text/html(UTF-8)`, src)))
  }


  def context(variables: (String, AnyRef)*): Context = {
    import scala.collection.JavaConverters._
    val ctx = new Context();
    ctx.setVariables(variables.toMap.asJava)
    ctx
  }
}
