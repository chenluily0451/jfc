/**
 * Created by jin on 6/7/17.
 */

import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   company.companyStatus | companyInfoStatus
 * Example:
 *   {{ company.companyStatus |  companyInfoStatus}}
 *
 */



@Pipe({name: 'substringId'})
export class PipeSubstringId implements PipeTransform {
    transform(value: string, exponent: string): string {

        let text: string = '';
        text = value.substring(12);
        return text
    }
}



@Pipe({name: 'businessStatus'})
export class PipeBusinessStatus implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '无状态';

        if (value === 1) { text = '业务信息未提交' }
        if (value === 2) { text = '业务信息已提交 等待审核'}
        if (value === 3) { text = '业务信息审核不通过, 等待修改'}
        if (value === 4) { text = '核心企业已审核 等待平台审核'}
        if (value === 5) { text = '平台已审核 等待核心企业补充下游信息'}
        if (value === 6) { text = '核心企业已补充下游信息，等待平台审核'}
        if (value === 7) { text = '核心企业补充下游信息审核不通过, 等待修改'}
        if (value === 8) { text = '平台下游信息已审核，等待资金方审核'}
        if (value === 9) { text = '资金方审核不通过，等待核心企业修改补充下游信息'}
        if (value === 10) { text = '资金方已审核，等待核心企业上传协议'}
        if (value === 11) { text = '核心企业已上传协议，等待平台审核'}
        if (value === 12) { text = '核心企业上传协议审核不通过, 等待修改'}
        if (value === 13) { text = '平台审核通过，业务进入融资阶段'}

        if (value === 14) { text = '核心企业审核不通过，业务流程结束'}
        if (value === 15) { text = '资金方审核不通过，业务流程结束'}

        return text

    }
}


@Pipe({name: 'financingStatus'})
export class PipeFinancingStatus implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '无状态';

        if (value === 1) { text = '融资申请已提交 等待平台审核' }  // (1, "平台待审核融资申请")
        if (value === 2) { text = '融资申请审核不通过, 等待核心企业修改融资信息'}  // (2, "平台打回融资申请")
        if (value === 3) { text = '融资申请已审核 等待资金方审核'}  // (3, "资金方待审核融资申请")
        if (value === 4) { text = '资金方审核不通过 等待核心企业修改融资信息'}  // (4, "资金方打回融资申请")
        if (value === 5) { text = '融资申请资金方已审核 等待资金方放款'}  // (5, "资金方通过融资申请")

        if (value === 6) { text = '资金方已放款 等待上游企业确认收款'}  // (6, "资金方已放款")
        if (value === 7) { text = '上游企业已收到款,融资审核完成. '}  // (7, "上游已确认收到款")


        if (value === 100) { text = '上游企业已收到款,融资审核完成. '}  // (7, "上游已确认收到款")

        return text

    }
}



@Pipe({name: 'repaymentStatus'})
export class PipeRepaymentStatus implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '无状态';

        if (value === 900) { text = '核心企业已收到下游回款 等待还款给资金方' }  // (21, "核心企业已收到下游回款")
        if (value === 8) { text = '核心企业已放款 等待资金方确认收到回款'}  // (8, "核心企业已回款到资金方")
        if (value === 9) { text = '资金方已收到回款 流程结束'}  // (9, "资金方收到回款")

        return text

    }
}



@Pipe({name: 'auditStatus'})
export class PipeAuditStatus implements PipeTransform {
    transform(value: number, exponent: string): string {

        let text: string = '审核状态未知';

        if (value === 0) { text = '审核不通过，结束' }
        if (value === 1) { text = '审核不通过，打回'}
        if (value === 10) { text = '审核通过'}

        return text
    }
}

