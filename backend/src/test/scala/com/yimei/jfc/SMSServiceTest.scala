package com.yimei.jfc


import java.util.Date

import com.yimei.jfc.core.{MongoSupport, MongoSyncSupport}
import com.yimei.jfc.user.CompanyService
import org.bson.types.ObjectId
import org.mongodb.scala.bson.BsonDateTime

/**
  * Created by xiangyang on 2017/5/27.
  */
object SMSServiceTest extends App with MongoSupport with MongoSyncSupport with CompanyService {


//  val big1 = Big(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3)
//  val big2 = Big(1 to 23: _*)

//  mongoBig.insertOne(big1).results()
//  mongoBig.find().printResults()

  //  mongoSurvey.find(equal("companyId", "sdf")).results()
  //  FileDocument("sdf","sdf","sdfsf")
  //  saveLicenseSurveyDocument("werwer",LicenseSurveyDocument())
}
