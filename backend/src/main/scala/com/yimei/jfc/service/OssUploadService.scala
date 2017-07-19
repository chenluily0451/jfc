package com.yimei.jfc.service

import java.nio.file.{Files, Paths}

/**
  * Created by hary on 2017/5/17.
  */

// 阿里云OSS后台上传
trait OssUploadService {

  Files.probeContentType(Paths.get("Users", "hary/tmp", "a.txt"))

}
