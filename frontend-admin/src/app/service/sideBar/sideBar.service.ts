/**
 * Created by daisy on 2017/6/1.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { getUserIdentity } from '../stroage';




const sideBarItemPlatform  = [
    {
        'name' : '账户安全',
        'status'     : true,
        'icoFa'     : 'ico_1',
        'routerLink': '/accountHome'
        // 'subMenu' : [
        //     {
        //         'name': '账户管理',
        //         'routerLink': '/accountHome'
        //     },
        //     {
        //         'name': '修改手机',
        //         'routerLink': '/accountPhone'
        //     },
        //     {
        //         'name': '修改密码',
        //         'routerLink': '/accountPassword'
        //     }
        // ]
    },

    {
        'name' : '企业信息管理',
        'status'     : true,
        'icoFa'     : 'ico_2',
        'routerLink': '/company'
        // 'subMenu' : [{
        //     'name': '企业信息审核',
        //     'routerLink': '/company'
        // }]
    },
    // {
    //     'name' : '企业用户管理',
    //     'status'     : true,
    //     'icoFa'     : 'fa-users',
    //     'routerLink': '/companyUsers'
    //     // 'subMenu' : [{
    //     //     'name': '企业用户管理',
    //     //     'routerLink': '/companyUsers'
    //     // }]
    // },
    {
        'name' : '平台用户管理',
        'status'     : true,
        'icoFa'     : 'ico_3',
        'routerLink': '/platformUsers'
        // 'subMenu' : [{
        //     'name': '平台用户管理',
        //     'routerLink': '/platformUsers'
        // }]

    },
    {
        'name' : '业务管理',
        'status'     : true,
        'icoFa'     : 'ico_4',
        'routerLink': '/business'
        // 'subMenu' : [{
        //     'name': '业务管理',
        //     'routerLink': '/business'
        // }]
    },
    {
        'name' : '融资管理',
        'status'     : true,
        'icoFa'     : 'ico_5',
        'routerLink': '/financing'
        // 'subMenu' : [{
        //     'name': '融资管理',
        //     'routerLink': '/financing'
        // }]
    },
    {
        'name' : '还款管理',
        'status'     : true,
        'icoFa'     : 'ico_6',
        'routerLink': '/repayment'
        // 'subMenu' : [
        //     {
        //         'name': '还款管理',
        //         'routerLink': '/repayment'
        //     }
        // ]
    }
];



const sideBarItemUpstream  = [
    {
        'name' : '业务管理',
        'status'     : true,
        'icoFa'     : 'ico_4',
        'routerLink': '/business',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '业务管理',
        //         'routerLink': '/business',
        //         'hidden'    : true
        //     } ,
        //     {
        //         'name': '业务申请',
        //         'routerLink': '/businessAdd',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '企业信息',
        'status'     : true,
        'icoFa'     : 'ico_2',
        'routerLink': '/company',
        'hidden'    : false
        // 'subMenu' : [
        //     {
        //         'name': '企业信息认证',
        //         'routerLink': '/company',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '更换管理员',
        //         'routerLink': '/companyAdmin',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '员工管理',
        'status'     : true,
        'icoFa'     : 'ico_3',
        'routerLink': '/staff',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '员工管理',
        //         'routerLink': '/staff',
        //         'hidden'    : true
        //     },
        //     {
        //         'name': '创建新员工',
        //         'routerLink': '/staffCreate',
        //         'hidden'    : true
        //     }
        // ]

    },
    {
        'name' : '账户管理',
        'status'     : true,
        'icoFa'     : 'ico_1',
        'routerLink': '/accountHome',
        'hidden'    : false
        // 'subMenu' : [
        //     {
        //         'name': '账户管理',
        //         'routerLink': '/accountHome',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '修改手机',
        //         'routerLink': '/accountPhone',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '修改密码',
        //         'routerLink': '/accountPassword',
        //         'hidden'    : false
        //     }
        // ]

    }

];



const sideBarItemBridge = [
    {
        'name' : '账户管理',
        'status'     : true,
        'icoFa'     : 'ico_1',
        'routerLink': '/accountHome',
        'hidden'    : false
        // 'subMenu' : [
        //     {
        //         'name': '账户管理',
        //         'routerLink': '/accountHome',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '修改手机',
        //         'routerLink': '/accountPhone',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '修改密码',
        //         'routerLink': '/accountPassword',
        //         'hidden'    : false
        //     }
        // ]

    },
    {
        'name' : '企业信息管理',
        'status'     : true,
        'icoFa'     : 'ico_2',
        'routerLink': '/company',
        'hidden'    : false
        // 'subMenu' : [
        //     {
        //         'name': '企业信息认证',
        //         'routerLink': '/company',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '更换管理员',
        //         'routerLink': '/companyAdmin',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '员工管理',
        'status'     : true,
        'icoFa'     : 'ico_3',
        'routerLink': '/staff',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '员工管理',
        //         'routerLink': '/staff',
        //         'hidden'    : true
        //     },
        //     {
        //         'name': '创建新员工',
        //         'routerLink': '/staffCreate',
        //         'hidden'    : true
        //     }
        // ]

    },
    {
        'name' : '上游业务管理',
        'status'     : true,
        'icoFa'     : 'ico_4',
        'routerLink': '/business',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '上游业务管理',
        //         'routerLink': '/business',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '融资管理',
        'status'     : true,
        'icoFa'     : 'ico_5',
        'routerLink': '/financing',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '融资管理',
        //         'routerLink': '/financing',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '还款管理',
        'status'     : true,
        'icoFa'     : 'ico_6',
        'routerLink': '/repayment',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '还款管理',
        //         'routerLink': '/repayment',
        //         'hidden'    : true
        //     }
        // ]
    }
];



const sideBarItemCapital = [
    {
        'name' : '账户管理',
        'status'     : true,
        'icoFa'     : 'ico_1',
        'routerLink': '/accountHome',
        'hidden'    : false
        // 'subMenu' : [
        //     {
        //         'name': '账户管理',
        //         'routerLink': '/accountHome',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '修改手机',
        //         'routerLink': '/accountPhone',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '修改密码',
        //         'routerLink': '/accountPassword',
        //         'hidden'    : false
        //     }
        // ]

    },
    {
        'name' : '企业信息管理',
        'status'     : true,
        'icoFa'     : 'ico_2',
        'routerLink': '/company',
        'hidden'    : false
        // 'subMenu' : [
        //     {
        //         'name': '企业信息认证',
        //         'routerLink': '/company',
        //         'hidden'    : false
        //     },
        //     {
        //         'name': '更换管理员',
        //         'routerLink': '/companyAdmin',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '员工管理',
        'status'     : true,
        'icoFa'     : 'ico_3',
        'routerLink': '/staff',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '员工管理',
        //         'routerLink': '/staff',
        //         'hidden'    : true
        //     },
        //     {
        //         'name': '创建新员工',
        //         'routerLink': '/staffCreate',
        //         'hidden'    : true
        //     }
        // ]

    },
    {
        'name' : '业务管理',
        'status'     : true,
        'icoFa'     : 'ico_4',
        'routerLink': '/business',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '业务管理',
        //         'routerLink': '/business',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '融资管理',
        'status'     : true,
        'icoFa'     : 'ico_5',
        'routerLink': '/financing',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '融资管理',
        //         'routerLink': '/financing',
        //         'hidden'    : true
        //     }
        // ]
    },
    {
        'name' : '还款管理',
        'status'     : true,
        'icoFa'     : 'ico_6',
        'routerLink': '/repayment',
        'hidden'    : true
        // 'subMenu' : [
        //     {
        //         'name': '还款管理',
        //         'routerLink': '/repayment',
        //         'hidden'    : true
        //     }
        // ]
    }

];





@Injectable()
export class SideBarService {
    private behaviorSubject : any = new BehaviorSubject('');


    sendCompanyStatusMessage(companyStatus: string): Observable<any> {
        return this.behaviorSubject.next(companyStatus);
    }


    getCompanyStatusMessage(): Observable<any> {
        return this.behaviorSubject.asObservable();
    }

    clearMessage() {
        this.behaviorSubject.next(null)
    }


    getSideBarList() {
        if (getUserIdentity === 'platform') {
            return sideBarItemPlatform
        }else if (getUserIdentity === 'upstream') {
            return sideBarItemUpstream
        }else if (getUserIdentity === 'bridge') {
            return sideBarItemBridge
        }else if (getUserIdentity === 'capital') {
            return sideBarItemCapital
        }
    }
}




