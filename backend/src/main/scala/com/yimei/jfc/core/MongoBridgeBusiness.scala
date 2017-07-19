package com.yimei.jfc.core

import java.util.Date

import org.mongodb.scala.bson.ObjectId
import spray.json.DefaultJsonProtocol

/**
  * Created by xiangyang on 2017/6/10.
  */

trait MongoBridgeBusiness extends Core with DefaultJsonProtocol with HttpSupport with MongoCommon {



}
