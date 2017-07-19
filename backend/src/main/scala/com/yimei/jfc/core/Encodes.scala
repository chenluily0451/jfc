package com.yimei.jfc.core

import java.security.{MessageDigest, SecureRandom}

import org.apache.commons.codec.binary.Hex

/**
  * Created by hary on 2017/5/12.
  */
object Encodes {


  def encodeHex(input: Array[Byte]): String = Hex.encodeHexString(input)

  def decodeHex(input: String): Array[Byte] = Hex.decodeHex(input.toCharArray)


}

object Digests {

  val random: SecureRandom = new SecureRandom();

  val SHA1 = "SHA-1"
  val MD5 = "MD5"


  /**
    * 对输入字符串传进行sha1散列
    *
    * @param input
    * @param salt
    */
  def sha1(input: Array[Byte], salt: Array[Byte]): Array[Byte] = {
    digest(input, SHA1, salt, 1)
  }

  def sha1(input: Array[Byte], salt: Array[Byte], iterations: Int): Array[Byte] = {
    digest(input, SHA1, salt, iterations)
  }


  /**
    * 对字符串进行散列, 支持md5与sha1算法.
    */
  private def digest(input: Array[Byte], algorithm: String, salt: Array[Byte], iterations: Int): Array[Byte] ={
    val digest = MessageDigest.getInstance(algorithm)
    var result: Array[Byte] = digest.digest(input)
    for (_ <- 1 to iterations) {
      digest.reset()
      result = digest.digest(result)
    }
    result
  }

  /**
    * 生成随机的Byte[]作为salt
    *
    * @param numBytes
    * @return
    */
  def generateSalt(numBytes: Int) = {
    val bytes = new Array[Byte](numBytes)
    random.nextBytes(bytes)
    bytes
  }

}

