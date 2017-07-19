package com.yimei.jfc.core

import shapeless._
import shapeless.ops.hlist
import syntax.singleton._

/**
  * Created by hary on 2017/5/27.
  */
object dtomap {

  trait Migration[A, B] {
    def apply(a: A): B
  }

  implicit class migrationOps[A](a: A) {
    def migrateTo[B](implicit migration: Migration[A, B]): B = migration(a)
  }

//  trait GenField[T] {
//    def apply(): T
//  }
//
//  implicit def genHNil[HNil]: GenField[HNil] = new GenField[HNil] {
//    def apply(): HNil = HNil
//  }
//
//  implicit def genHList[H, T <: HList]
//  (
//    implicit val tgen: GenField[T],
//    hgen: GenField[H]
//  ): GenField[H::T] = new GenField[H :: T] {
//    def apply(): H :: T = {
//      hgen() :: tgen()
//    }
//  }


//  implicit def genericMigration[A, ARepr <: HList, B, BRepr <: HList, Common <: HList, Added <: HList, Unaligned <: HList]
//  (implicit
//   aGen: LabelledGeneric.Aux[A, ARepr],
//   bGen: LabelledGeneric.Aux[B, BRepr],
//   inter: hlist.Intersection.Aux[ARepr, BRepr, Common], //  A - B;    apply(A): Common
//   diff: hlist.Diff.Aux[BRepr, Common, Added], // 拿到增加的部分字段, 增加的部分字段如何获取值得问题 ????
//   prepend: hlist.Prepend.Aux[Added, Common, Unaligned],
//   align: hlist.Align[Unaligned, BRepr]
//  ): Migration[A, B] = {
//    def apply(a: A): B = {
//      inter(aGen.to(a))
//    }
//  }
}
