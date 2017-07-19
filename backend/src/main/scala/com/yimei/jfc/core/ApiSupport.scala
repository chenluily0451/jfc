package com.yimei.jfc.core

import spray.json.{DefaultJsonProtocol, JsonFormat}

/**
  * Created by hary on 2017/5/12.
  */
trait ApiSupport extends DefaultJsonProtocol {

  // API接口定义
  case class Pager(pageSize: Option[Int], pageNum: Option[Int]);

  case class Pagination(totalCount: Long = 0, totalPage: Long = 0, pageSize: Int = 10, curPage: Int = 1)

  case class Error(code: Int, message: String)

  case class Result[T](data: Option[T] = None, success: Boolean, error: Option[Error] = None)

  case class PageItems[T](items: Seq[T] = List(), pagination: Pagination)


  implicit val PaginationFormat = jsonFormat4(Pagination)

  implicit val PagerFormat = jsonFormat2(Pager)

  implicit val ErrorFormat = jsonFormat2(Error)

  implicit def ResultFormat[A: JsonFormat] = jsonFormat3(Result.apply[A])

  implicit def PageItemsFormat[T: JsonFormat] = jsonFormat2(PageItems.apply[T])

  def failed[T](code: Int, message: String) = Result[T](None, false, Some(Error(code, message)))

  def failed[T](error: Error) = Result[T](None, false, Some(error))

  def success[T](data: T): Result[T] = Result(Some(data), success = true)

  def success[T](items: Seq[T], meta: Pagination): Result[PageItems[T]] = Result(Some(PageItems(items, meta)), success = true)


}
