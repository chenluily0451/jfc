package com.yimei.jfc.core

import java.io.ByteArrayOutputStream
import java.util.Properties
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec
import javax.xml.crypto.dsig.SignatureMethod.HMAC_SHA1

import akka.NotUsed
import akka.stream.scaladsl.Source
import akka.util.ByteString

import scala.concurrent.{ExecutionContext, Future}

/**
  * Created by hary on 2017/5/12.
  */
object Utils {
  // 获取上传文件签名
  def hmacSHA1(key: Array[Byte], data: Array[Byte]): String = {
    val signingKey: SecretKeySpec = new SecretKeySpec(key, HMAC_SHA1);
    val mac = Mac.getInstance("HmacSHA1");
    mac.init(signingKey);
    val rawHmac = mac.doFinal(data);
    base64Encode(rawHmac);
  }

  def base64Encode(origin: Array[Byte]): String = {
    if (null == origin) {
      return null;
    }
    new sun.misc.BASE64Encoder().encode(origin).replace("\n", "").replace("\r", "");
  }


  val codeNums = Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)

  def generateVerifyCode: String = {
    import java.util.Random
    val random = new Random()
    var code = ""
    while (code.length < 6) {
      code += codeNums(random.nextInt(10))
    }
    code
  }


  /**
    * 生成校验码
    */

  import javax.imageio.ImageIO

  import com.google.code.kaptcha.util.Config;
  ImageIO.setUseCache(false);

  def genRecaptcha(implicit ec: ExecutionContext): (Source[ByteString, NotUsed], String) = {

    val randomCode = "%06d".format(math.abs((new util.Random).nextInt(999999)))

    val source = Source.fromFuture(Future {
      val props = new Properties();
      props.put("kaptcha.border", "no");
      props.put("kaptcha.textproducer.font.color", "black");
      props.put("kaptcha.textproducer.char.space", "4");
      props.put("kaptcha.textproducer.char.length", "6");
      val config = new Config(props);
      val producer = config.getProducerImpl();
      val bufferedImage = producer.createImage(randomCode)
      val baos = new ByteArrayOutputStream()
      ImageIO.write(bufferedImage, "jpg", baos)
      ByteString(baos.toByteArray)
    })

    (source, randomCode)
  }

  /**
    * https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=403837240&idx=1&sn=ae9f2bf0cc5b0f68f9a2213485313127&key=a226a081696afed045bbfd3d3e3e39be9215c464f525017a6f44acc9a7f40c386d9b4173528653df7459032b87ffd9cc0ab77ac83fa8fef28969efb84165b81b5edcf7292bdcec2d7c67a5f102152b17&ascene=0&uin=MTY4ODU5NzEwNQ%3D%3D&devicetype=iMac+MacBookPro11%2C1+OSX+OSX+10.11.6+build(15G1212)&version=12010210&nettype=WIFI&fontScale=100&pass_ticket=vLut4ZkChbmG8gCGtj56okW9ZGpMrke6rFbjEPZoMwuoZ7SuHpxzhBREYpBABjG%2F
    *
    *
    * @param milliBit      毫秒数占的bits:   从系统上线那天起到当前的毫秒数: 比如把时间设置在20170101
    * @param businessBit   业务线
    * @param dataCenterBit 数据中心
    * @param hostBit       主机编号
    * @param serialBit     毫秒内序列号
    */
  class SnowFlake(milliBit: Int, businessBit: Int, dataCenterBit: Int, hostBit: Int, serialBit: Int) {
    require(milliBit + businessBit + dataCenterBit + hostBit + serialBit < 64, "Invalid arguments")
    private[this] val startms = ???

    def nextId: Long = ???
  }

  object SnowFlake {
    def apply(mbit: Int, bbit: Int, dbit: Int, hbit: Int, sbit: Int) = new SnowFlake(mbit, bbit, dbit, hbit, sbit)

    /**
      * 假设系统需要运行10年:   20*365*24*3600*1000 = log(2, 10*365*24*3600*1000) =~ 39
      * 假设系统需要运行50年:   20*365*24*3600*1000 = log(2, 20*365*24*3600*1000) =~ 42
      *
      * @return
      */
    def apply() = new SnowFlake(39, 4, 2, 7, 7)
  }


}
