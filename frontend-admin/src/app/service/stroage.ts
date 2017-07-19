/**
 * Created by jin on 6/5/17.
 */


const getAccessToken = localStorage.getItem('accessToken') || '';
const saveAccessToken = function (newToken: string = '') {
    localStorage.setItem('accessToken', newToken) ;
}

const currentUser = {
    userIdentity : '',
    username       : '',

    companyId : '',
    createDate : '',
    disabled : false,
    loginName : '',
    phone : '',
    role : 1,
    systemId : 3,
    _id : ''

}


const getUserIdentity = localStorage.getItem('userIdentity') || '';
const saveUserIdentity = function (identity: string = '') {
    localStorage.setItem('userIdentity', identity) ;
}




const financingCreditorRightsList = [];
const repaymentsList = [];


const aliOss = {
    OSSAccessKeyId : '',
    callback       : '',
    dirName        : '',
    host : '',
    policy : '',
    signature : ''
}

export { getAccessToken, saveUserIdentity, getUserIdentity, saveAccessToken, aliOss, financingCreditorRightsList, repaymentsList, currentUser}

