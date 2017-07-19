package com.yimei.jfc.core

import java.io.{ByteArrayOutputStream, OutputStreamWriter}
import java.util.{Map => JMap}

import freemarker.template.{Configuration, TemplateExceptionHandler}

import scala.concurrent.Future

/**
  * Created by hary on 2017/5/18.
  */
trait FreemarkerSupport extends Core {
  val ftlConfig = new Configuration(Configuration.VERSION_2_3_23);

  ftlConfig.setClassLoaderForTemplateLoading(this.getClass.getClassLoader, "www")   // 在resources下的那个package下
  ftlConfig.setDefaultEncoding("UTF-8");
  ftlConfig.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
  ftlConfig.setLogTemplateExceptions(false);

  def process(template: String, tdata: JMap[String, AnyRef]): Future[String] = {
    Future {
      val os = new ByteArrayOutputStream()
      val out = new OutputStreamWriter(os)
      ftlConfig.getTemplate(template).process(tdata, out)
      os.toString
    }
  }
}
