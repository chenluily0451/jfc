/**
 * Created by jin on 5/13/17.
 */


function getApiPath(userType?: string) {

    return {
        aliOssPolicy : '/api/asset/policy',

        // 字典路径
        dictionarySexType : '/api/dict/sexType',
        dictionaryTrafficMode : '/api/dict/trafficMode',
        dictionarySystemType : '/api/dict/systemType',
        dictionaryCompanyType : '/api/dict/companyType',
        dictionaryCompanyInfoStatus : '/api/dict/companyStatus',
        dictionaryPayMode : '/api/dict/payMode',

        dictionaryCompaniesBySystemName : '/api/dict/loadCompanies',
        dictionaryAllDSCompanies : '/api/dict/getAllDSCompanies',

        // 用户登陆注册
        getCaptchaImage: '/api/' + userType + '/captcha/get',
        verifyCaptcha: '/api/' + userType + '/captcha/check/',
        mobileVerify: '/api/' + userType + '/register/checkPhoneExists/',
        loginNameVerify: '/api/' + userType + '/register/checkLoginNameExists/',
        smsCode: '/api/' + userType + '/register/sms',
        register: '/api/' + userType + '/register/register',
        login: '/api/' + userType + '/login/jwt',


        // 用户账户安全
        getOldPhoneSmsCode: '/api/' + userType + '/security/sendOldPhoneSms',
        validateOldPhoneSms: '/api/' + userType + '/security/validateOldPhoneSms',
        getNewPhoneSmsCode: '/api/' + userType + '/security/sendNewPhoneSms',
        updatePhone: '/api/' + userType + '/security/updatePhone',
        sendPasswordSms: '/api/' + userType + '/security/sendPasswordSms',
        validateOldPwd: '/api/' + userType + '/security/validateOldPwd',
        changePassword: '/api/' + userType + '/security/changePassword',


        // 企业修改管理员
        sendOldAdminPhoneSms: '/api/' + userType + '/identify/sendOldAdminPhoneSms',
        getAllEmployeesWithOutAdmin: '/api/' + userType + '/employee/all',
        changeAdmin: '/api/' + userType + '/identify/changeAdmin',

        // 企业员工管理
        getEmployees: '/api/' + userType + '/employee/query',
        getEmployeesInfo: '/api/' + userType + '/employee/detail',
        createEmployee: '/api/' + userType + '/employee/save',
        editEmployees: '/api/' + userType + '/employee/edit/',
        resetEmployeePwd: '/api/' + userType + '/employee/resetEmployeePwd/',
        disabledAccount: '/api/' + userType + '/employee/disabledAccount/',
        enabledAccount: '/api/' + userType + '/employee/enabledAccount/',

        userInfo : '/api/identify/getPersonalInfo',


        // 企业信息审核
        getCompanyInfo : '/api/' + userType + '/identify/getCompanyInfo',
        saveCompanyInfo : '/api/' + userType + '/identify/saveCompany',
        auditCompanyInfo : '/api/' + userType + '/identify/submitCompany',

        // 平台企业信息审核
        platformCompanyList : '/api/platform/company/companies',
        platformCompanyInfo : '/api/platform/company/companyBasicDetail',
        platformCompanyAudit : '/api/platform/company',
        platformCompanyInvestigation : '/api/platform/company/companySurveyDetail',

        // 平台企业信息准入审查
        platformCompanySaveLicenseSurveyDocument : '/api/platform/company/saveLicenseSurveyDocument',
        platformCompanySaveBusinessRegisterSurvey : '/api/platform/company/saveBusinessRegisterSurvey',
        platformCompanySaveShareHolderSurvey : '/api/platform/company/saveShareHolderSurvey',
        platformCompanySaveControlPerson : '/api/platform/company/saveControlPerson',
        platformCompanySaveFieldInvestigationSurvey : '/api/platform/company/saveFieldInvestigationSurvey',
        platformCompanySaveCooperationSurvey : '/api/platform/company/saveCooperationSurvey',



        // 所有方 获取业务信息
        getBusinessDetail : '/api/' + userType + '/business/detail',
        getBusinessQuery : '/api/' + userType + '/business/query',
        getBusinessAuditList : '/api/' + userType + '/business/auditList',


        // 上游业务申请
        upstreamSaveBusiness : '/api/upstream/business/save',
        upstreamSubmitBusiness : '/api/upstream/business/submit',


        // 核心企业业务审核
        bridgeAuditBusinessUpstream : '/api/bridge/business/auditUpstreamBusiness',
        bridgeSaveDownstreamBusiness : '/api/bridge/business/saveDownstreamBusiness',
        bridgeSubmitDownstreamBusiness : '/api/bridge/business/submitDownstreamBusiness',
        bridgeSaveFinancingProtocol : '/api/bridge/business/saveFinancingProtocol',
        bridgeSubmitFinancingProtocol : '/api/bridge/business/submitFinancingProtocol',

        // 平台业务审核
        platformAuditBusinessUpstream : '/api/platform/business/auditUpstreamBusiness',
        platformAuditBusinessDownstream : '/api/platform/business/auditDownstreamBusiness',
        platformAuditBusinessFinancingProtocol : '/api/platform/business/auditBridgeFinancingProtocol',

        // 资金方业务审核
        capitalAuditBusinessDownstream : '/api/capital/business/auditDownstreamBusiness',



        // 核心企业新建债权
        bridgeSubmitCreditorRight : '/api/bridge/debt/submit',


        // 所有方 获取业务的债权信息
        getCreditorRightsListByBusinessId : '/api/' + userType + '/debt/businessAllDebts',
        getCreditorRightsList : '/api/' + userType + '/debt/query',
        getCreditorRightDetail : '/api/' + userType + '/debt/detail',


        // 核心企业发起融资
        bridgeSubmitFinancing : '/api/bridge/financing/submit',

        // 所有方获取融资信息
        getFinancingList : '/api/' + userType + '/financing/query',
        getFinancingDetail : '/api/' + userType + '/financing/detail',
        getFinancingLending : '/api/' + userType + '/financing/lending',


        // 平台融资审核
        platformAuditFinancing : '/api/platform/financing/auditBridgeFinancing',

        // 资金方融资审核
        capitalAuditFinancing : '/api/capital/financing/auditBridgeFinancing',
        capitalLendingFinancing : '/api/capital/financing/lending',

        // 上游企业融资确认收款
        upstreamConfirmFinancing : '/api/upstream/financing/confirmReceiveMoney',



        // 核心企业发起还款给资金方
        bridgeSubmitRepayment : '/api/bridge/financingRepayment/submit',

        // 所有方获取还款信息
        getRepaymentList : '/api/' + userType + '/financingRepayment/query',
        getRepaymentDetail : '/api/' + userType + '/financingRepayment/detail',

        capitalConfirmFinancingRepayment : '/api/capital/financingRepayment/confirmReceiveMoney',



        // 核心企业输入下游回款信息
        bridgePostDownstreamRepayment : '/api/bridge/downstreamRepayment/submit',

        // 所有方获取下游回款信息
        getDownstreamRepaymentList : '/api/' + userType + '/downstreamRepayment/query',
        getDownstreamRepaymentDetail : '/api/' + userType + '/downstreamRepayment/detail'
    };
}



export { getApiPath } ;
