/**
 * Created by jin on 6/12/17.
 */


const provinceList = [
    {
        'provinceCode': 110000,
        'province': '北京市',
        'cities': [
            {
                'cityCode': 110100,
                'city': '北京市',
                'superCode': 110000,
                'counties': [
                    {
                        'countyCode': 110101,
                        'county': '东城区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110102,
                        'county': '西城区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110103,
                        'county': '崇文区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110104,
                        'county': '宣武区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110105,
                        'county': '朝阳区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110106,
                        'county': '丰台区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110107,
                        'county': '石景山区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110108,
                        'county': '海淀区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110109,
                        'county': '门头沟区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110111,
                        'county': '房山区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110112,
                        'county': '通州区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110113,
                        'county': '顺义区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110114,
                        'county': '昌平区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110115,
                        'county': '大兴区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110116,
                        'county': '怀柔区',
                        'superCode': 110100
                    },
                    {
                        'countyCode': 110117,
                        'county': '平谷区',
                        'superCode': 110100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 120000,
        'province': '天津市',
        'cities': [
            {
                'cityCode': 120100,
                'city': '天津市',
                'superCode': 120000,
                'counties': [
                    {
                        'countyCode': 120101,
                        'county': '和平区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120102,
                        'county': '河东区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120103,
                        'county': '河西区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120104,
                        'county': '南开区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120105,
                        'county': '河北区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120106,
                        'county': '红桥区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120107,
                        'county': '塘沽区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120108,
                        'county': '汉沽区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120109,
                        'county': '大港区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120110,
                        'county': '东丽区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120111,
                        'county': '西青区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120112,
                        'county': '津南区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120113,
                        'county': '北辰区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120114,
                        'county': '武清区',
                        'superCode': 120100
                    },
                    {
                        'countyCode': 120115,
                        'county': '宝坻区',
                        'superCode': 120100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 130000,
        'province': '河北省',
        'cities': [
            {
                'cityCode': 130100,
                'city': '石家庄市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130101,
                        'county': '市辖区',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130102,
                        'county': '长安区',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130103,
                        'county': '桥东区',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130104,
                        'county': '桥西区',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130105,
                        'county': '新华区',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130107,
                        'county': '井陉矿区',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130108,
                        'county': '裕华区',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130121,
                        'county': '井陉县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130123,
                        'county': '正定县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130124,
                        'county': '栾城县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130125,
                        'county': '行唐县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130126,
                        'county': '灵寿县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130127,
                        'county': '高邑县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130128,
                        'county': '深泽县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130129,
                        'county': '赞皇县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130130,
                        'county': '无极县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130131,
                        'county': '平山县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130132,
                        'county': '元氏县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130133,
                        'county': '赵　县',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130181,
                        'county': '辛集市',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130182,
                        'county': '藁城市',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130183,
                        'county': '晋州市',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130184,
                        'county': '新乐市',
                        'superCode': 130100
                    },
                    {
                        'countyCode': 130185,
                        'county': '鹿泉市',
                        'superCode': 130100
                    }
                ]
            },
            {
                'cityCode': 130200,
                'city': '唐山市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130201,
                        'county': '市辖区',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130202,
                        'county': '路南区',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130203,
                        'county': '路北区',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130204,
                        'county': '古冶区',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130205,
                        'county': '开平区',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130207,
                        'county': '丰南区',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130208,
                        'county': '丰润区',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130223,
                        'county': '滦　县',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130224,
                        'county': '滦南县',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130225,
                        'county': '乐亭县',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130227,
                        'county': '迁西县',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130229,
                        'county': '玉田县',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130230,
                        'county': '唐海县',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130281,
                        'county': '遵化市',
                        'superCode': 130200
                    },
                    {
                        'countyCode': 130283,
                        'county': '迁安市',
                        'superCode': 130200
                    }
                ]
            },
            {
                'cityCode': 130300,
                'city': '秦皇岛市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130301,
                        'county': '市辖区',
                        'superCode': 130300
                    },
                    {
                        'countyCode': 130302,
                        'county': '海港区',
                        'superCode': 130300
                    },
                    {
                        'countyCode': 130303,
                        'county': '山海关区',
                        'superCode': 130300
                    },
                    {
                        'countyCode': 130304,
                        'county': '北戴河区',
                        'superCode': 130300
                    },
                    {
                        'countyCode': 130321,
                        'county': '青龙满族自治县',
                        'superCode': 130300
                    },
                    {
                        'countyCode': 130322,
                        'county': '昌黎县',
                        'superCode': 130300
                    },
                    {
                        'countyCode': 130323,
                        'county': '抚宁县',
                        'superCode': 130300
                    },
                    {
                        'countyCode': 130324,
                        'county': '卢龙县',
                        'superCode': 130300
                    }
                ]
            },
            {
                'cityCode': 130400,
                'city': '邯郸市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130401,
                        'county': '市辖区',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130402,
                        'county': '邯山区',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130403,
                        'county': '丛台区',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130404,
                        'county': '复兴区',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130406,
                        'county': '峰峰矿区',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130421,
                        'county': '邯郸县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130423,
                        'county': '临漳县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130424,
                        'county': '成安县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130425,
                        'county': '大名县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130426,
                        'county': '涉　县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130427,
                        'county': '磁　县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130428,
                        'county': '肥乡县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130429,
                        'county': '永年县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130430,
                        'county': '邱　县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130431,
                        'county': '鸡泽县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130432,
                        'county': '广平县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130433,
                        'county': '馆陶县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130434,
                        'county': '魏　县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130435,
                        'county': '曲周县',
                        'superCode': 130400
                    },
                    {
                        'countyCode': 130481,
                        'county': '武安市',
                        'superCode': 130400
                    }
                ]
            },
            {
                'cityCode': 130500,
                'city': '邢台市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130501,
                        'county': '市辖区',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130502,
                        'county': '桥东区',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130503,
                        'county': '桥西区',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130521,
                        'county': '邢台县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130522,
                        'county': '临城县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130523,
                        'county': '内丘县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130524,
                        'county': '柏乡县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130525,
                        'county': '隆尧县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130526,
                        'county': '任　县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130527,
                        'county': '南和县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130528,
                        'county': '宁晋县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130529,
                        'county': '巨鹿县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130530,
                        'county': '新河县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130531,
                        'county': '广宗县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130532,
                        'county': '平乡县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130533,
                        'county': '威　县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130534,
                        'county': '清河县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130535,
                        'county': '临西县',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130581,
                        'county': '南宫市',
                        'superCode': 130500
                    },
                    {
                        'countyCode': 130582,
                        'county': '沙河市',
                        'superCode': 130500
                    }
                ]
            },
            {
                'cityCode': 130600,
                'city': '保定市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130601,
                        'county': '市辖区',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130602,
                        'county': '新市区',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130603,
                        'county': '北市区',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130604,
                        'county': '南市区',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130621,
                        'county': '满城县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130622,
                        'county': '清苑县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130623,
                        'county': '涞水县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130624,
                        'county': '阜平县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130625,
                        'county': '徐水县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130626,
                        'county': '定兴县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130627,
                        'county': '唐　县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130628,
                        'county': '高阳县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130629,
                        'county': '容城县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130630,
                        'county': '涞源县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130631,
                        'county': '望都县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130632,
                        'county': '安新县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130633,
                        'county': '易　县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130634,
                        'county': '曲阳县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130635,
                        'county': '蠡　县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130636,
                        'county': '顺平县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130637,
                        'county': '博野县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130638,
                        'county': '雄　县',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130681,
                        'county': '涿州市',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130682,
                        'county': '定州市',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130683,
                        'county': '安国市',
                        'superCode': 130600
                    },
                    {
                        'countyCode': 130684,
                        'county': '高碑店市',
                        'superCode': 130600
                    }
                ]
            },
            {
                'cityCode': 130700,
                'city': '张家口市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130701,
                        'county': '市辖区',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130702,
                        'county': '桥东区',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130703,
                        'county': '桥西区',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130705,
                        'county': '宣化区',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130706,
                        'county': '下花园区',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130721,
                        'county': '宣化县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130722,
                        'county': '张北县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130723,
                        'county': '康保县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130724,
                        'county': '沽源县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130725,
                        'county': '尚义县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130726,
                        'county': '蔚　县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130727,
                        'county': '阳原县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130728,
                        'county': '怀安县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130729,
                        'county': '万全县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130730,
                        'county': '怀来县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130731,
                        'county': '涿鹿县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130732,
                        'county': '赤城县',
                        'superCode': 130700
                    },
                    {
                        'countyCode': 130733,
                        'county': '崇礼县',
                        'superCode': 130700
                    }
                ]
            },
            {
                'cityCode': 130800,
                'city': '承德市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130801,
                        'county': '市辖区',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130802,
                        'county': '双桥区',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130803,
                        'county': '双滦区',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130804,
                        'county': '鹰手营子矿区',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130821,
                        'county': '承德县',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130822,
                        'county': '兴隆县',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130823,
                        'county': '平泉县',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130824,
                        'county': '滦平县',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130825,
                        'county': '隆化县',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130826,
                        'county': '丰宁满族自治县',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130827,
                        'county': '宽城满族自治县',
                        'superCode': 130800
                    },
                    {
                        'countyCode': 130828,
                        'county': '围场满族蒙古族自治县',
                        'superCode': 130800
                    }
                ]
            },
            {
                'cityCode': 130900,
                'city': '沧州市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 130901,
                        'county': '市辖区',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130902,
                        'county': '新华区',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130903,
                        'county': '运河区',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130921,
                        'county': '沧　县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130922,
                        'county': '青　县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130923,
                        'county': '东光县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130924,
                        'county': '海兴县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130925,
                        'county': '盐山县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130926,
                        'county': '肃宁县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130927,
                        'county': '南皮县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130928,
                        'county': '吴桥县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130929,
                        'county': '献　县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130930,
                        'county': '孟村回族自治县',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130981,
                        'county': '泊头市',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130982,
                        'county': '任丘市',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130983,
                        'county': '黄骅市',
                        'superCode': 130900
                    },
                    {
                        'countyCode': 130984,
                        'county': '河间市',
                        'superCode': 130900
                    }
                ]
            },
            {
                'cityCode': 131000,
                'city': '廊坊市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 131001,
                        'county': '市辖区',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131002,
                        'county': '安次区',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131003,
                        'county': '广阳区',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131022,
                        'county': '固安县',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131023,
                        'county': '永清县',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131024,
                        'county': '香河县',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131025,
                        'county': '大城县',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131026,
                        'county': '文安县',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131028,
                        'county': '大厂回族自治县',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131081,
                        'county': '霸州市',
                        'superCode': 131000
                    },
                    {
                        'countyCode': 131082,
                        'county': '三河市',
                        'superCode': 131000
                    }
                ]
            },
            {
                'cityCode': 131100,
                'city': '衡水市',
                'superCode': 130000,
                'counties': [
                    {
                        'countyCode': 131101,
                        'county': '市辖区',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131102,
                        'county': '桃城区',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131121,
                        'county': '枣强县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131122,
                        'county': '武邑县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131123,
                        'county': '武强县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131124,
                        'county': '饶阳县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131125,
                        'county': '安平县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131126,
                        'county': '故城县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131127,
                        'county': '景　县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131128,
                        'county': '阜城县',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131181,
                        'county': '冀州市',
                        'superCode': 131100
                    },
                    {
                        'countyCode': 131182,
                        'county': '深州市',
                        'superCode': 131100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 140000,
        'province': '山西省',
        'cities': [
            {
                'cityCode': 140100,
                'city': '太原市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140101,
                        'county': '市辖区',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140105,
                        'county': '小店区',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140106,
                        'county': '迎泽区',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140107,
                        'county': '杏花岭区',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140108,
                        'county': '尖草坪区',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140109,
                        'county': '万柏林区',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140110,
                        'county': '晋源区',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140121,
                        'county': '清徐县',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140122,
                        'county': '阳曲县',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140123,
                        'county': '娄烦县',
                        'superCode': 140100
                    },
                    {
                        'countyCode': 140181,
                        'county': '古交市',
                        'superCode': 140100
                    }
                ]
            },
            {
                'cityCode': 140200,
                'city': '大同市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140201,
                        'county': '市辖区',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140202,
                        'county': '城　区',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140203,
                        'county': '矿　区',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140211,
                        'county': '南郊区',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140212,
                        'county': '新荣区',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140221,
                        'county': '阳高县',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140222,
                        'county': '天镇县',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140223,
                        'county': '广灵县',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140224,
                        'county': '灵丘县',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140225,
                        'county': '浑源县',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140226,
                        'county': '左云县',
                        'superCode': 140200
                    },
                    {
                        'countyCode': 140227,
                        'county': '大同县',
                        'superCode': 140200
                    }
                ]
            },
            {
                'cityCode': 140300,
                'city': '阳泉市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140301,
                        'county': '市辖区',
                        'superCode': 140300
                    },
                    {
                        'countyCode': 140302,
                        'county': '城　区',
                        'superCode': 140300
                    },
                    {
                        'countyCode': 140303,
                        'county': '矿　区',
                        'superCode': 140300
                    },
                    {
                        'countyCode': 140311,
                        'county': '郊　区',
                        'superCode': 140300
                    },
                    {
                        'countyCode': 140321,
                        'county': '平定县',
                        'superCode': 140300
                    },
                    {
                        'countyCode': 140322,
                        'county': '盂　县',
                        'superCode': 140300
                    }
                ]
            },
            {
                'cityCode': 140400,
                'city': '长治市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140401,
                        'county': '市辖区',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140402,
                        'county': '城　区',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140411,
                        'county': '郊　区',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140421,
                        'county': '长治县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140423,
                        'county': '襄垣县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140424,
                        'county': '屯留县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140425,
                        'county': '平顺县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140426,
                        'county': '黎城县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140427,
                        'county': '壶关县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140428,
                        'county': '长子县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140429,
                        'county': '武乡县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140430,
                        'county': '沁　县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140431,
                        'county': '沁源县',
                        'superCode': 140400
                    },
                    {
                        'countyCode': 140481,
                        'county': '潞城市',
                        'superCode': 140400
                    }
                ]
            },
            {
                'cityCode': 140500,
                'city': '晋城市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140501,
                        'county': '市辖区',
                        'superCode': 140500
                    },
                    {
                        'countyCode': 140502,
                        'county': '城　区',
                        'superCode': 140500
                    },
                    {
                        'countyCode': 140521,
                        'county': '沁水县',
                        'superCode': 140500
                    },
                    {
                        'countyCode': 140522,
                        'county': '阳城县',
                        'superCode': 140500
                    },
                    {
                        'countyCode': 140524,
                        'county': '陵川县',
                        'superCode': 140500
                    },
                    {
                        'countyCode': 140525,
                        'county': '泽州县',
                        'superCode': 140500
                    },
                    {
                        'countyCode': 140581,
                        'county': '高平市',
                        'superCode': 140500
                    }
                ]
            },
            {
                'cityCode': 140600,
                'city': '朔州市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140601,
                        'county': '市辖区',
                        'superCode': 140600
                    },
                    {
                        'countyCode': 140602,
                        'county': '朔城区',
                        'superCode': 140600
                    },
                    {
                        'countyCode': 140603,
                        'county': '平鲁区',
                        'superCode': 140600
                    },
                    {
                        'countyCode': 140621,
                        'county': '山阴县',
                        'superCode': 140600
                    },
                    {
                        'countyCode': 140622,
                        'county': '应　县',
                        'superCode': 140600
                    },
                    {
                        'countyCode': 140623,
                        'county': '右玉县',
                        'superCode': 140600
                    },
                    {
                        'countyCode': 140624,
                        'county': '怀仁县',
                        'superCode': 140600
                    }
                ]
            },
            {
                'cityCode': 140700,
                'city': '晋中市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140701,
                        'county': '市辖区',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140702,
                        'county': '榆次区',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140721,
                        'county': '榆社县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140722,
                        'county': '左权县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140723,
                        'county': '和顺县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140724,
                        'county': '昔阳县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140725,
                        'county': '寿阳县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140726,
                        'county': '太谷县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140727,
                        'county': '祁　县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140728,
                        'county': '平遥县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140729,
                        'county': '灵石县',
                        'superCode': 140700
                    },
                    {
                        'countyCode': 140781,
                        'county': '介休市',
                        'superCode': 140700
                    }
                ]
            },
            {
                'cityCode': 140800,
                'city': '运城市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140801,
                        'county': '市辖区',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140802,
                        'county': '盐湖区',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140821,
                        'county': '临猗县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140822,
                        'county': '万荣县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140823,
                        'county': '闻喜县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140824,
                        'county': '稷山县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140825,
                        'county': '新绛县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140826,
                        'county': '绛　县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140827,
                        'county': '垣曲县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140828,
                        'county': '夏　县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140829,
                        'county': '平陆县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140830,
                        'county': '芮城县',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140881,
                        'county': '永济市',
                        'superCode': 140800
                    },
                    {
                        'countyCode': 140882,
                        'county': '河津市',
                        'superCode': 140800
                    }
                ]
            },
            {
                'cityCode': 140900,
                'city': '忻州市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 140901,
                        'county': '市辖区',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140902,
                        'county': '忻府区',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140921,
                        'county': '定襄县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140922,
                        'county': '五台县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140923,
                        'county': '代　县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140924,
                        'county': '繁峙县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140925,
                        'county': '宁武县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140926,
                        'county': '静乐县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140927,
                        'county': '神池县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140928,
                        'county': '五寨县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140929,
                        'county': '岢岚县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140930,
                        'county': '河曲县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140931,
                        'county': '保德县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140932,
                        'county': '偏关县',
                        'superCode': 140900
                    },
                    {
                        'countyCode': 140981,
                        'county': '原平市',
                        'superCode': 140900
                    }
                ]
            },
            {
                'cityCode': 141000,
                'city': '临汾市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 141001,
                        'county': '市辖区',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141002,
                        'county': '尧都区',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141021,
                        'county': '曲沃县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141022,
                        'county': '翼城县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141023,
                        'county': '襄汾县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141024,
                        'county': '洪洞县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141025,
                        'county': '古　县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141026,
                        'county': '安泽县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141027,
                        'county': '浮山县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141028,
                        'county': '吉　县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141029,
                        'county': '乡宁县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141030,
                        'county': '大宁县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141031,
                        'county': '隰　县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141032,
                        'county': '永和县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141033,
                        'county': '蒲　县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141034,
                        'county': '汾西县',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141081,
                        'county': '侯马市',
                        'superCode': 141000
                    },
                    {
                        'countyCode': 141082,
                        'county': '霍州市',
                        'superCode': 141000
                    }
                ]
            },
            {
                'cityCode': 141100,
                'city': '吕梁市',
                'superCode': 140000,
                'counties': [
                    {
                        'countyCode': 141101,
                        'county': '市辖区',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141102,
                        'county': '离石区',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141121,
                        'county': '文水县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141122,
                        'county': '交城县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141123,
                        'county': '兴　县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141124,
                        'county': '临　县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141125,
                        'county': '柳林县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141126,
                        'county': '石楼县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141127,
                        'county': '岚　县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141128,
                        'county': '方山县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141129,
                        'county': '中阳县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141130,
                        'county': '交口县',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141181,
                        'county': '孝义市',
                        'superCode': 141100
                    },
                    {
                        'countyCode': 141182,
                        'county': '汾阳市',
                        'superCode': 141100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 150000,
        'province': '内蒙古自治区',
        'cities': [
            {
                'cityCode': 150100,
                'city': '呼和浩特市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150101,
                        'county': '市辖区',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150102,
                        'county': '新城区',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150103,
                        'county': '回民区',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150104,
                        'county': '玉泉区',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150105,
                        'county': '赛罕区',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150121,
                        'county': '土默特左旗',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150122,
                        'county': '托克托县',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150123,
                        'county': '和林格尔县',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150124,
                        'county': '清水河县',
                        'superCode': 150100
                    },
                    {
                        'countyCode': 150125,
                        'county': '武川县',
                        'superCode': 150100
                    }
                ]
            },
            {
                'cityCode': 150200,
                'city': '包头市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150201,
                        'county': '市辖区',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150202,
                        'county': '东河区',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150203,
                        'county': '昆都仑区',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150204,
                        'county': '青山区',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150205,
                        'county': '石拐区',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150206,
                        'county': '白云矿区',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150207,
                        'county': '九原区',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150221,
                        'county': '土默特右旗',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150222,
                        'county': '固阳县',
                        'superCode': 150200
                    },
                    {
                        'countyCode': 150223,
                        'county': '达尔罕茂明安联合旗',
                        'superCode': 150200
                    }
                ]
            },
            {
                'cityCode': 150300,
                'city': '乌海市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150301,
                        'county': '市辖区',
                        'superCode': 150300
                    },
                    {
                        'countyCode': 150302,
                        'county': '海勃湾区',
                        'superCode': 150300
                    },
                    {
                        'countyCode': 150303,
                        'county': '海南区',
                        'superCode': 150300
                    },
                    {
                        'countyCode': 150304,
                        'county': '乌达区',
                        'superCode': 150300
                    }
                ]
            },
            {
                'cityCode': 150400,
                'city': '赤峰市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150401,
                        'county': '市辖区',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150402,
                        'county': '红山区',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150403,
                        'county': '元宝山区',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150404,
                        'county': '松山区',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150421,
                        'county': '阿鲁科尔沁旗',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150422,
                        'county': '巴林左旗',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150423,
                        'county': '巴林右旗',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150424,
                        'county': '林西县',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150425,
                        'county': '克什克腾旗',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150426,
                        'county': '翁牛特旗',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150428,
                        'county': '喀喇沁旗',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150429,
                        'county': '宁城县',
                        'superCode': 150400
                    },
                    {
                        'countyCode': 150430,
                        'county': '敖汉旗',
                        'superCode': 150400
                    }
                ]
            },
            {
                'cityCode': 150500,
                'city': '通辽市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150501,
                        'county': '市辖区',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150502,
                        'county': '科尔沁区',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150521,
                        'county': '科尔沁左翼中旗',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150522,
                        'county': '科尔沁左翼后旗',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150523,
                        'county': '开鲁县',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150524,
                        'county': '库伦旗',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150525,
                        'county': '奈曼旗',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150526,
                        'county': '扎鲁特旗',
                        'superCode': 150500
                    },
                    {
                        'countyCode': 150581,
                        'county': '霍林郭勒市',
                        'superCode': 150500
                    }
                ]
            },
            {
                'cityCode': 150600,
                'city': '鄂尔多斯市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150602,
                        'county': '东胜区',
                        'superCode': 150600
                    },
                    {
                        'countyCode': 150621,
                        'county': '达拉特旗',
                        'superCode': 150600
                    },
                    {
                        'countyCode': 150622,
                        'county': '准格尔旗',
                        'superCode': 150600
                    },
                    {
                        'countyCode': 150623,
                        'county': '鄂托克前旗',
                        'superCode': 150600
                    },
                    {
                        'countyCode': 150624,
                        'county': '鄂托克旗',
                        'superCode': 150600
                    },
                    {
                        'countyCode': 150625,
                        'county': '杭锦旗',
                        'superCode': 150600
                    },
                    {
                        'countyCode': 150626,
                        'county': '乌审旗',
                        'superCode': 150600
                    },
                    {
                        'countyCode': 150627,
                        'county': '伊金霍洛旗',
                        'superCode': 150600
                    }
                ]
            },
            {
                'cityCode': 150700,
                'city': '呼伦贝尔市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150701,
                        'county': '市辖区',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150702,
                        'county': '海拉尔区',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150721,
                        'county': '阿荣旗',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150722,
                        'county': '莫力达瓦达斡尔族自治旗',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150723,
                        'county': '鄂伦春自治旗',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150724,
                        'county': '鄂温克族自治旗',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150725,
                        'county': '陈巴尔虎旗',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150726,
                        'county': '新巴尔虎左旗',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150727,
                        'county': '新巴尔虎右旗',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150781,
                        'county': '满洲里市',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150782,
                        'county': '牙克石市',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150783,
                        'county': '扎兰屯市',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150784,
                        'county': '额尔古纳市',
                        'superCode': 150700
                    },
                    {
                        'countyCode': 150785,
                        'county': '根河市',
                        'superCode': 150700
                    }
                ]
            },
            {
                'cityCode': 150800,
                'city': '巴彦淖尔市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150801,
                        'county': '市辖区',
                        'superCode': 150800
                    },
                    {
                        'countyCode': 150802,
                        'county': '临河区',
                        'superCode': 150800
                    },
                    {
                        'countyCode': 150821,
                        'county': '五原县',
                        'superCode': 150800
                    },
                    {
                        'countyCode': 150822,
                        'county': '磴口县',
                        'superCode': 150800
                    },
                    {
                        'countyCode': 150823,
                        'county': '乌拉特前旗',
                        'superCode': 150800
                    },
                    {
                        'countyCode': 150824,
                        'county': '乌拉特中旗',
                        'superCode': 150800
                    },
                    {
                        'countyCode': 150825,
                        'county': '乌拉特后旗',
                        'superCode': 150800
                    },
                    {
                        'countyCode': 150826,
                        'county': '杭锦后旗',
                        'superCode': 150800
                    }
                ]
            },
            {
                'cityCode': 150900,
                'city': '乌兰察布市',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 150901,
                        'county': '市辖区',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150902,
                        'county': '集宁区',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150921,
                        'county': '卓资县',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150922,
                        'county': '化德县',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150923,
                        'county': '商都县',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150924,
                        'county': '兴和县',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150925,
                        'county': '凉城县',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150926,
                        'county': '察哈尔右翼前旗',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150927,
                        'county': '察哈尔右翼中旗',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150928,
                        'county': '察哈尔右翼后旗',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150929,
                        'county': '四子王旗',
                        'superCode': 150900
                    },
                    {
                        'countyCode': 150981,
                        'county': '丰镇市',
                        'superCode': 150900
                    }
                ]
            },
            {
                'cityCode': 152200,
                'city': '兴安盟',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 152201,
                        'county': '乌兰浩特市',
                        'superCode': 152200
                    },
                    {
                        'countyCode': 152202,
                        'county': '阿尔山市',
                        'superCode': 152200
                    },
                    {
                        'countyCode': 152221,
                        'county': '科尔沁右翼前旗',
                        'superCode': 152200
                    },
                    {
                        'countyCode': 152222,
                        'county': '科尔沁右翼中旗',
                        'superCode': 152200
                    },
                    {
                        'countyCode': 152223,
                        'county': '扎赉特旗',
                        'superCode': 152200
                    },
                    {
                        'countyCode': 152224,
                        'county': '突泉县',
                        'superCode': 152200
                    }
                ]
            },
            {
                'cityCode': 152500,
                'city': '锡林郭勒盟',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 152501,
                        'county': '二连浩特市',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152502,
                        'county': '锡林浩特市',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152522,
                        'county': '阿巴嘎旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152523,
                        'county': '苏尼特左旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152524,
                        'county': '苏尼特右旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152525,
                        'county': '东乌珠穆沁旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152526,
                        'county': '西乌珠穆沁旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152527,
                        'county': '太仆寺旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152528,
                        'county': '镶黄旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152529,
                        'county': '正镶白旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152530,
                        'county': '正蓝旗',
                        'superCode': 152500
                    },
                    {
                        'countyCode': 152531,
                        'county': '多伦县',
                        'superCode': 152500
                    }
                ]
            },
            {
                'cityCode': 152900,
                'city': '阿拉善盟',
                'superCode': 150000,
                'counties': [
                    {
                        'countyCode': 152921,
                        'county': '阿拉善左旗',
                        'superCode': 152900
                    },
                    {
                        'countyCode': 152922,
                        'county': '阿拉善右旗',
                        'superCode': 152900
                    },
                    {
                        'countyCode': 152923,
                        'county': '额济纳旗',
                        'superCode': 152900
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 210000,
        'province': '辽宁省',
        'cities': [
            {
                'cityCode': 210100,
                'city': '沈阳市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210101,
                        'county': '市辖区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210102,
                        'county': '和平区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210103,
                        'county': '沈河区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210104,
                        'county': '大东区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210105,
                        'county': '皇姑区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210106,
                        'county': '铁西区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210111,
                        'county': '苏家屯区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210112,
                        'county': '东陵区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210113,
                        'county': '新城子区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210114,
                        'county': '于洪区',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210122,
                        'county': '辽中县',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210123,
                        'county': '康平县',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210124,
                        'county': '法库县',
                        'superCode': 210100
                    },
                    {
                        'countyCode': 210181,
                        'county': '新民市',
                        'superCode': 210100
                    }
                ]
            },
            {
                'cityCode': 210200,
                'city': '大连市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210201,
                        'county': '市辖区',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210202,
                        'county': '中山区',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210203,
                        'county': '西岗区',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210204,
                        'county': '沙河口区',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210211,
                        'county': '甘井子区',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210212,
                        'county': '旅顺口区',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210213,
                        'county': '金州区',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210224,
                        'county': '长海县',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210281,
                        'county': '瓦房店市',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210282,
                        'county': '普兰店市',
                        'superCode': 210200
                    },
                    {
                        'countyCode': 210283,
                        'county': '庄河市',
                        'superCode': 210200
                    }
                ]
            },
            {
                'cityCode': 210300,
                'city': '鞍山市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210301,
                        'county': '市辖区',
                        'superCode': 210300
                    },
                    {
                        'countyCode': 210302,
                        'county': '铁东区',
                        'superCode': 210300
                    },
                    {
                        'countyCode': 210303,
                        'county': '铁西区',
                        'superCode': 210300
                    },
                    {
                        'countyCode': 210304,
                        'county': '立山区',
                        'superCode': 210300
                    },
                    {
                        'countyCode': 210311,
                        'county': '千山区',
                        'superCode': 210300
                    },
                    {
                        'countyCode': 210321,
                        'county': '台安县',
                        'superCode': 210300
                    },
                    {
                        'countyCode': 210323,
                        'county': '岫岩满族自治县',
                        'superCode': 210300
                    },
                    {
                        'countyCode': 210381,
                        'county': '海城市',
                        'superCode': 210300
                    }
                ]
            },
            {
                'cityCode': 210400,
                'city': '抚顺市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210401,
                        'county': '市辖区',
                        'superCode': 210400
                    },
                    {
                        'countyCode': 210402,
                        'county': '新抚区',
                        'superCode': 210400
                    },
                    {
                        'countyCode': 210403,
                        'county': '东洲区',
                        'superCode': 210400
                    },
                    {
                        'countyCode': 210404,
                        'county': '望花区',
                        'superCode': 210400
                    },
                    {
                        'countyCode': 210411,
                        'county': '顺城区',
                        'superCode': 210400
                    },
                    {
                        'countyCode': 210421,
                        'county': '抚顺县',
                        'superCode': 210400
                    },
                    {
                        'countyCode': 210422,
                        'county': '新宾满族自治县',
                        'superCode': 210400
                    },
                    {
                        'countyCode': 210423,
                        'county': '清原满族自治县',
                        'superCode': 210400
                    }
                ]
            },
            {
                'cityCode': 210500,
                'city': '本溪市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210501,
                        'county': '市辖区',
                        'superCode': 210500
                    },
                    {
                        'countyCode': 210502,
                        'county': '平山区',
                        'superCode': 210500
                    },
                    {
                        'countyCode': 210503,
                        'county': '溪湖区',
                        'superCode': 210500
                    },
                    {
                        'countyCode': 210504,
                        'county': '明山区',
                        'superCode': 210500
                    },
                    {
                        'countyCode': 210505,
                        'county': '南芬区',
                        'superCode': 210500
                    },
                    {
                        'countyCode': 210521,
                        'county': '本溪满族自治县',
                        'superCode': 210500
                    },
                    {
                        'countyCode': 210522,
                        'county': '桓仁满族自治县',
                        'superCode': 210500
                    }
                ]
            },
            {
                'cityCode': 210600,
                'city': '丹东市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210601,
                        'county': '市辖区',
                        'superCode': 210600
                    },
                    {
                        'countyCode': 210602,
                        'county': '元宝区',
                        'superCode': 210600
                    },
                    {
                        'countyCode': 210603,
                        'county': '振兴区',
                        'superCode': 210600
                    },
                    {
                        'countyCode': 210604,
                        'county': '振安区',
                        'superCode': 210600
                    },
                    {
                        'countyCode': 210624,
                        'county': '宽甸满族自治县',
                        'superCode': 210600
                    },
                    {
                        'countyCode': 210681,
                        'county': '东港市',
                        'superCode': 210600
                    },
                    {
                        'countyCode': 210682,
                        'county': '凤城市',
                        'superCode': 210600
                    }
                ]
            },
            {
                'cityCode': 210700,
                'city': '锦州市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210701,
                        'county': '市辖区',
                        'superCode': 210700
                    },
                    {
                        'countyCode': 210702,
                        'county': '古塔区',
                        'superCode': 210700
                    },
                    {
                        'countyCode': 210703,
                        'county': '凌河区',
                        'superCode': 210700
                    },
                    {
                        'countyCode': 210711,
                        'county': '太和区',
                        'superCode': 210700
                    },
                    {
                        'countyCode': 210726,
                        'county': '黑山县',
                        'superCode': 210700
                    },
                    {
                        'countyCode': 210727,
                        'county': '义　县',
                        'superCode': 210700
                    },
                    {
                        'countyCode': 210781,
                        'county': '凌海市',
                        'superCode': 210700
                    },
                    {
                        'countyCode': 210782,
                        'county': '北宁市',
                        'superCode': 210700
                    }
                ]
            },
            {
                'cityCode': 210800,
                'city': '营口市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210801,
                        'county': '市辖区',
                        'superCode': 210800
                    },
                    {
                        'countyCode': 210802,
                        'county': '站前区',
                        'superCode': 210800
                    },
                    {
                        'countyCode': 210803,
                        'county': '西市区',
                        'superCode': 210800
                    },
                    {
                        'countyCode': 210804,
                        'county': '鲅鱼圈区',
                        'superCode': 210800
                    },
                    {
                        'countyCode': 210811,
                        'county': '老边区',
                        'superCode': 210800
                    },
                    {
                        'countyCode': 210881,
                        'county': '盖州市',
                        'superCode': 210800
                    },
                    {
                        'countyCode': 210882,
                        'county': '大石桥市',
                        'superCode': 210800
                    }
                ]
            },
            {
                'cityCode': 210900,
                'city': '阜新市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 210901,
                        'county': '市辖区',
                        'superCode': 210900
                    },
                    {
                        'countyCode': 210902,
                        'county': '海州区',
                        'superCode': 210900
                    },
                    {
                        'countyCode': 210903,
                        'county': '新邱区',
                        'superCode': 210900
                    },
                    {
                        'countyCode': 210904,
                        'county': '太平区',
                        'superCode': 210900
                    },
                    {
                        'countyCode': 210905,
                        'county': '清河门区',
                        'superCode': 210900
                    },
                    {
                        'countyCode': 210911,
                        'county': '细河区',
                        'superCode': 210900
                    },
                    {
                        'countyCode': 210921,
                        'county': '阜新蒙古族自治县',
                        'superCode': 210900
                    },
                    {
                        'countyCode': 210922,
                        'county': '彰武县',
                        'superCode': 210900
                    }
                ]
            },
            {
                'cityCode': 211000,
                'city': '辽阳市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 211001,
                        'county': '市辖区',
                        'superCode': 211000
                    },
                    {
                        'countyCode': 211002,
                        'county': '白塔区',
                        'superCode': 211000
                    },
                    {
                        'countyCode': 211003,
                        'county': '文圣区',
                        'superCode': 211000
                    },
                    {
                        'countyCode': 211004,
                        'county': '宏伟区',
                        'superCode': 211000
                    },
                    {
                        'countyCode': 211005,
                        'county': '弓长岭区',
                        'superCode': 211000
                    },
                    {
                        'countyCode': 211011,
                        'county': '太子河区',
                        'superCode': 211000
                    },
                    {
                        'countyCode': 211021,
                        'county': '辽阳县',
                        'superCode': 211000
                    },
                    {
                        'countyCode': 211081,
                        'county': '灯塔市',
                        'superCode': 211000
                    }
                ]
            },
            {
                'cityCode': 211100,
                'city': '盘锦市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 211101,
                        'county': '市辖区',
                        'superCode': 211100
                    },
                    {
                        'countyCode': 211102,
                        'county': '双台子区',
                        'superCode': 211100
                    },
                    {
                        'countyCode': 211103,
                        'county': '兴隆台区',
                        'superCode': 211100
                    },
                    {
                        'countyCode': 211121,
                        'county': '大洼县',
                        'superCode': 211100
                    },
                    {
                        'countyCode': 211122,
                        'county': '盘山县',
                        'superCode': 211100
                    }
                ]
            },
            {
                'cityCode': 211200,
                'city': '铁岭市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 211201,
                        'county': '市辖区',
                        'superCode': 211200
                    },
                    {
                        'countyCode': 211202,
                        'county': '银州区',
                        'superCode': 211200
                    },
                    {
                        'countyCode': 211204,
                        'county': '清河区',
                        'superCode': 211200
                    },
                    {
                        'countyCode': 211221,
                        'county': '铁岭县',
                        'superCode': 211200
                    },
                    {
                        'countyCode': 211223,
                        'county': '西丰县',
                        'superCode': 211200
                    },
                    {
                        'countyCode': 211224,
                        'county': '昌图县',
                        'superCode': 211200
                    },
                    {
                        'countyCode': 211281,
                        'county': '调兵山市',
                        'superCode': 211200
                    },
                    {
                        'countyCode': 211282,
                        'county': '开原市',
                        'superCode': 211200
                    }
                ]
            },
            {
                'cityCode': 211300,
                'city': '朝阳市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 211301,
                        'county': '市辖区',
                        'superCode': 211300
                    },
                    {
                        'countyCode': 211302,
                        'county': '双塔区',
                        'superCode': 211300
                    },
                    {
                        'countyCode': 211303,
                        'county': '龙城区',
                        'superCode': 211300
                    },
                    {
                        'countyCode': 211321,
                        'county': '朝阳县',
                        'superCode': 211300
                    },
                    {
                        'countyCode': 211322,
                        'county': '建平县',
                        'superCode': 211300
                    },
                    {
                        'countyCode': 211324,
                        'county': '喀喇沁左翼蒙古族自治县',
                        'superCode': 211300
                    },
                    {
                        'countyCode': 211381,
                        'county': '北票市',
                        'superCode': 211300
                    },
                    {
                        'countyCode': 211382,
                        'county': '凌源市',
                        'superCode': 211300
                    }
                ]
            },
            {
                'cityCode': 211400,
                'city': '葫芦岛市',
                'superCode': 210000,
                'counties': [
                    {
                        'countyCode': 211401,
                        'county': '市辖区',
                        'superCode': 211400
                    },
                    {
                        'countyCode': 211402,
                        'county': '连山区',
                        'superCode': 211400
                    },
                    {
                        'countyCode': 211403,
                        'county': '龙港区',
                        'superCode': 211400
                    },
                    {
                        'countyCode': 211404,
                        'county': '南票区',
                        'superCode': 211400
                    },
                    {
                        'countyCode': 211421,
                        'county': '绥中县',
                        'superCode': 211400
                    },
                    {
                        'countyCode': 211422,
                        'county': '建昌县',
                        'superCode': 211400
                    },
                    {
                        'countyCode': 211481,
                        'county': '兴城市',
                        'superCode': 211400
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 220000,
        'province': '吉林省',
        'cities': [
            {
                'cityCode': 220100,
                'city': '长春市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220101,
                        'county': '市辖区',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220102,
                        'county': '南关区',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220103,
                        'county': '宽城区',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220104,
                        'county': '朝阳区',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220105,
                        'county': '二道区',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220106,
                        'county': '绿园区',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220112,
                        'county': '双阳区',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220122,
                        'county': '农安县',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220181,
                        'county': '九台市',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220182,
                        'county': '榆树市',
                        'superCode': 220100
                    },
                    {
                        'countyCode': 220183,
                        'county': '德惠市',
                        'superCode': 220100
                    }
                ]
            },
            {
                'cityCode': 220200,
                'city': '吉林市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220201,
                        'county': '市辖区',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220202,
                        'county': '昌邑区',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220203,
                        'county': '龙潭区',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220204,
                        'county': '船营区',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220211,
                        'county': '丰满区',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220221,
                        'county': '永吉县',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220281,
                        'county': '蛟河市',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220282,
                        'county': '桦甸市',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220283,
                        'county': '舒兰市',
                        'superCode': 220200
                    },
                    {
                        'countyCode': 220284,
                        'county': '磐石市',
                        'superCode': 220200
                    }
                ]
            },
            {
                'cityCode': 220300,
                'city': '四平市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220301,
                        'county': '市辖区',
                        'superCode': 220300
                    },
                    {
                        'countyCode': 220302,
                        'county': '铁西区',
                        'superCode': 220300
                    },
                    {
                        'countyCode': 220303,
                        'county': '铁东区',
                        'superCode': 220300
                    },
                    {
                        'countyCode': 220322,
                        'county': '梨树县',
                        'superCode': 220300
                    },
                    {
                        'countyCode': 220323,
                        'county': '伊通满族自治县',
                        'superCode': 220300
                    },
                    {
                        'countyCode': 220381,
                        'county': '公主岭市',
                        'superCode': 220300
                    },
                    {
                        'countyCode': 220382,
                        'county': '双辽市',
                        'superCode': 220300
                    }
                ]
            },
            {
                'cityCode': 220400,
                'city': '辽源市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220401,
                        'county': '市辖区',
                        'superCode': 220400
                    },
                    {
                        'countyCode': 220402,
                        'county': '龙山区',
                        'superCode': 220400
                    },
                    {
                        'countyCode': 220403,
                        'county': '西安区',
                        'superCode': 220400
                    },
                    {
                        'countyCode': 220421,
                        'county': '东丰县',
                        'superCode': 220400
                    },
                    {
                        'countyCode': 220422,
                        'county': '东辽县',
                        'superCode': 220400
                    }
                ]
            },
            {
                'cityCode': 220500,
                'city': '通化市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220501,
                        'county': '市辖区',
                        'superCode': 220500
                    },
                    {
                        'countyCode': 220502,
                        'county': '东昌区',
                        'superCode': 220500
                    },
                    {
                        'countyCode': 220503,
                        'county': '二道江区',
                        'superCode': 220500
                    },
                    {
                        'countyCode': 220521,
                        'county': '通化县',
                        'superCode': 220500
                    },
                    {
                        'countyCode': 220523,
                        'county': '辉南县',
                        'superCode': 220500
                    },
                    {
                        'countyCode': 220524,
                        'county': '柳河县',
                        'superCode': 220500
                    },
                    {
                        'countyCode': 220581,
                        'county': '梅河口市',
                        'superCode': 220500
                    },
                    {
                        'countyCode': 220582,
                        'county': '集安市',
                        'superCode': 220500
                    }
                ]
            },
            {
                'cityCode': 220600,
                'city': '白山市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220601,
                        'county': '市辖区',
                        'superCode': 220600
                    },
                    {
                        'countyCode': 220602,
                        'county': '八道江区',
                        'superCode': 220600
                    },
                    {
                        'countyCode': 220621,
                        'county': '抚松县',
                        'superCode': 220600
                    },
                    {
                        'countyCode': 220622,
                        'county': '靖宇县',
                        'superCode': 220600
                    },
                    {
                        'countyCode': 220623,
                        'county': '长白朝鲜族自治县',
                        'superCode': 220600
                    },
                    {
                        'countyCode': 220625,
                        'county': '江源县',
                        'superCode': 220600
                    },
                    {
                        'countyCode': 220681,
                        'county': '临江市',
                        'superCode': 220600
                    }
                ]
            },
            {
                'cityCode': 220700,
                'city': '松原市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220701,
                        'county': '市辖区',
                        'superCode': 220700
                    },
                    {
                        'countyCode': 220702,
                        'county': '宁江区',
                        'superCode': 220700
                    },
                    {
                        'countyCode': 220721,
                        'county': '前郭尔罗斯蒙古族自治县',
                        'superCode': 220700
                    },
                    {
                        'countyCode': 220722,
                        'county': '长岭县',
                        'superCode': 220700
                    },
                    {
                        'countyCode': 220723,
                        'county': '乾安县',
                        'superCode': 220700
                    },
                    {
                        'countyCode': 220724,
                        'county': '扶余县',
                        'superCode': 220700
                    }
                ]
            },
            {
                'cityCode': 220800,
                'city': '白城市',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 220801,
                        'county': '市辖区',
                        'superCode': 220800
                    },
                    {
                        'countyCode': 220802,
                        'county': '洮北区',
                        'superCode': 220800
                    },
                    {
                        'countyCode': 220821,
                        'county': '镇赉县',
                        'superCode': 220800
                    },
                    {
                        'countyCode': 220822,
                        'county': '通榆县',
                        'superCode': 220800
                    },
                    {
                        'countyCode': 220881,
                        'county': '洮南市',
                        'superCode': 220800
                    },
                    {
                        'countyCode': 220882,
                        'county': '大安市',
                        'superCode': 220800
                    }
                ]
            },
            {
                'cityCode': 222400,
                'city': '延边朝鲜族自治州',
                'superCode': 220000,
                'counties': [
                    {
                        'countyCode': 222401,
                        'county': '延吉市',
                        'superCode': 222400
                    },
                    {
                        'countyCode': 222402,
                        'county': '图们市',
                        'superCode': 222400
                    },
                    {
                        'countyCode': 222403,
                        'county': '敦化市',
                        'superCode': 222400
                    },
                    {
                        'countyCode': 222404,
                        'county': '珲春市',
                        'superCode': 222400
                    },
                    {
                        'countyCode': 222405,
                        'county': '龙井市',
                        'superCode': 222400
                    },
                    {
                        'countyCode': 222406,
                        'county': '和龙市',
                        'superCode': 222400
                    },
                    {
                        'countyCode': 222424,
                        'county': '汪清县',
                        'superCode': 222400
                    },
                    {
                        'countyCode': 222426,
                        'county': '安图县',
                        'superCode': 222400
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 230000,
        'province': '黑龙江省',
        'cities': [
            {
                'cityCode': 230100,
                'city': '哈尔滨市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230101,
                        'county': '市辖区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230102,
                        'county': '道里区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230103,
                        'county': '南岗区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230104,
                        'county': '道外区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230106,
                        'county': '香坊区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230107,
                        'county': '动力区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230108,
                        'county': '平房区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230109,
                        'county': '松北区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230111,
                        'county': '呼兰区',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230123,
                        'county': '依兰县',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230124,
                        'county': '方正县',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230125,
                        'county': '宾　县',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230126,
                        'county': '巴彦县',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230127,
                        'county': '木兰县',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230128,
                        'county': '通河县',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230129,
                        'county': '延寿县',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230181,
                        'county': '阿城市',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230182,
                        'county': '双城市',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230183,
                        'county': '尚志市',
                        'superCode': 230100
                    },
                    {
                        'countyCode': 230184,
                        'county': '五常市',
                        'superCode': 230100
                    }
                ]
            },
            {
                'cityCode': 230200,
                'city': '齐齐哈尔市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230201,
                        'county': '市辖区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230202,
                        'county': '龙沙区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230203,
                        'county': '建华区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230204,
                        'county': '铁锋区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230205,
                        'county': '昂昂溪区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230206,
                        'county': '富拉尔基区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230207,
                        'county': '碾子山区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230208,
                        'county': '梅里斯达斡尔族区',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230221,
                        'county': '龙江县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230223,
                        'county': '依安县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230224,
                        'county': '泰来县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230225,
                        'county': '甘南县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230227,
                        'county': '富裕县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230229,
                        'county': '克山县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230230,
                        'county': '克东县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230231,
                        'county': '拜泉县',
                        'superCode': 230200
                    },
                    {
                        'countyCode': 230281,
                        'county': '讷河市',
                        'superCode': 230200
                    }
                ]
            },
            {
                'cityCode': 230300,
                'city': '鸡西市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230301,
                        'county': '市辖区',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230302,
                        'county': '鸡冠区',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230303,
                        'county': '恒山区',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230304,
                        'county': '滴道区',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230305,
                        'county': '梨树区',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230306,
                        'county': '城子河区',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230307,
                        'county': '麻山区',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230321,
                        'county': '鸡东县',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230381,
                        'county': '虎林市',
                        'superCode': 230300
                    },
                    {
                        'countyCode': 230382,
                        'county': '密山市',
                        'superCode': 230300
                    }
                ]
            },
            {
                'cityCode': 230400,
                'city': '鹤岗市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230401,
                        'county': '市辖区',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230402,
                        'county': '向阳区',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230403,
                        'county': '工农区',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230404,
                        'county': '南山区',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230405,
                        'county': '兴安区',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230406,
                        'county': '东山区',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230407,
                        'county': '兴山区',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230421,
                        'county': '萝北县',
                        'superCode': 230400
                    },
                    {
                        'countyCode': 230422,
                        'county': '绥滨县',
                        'superCode': 230400
                    }
                ]
            },
            {
                'cityCode': 230500,
                'city': '双鸭山市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230501,
                        'county': '市辖区',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230502,
                        'county': '尖山区',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230503,
                        'county': '岭东区',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230505,
                        'county': '四方台区',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230506,
                        'county': '宝山区',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230521,
                        'county': '集贤县',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230522,
                        'county': '友谊县',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230523,
                        'county': '宝清县',
                        'superCode': 230500
                    },
                    {
                        'countyCode': 230524,
                        'county': '饶河县',
                        'superCode': 230500
                    }
                ]
            },
            {
                'cityCode': 230600,
                'city': '大庆市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230601,
                        'county': '市辖区',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230602,
                        'county': '萨尔图区',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230603,
                        'county': '龙凤区',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230604,
                        'county': '让胡路区',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230605,
                        'county': '红岗区',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230606,
                        'county': '大同区',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230621,
                        'county': '肇州县',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230622,
                        'county': '肇源县',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230623,
                        'county': '林甸县',
                        'superCode': 230600
                    },
                    {
                        'countyCode': 230624,
                        'county': '杜尔伯特蒙古族自治县',
                        'superCode': 230600
                    }
                ]
            },
            {
                'cityCode': 230700,
                'city': '伊春市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230701,
                        'county': '市辖区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230702,
                        'county': '伊春区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230703,
                        'county': '南岔区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230704,
                        'county': '友好区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230705,
                        'county': '西林区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230706,
                        'county': '翠峦区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230707,
                        'county': '新青区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230708,
                        'county': '美溪区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230709,
                        'county': '金山屯区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230710,
                        'county': '五营区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230711,
                        'county': '乌马河区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230712,
                        'county': '汤旺河区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230713,
                        'county': '带岭区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230714,
                        'county': '乌伊岭区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230715,
                        'county': '红星区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230716,
                        'county': '上甘岭区',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230722,
                        'county': '嘉荫县',
                        'superCode': 230700
                    },
                    {
                        'countyCode': 230781,
                        'county': '铁力市',
                        'superCode': 230700
                    }
                ]
            },
            {
                'cityCode': 230800,
                'city': '佳木斯市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230801,
                        'county': '市辖区',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230802,
                        'county': '永红区',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230803,
                        'county': '向阳区',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230804,
                        'county': '前进区',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230805,
                        'county': '东风区',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230811,
                        'county': '郊　区',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230822,
                        'county': '桦南县',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230826,
                        'county': '桦川县',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230828,
                        'county': '汤原县',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230833,
                        'county': '抚远县',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230881,
                        'county': '同江市',
                        'superCode': 230800
                    },
                    {
                        'countyCode': 230882,
                        'county': '富锦市',
                        'superCode': 230800
                    }
                ]
            },
            {
                'cityCode': 230900,
                'city': '七台河市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 230901,
                        'county': '市辖区',
                        'superCode': 230900
                    },
                    {
                        'countyCode': 230902,
                        'county': '新兴区',
                        'superCode': 230900
                    },
                    {
                        'countyCode': 230903,
                        'county': '桃山区',
                        'superCode': 230900
                    },
                    {
                        'countyCode': 230904,
                        'county': '茄子河区',
                        'superCode': 230900
                    },
                    {
                        'countyCode': 230921,
                        'county': '勃利县',
                        'superCode': 230900
                    }
                ]
            },
            {
                'cityCode': 231000,
                'city': '牡丹江市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 231001,
                        'county': '市辖区',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231002,
                        'county': '东安区',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231003,
                        'county': '阳明区',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231004,
                        'county': '爱民区',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231005,
                        'county': '西安区',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231024,
                        'county': '东宁县',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231025,
                        'county': '林口县',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231081,
                        'county': '绥芬河市',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231083,
                        'county': '海林市',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231084,
                        'county': '宁安市',
                        'superCode': 231000
                    },
                    {
                        'countyCode': 231085,
                        'county': '穆棱市',
                        'superCode': 231000
                    }
                ]
            },
            {
                'cityCode': 231100,
                'city': '黑河市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 231101,
                        'county': '市辖区',
                        'superCode': 231100
                    },
                    {
                        'countyCode': 231102,
                        'county': '爱辉区',
                        'superCode': 231100
                    },
                    {
                        'countyCode': 231121,
                        'county': '嫩江县',
                        'superCode': 231100
                    },
                    {
                        'countyCode': 231123,
                        'county': '逊克县',
                        'superCode': 231100
                    },
                    {
                        'countyCode': 231124,
                        'county': '孙吴县',
                        'superCode': 231100
                    },
                    {
                        'countyCode': 231181,
                        'county': '北安市',
                        'superCode': 231100
                    },
                    {
                        'countyCode': 231182,
                        'county': '五大连池市',
                        'superCode': 231100
                    }
                ]
            },
            {
                'cityCode': 231200,
                'city': '绥化市',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 231201,
                        'county': '市辖区',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231202,
                        'county': '北林区',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231221,
                        'county': '望奎县',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231222,
                        'county': '兰西县',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231223,
                        'county': '青冈县',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231224,
                        'county': '庆安县',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231225,
                        'county': '明水县',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231226,
                        'county': '绥棱县',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231281,
                        'county': '安达市',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231282,
                        'county': '肇东市',
                        'superCode': 231200
                    },
                    {
                        'countyCode': 231283,
                        'county': '海伦市',
                        'superCode': 231200
                    }
                ]
            },
            {
                'cityCode': 232700,
                'city': '大兴安岭地区',
                'superCode': 230000,
                'counties': [
                    {
                        'countyCode': 232721,
                        'county': '呼玛县',
                        'superCode': 232700
                    },
                    {
                        'countyCode': 232722,
                        'county': '塔河县',
                        'superCode': 232700
                    },
                    {
                        'countyCode': 232723,
                        'county': '漠河县',
                        'superCode': 232700
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 310000,
        'province': '上海市',
        'cities': [
            {
                'cityCode': 310100,
                'city': '上海市',
                'superCode': 310000,
                'counties': [
                    {
                        'countyCode': 310101,
                        'county': '黄浦区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310103,
                        'county': '卢湾区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310104,
                        'county': '徐汇区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310105,
                        'county': '长宁区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310106,
                        'county': '静安区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310107,
                        'county': '普陀区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310108,
                        'county': '闸北区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310109,
                        'county': '虹口区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310110,
                        'county': '杨浦区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310112,
                        'county': '闵行区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310113,
                        'county': '宝山区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310114,
                        'county': '嘉定区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310115,
                        'county': '浦东新区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310116,
                        'county': '金山区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310117,
                        'county': '松江区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310118,
                        'county': '青浦区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310119,
                        'county': '南汇区',
                        'superCode': 310100
                    },
                    {
                        'countyCode': 310120,
                        'county': '奉贤区',
                        'superCode': 310100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 320000,
        'province': '江苏省',
        'cities': [
            {
                'cityCode': 320100,
                'city': '南京市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320101,
                        'county': '市辖区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320102,
                        'county': '玄武区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320103,
                        'county': '白下区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320104,
                        'county': '秦淮区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320105,
                        'county': '建邺区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320106,
                        'county': '鼓楼区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320107,
                        'county': '下关区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320111,
                        'county': '浦口区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320113,
                        'county': '栖霞区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320114,
                        'county': '雨花台区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320115,
                        'county': '江宁区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320116,
                        'county': '六合区',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320124,
                        'county': '溧水县',
                        'superCode': 320100
                    },
                    {
                        'countyCode': 320125,
                        'county': '高淳县',
                        'superCode': 320100
                    }
                ]
            },
            {
                'cityCode': 320200,
                'city': '无锡市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320201,
                        'county': '市辖区',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320202,
                        'county': '崇安区',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320203,
                        'county': '南长区',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320204,
                        'county': '北塘区',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320205,
                        'county': '锡山区',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320206,
                        'county': '惠��区',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320211,
                        'county': '滨湖区',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320281,
                        'county': '江阴市',
                        'superCode': 320200
                    },
                    {
                        'countyCode': 320282,
                        'county': '宜兴市',
                        'superCode': 320200
                    }
                ]
            },
            {
                'cityCode': 320300,
                'city': '徐州市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320301,
                        'county': '市辖区',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320302,
                        'county': '鼓楼区',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320303,
                        'county': '云龙区',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320304,
                        'county': '九里区',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320305,
                        'county': '贾汪区',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320311,
                        'county': '泉山区',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320321,
                        'county': '丰　县',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320322,
                        'county': '沛　县',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320323,
                        'county': '铜山县',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320324,
                        'county': '睢宁县',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320381,
                        'county': '新沂市',
                        'superCode': 320300
                    },
                    {
                        'countyCode': 320382,
                        'county': '邳州市',
                        'superCode': 320300
                    }
                ]
            },
            {
                'cityCode': 320400,
                'city': '常州市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320401,
                        'county': '市辖区',
                        'superCode': 320400
                    },
                    {
                        'countyCode': 320402,
                        'county': '天宁区',
                        'superCode': 320400
                    },
                    {
                        'countyCode': 320404,
                        'county': '钟楼区',
                        'superCode': 320400
                    },
                    {
                        'countyCode': 320405,
                        'county': '戚墅堰区',
                        'superCode': 320400
                    },
                    {
                        'countyCode': 320411,
                        'county': '新北区',
                        'superCode': 320400
                    },
                    {
                        'countyCode': 320412,
                        'county': '武进区',
                        'superCode': 320400
                    },
                    {
                        'countyCode': 320481,
                        'county': '溧阳市',
                        'superCode': 320400
                    },
                    {
                        'countyCode': 320482,
                        'county': '金坛市',
                        'superCode': 320400
                    }
                ]
            },
            {
                'cityCode': 320500,
                'city': '苏州市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320501,
                        'county': '市辖区',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320502,
                        'county': '沧浪区',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320503,
                        'county': '平江区',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320504,
                        'county': '金阊区',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320505,
                        'county': '虎丘区',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320506,
                        'county': '吴中区',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320507,
                        'county': '相城区',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320581,
                        'county': '常熟市',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320582,
                        'county': '张家港市',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320583,
                        'county': '昆山市',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320584,
                        'county': '吴江市',
                        'superCode': 320500
                    },
                    {
                        'countyCode': 320585,
                        'county': '太仓市',
                        'superCode': 320500
                    }
                ]
            },
            {
                'cityCode': 320600,
                'city': '南通市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320601,
                        'county': '市辖区',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320602,
                        'county': '崇川区',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320611,
                        'county': '港闸区',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320621,
                        'county': '海安县',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320623,
                        'county': '如东县',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320681,
                        'county': '启东市',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320682,
                        'county': '如皋市',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320683,
                        'county': '通州市',
                        'superCode': 320600
                    },
                    {
                        'countyCode': 320684,
                        'county': '海门市',
                        'superCode': 320600
                    }
                ]
            },
            {
                'cityCode': 320700,
                'city': '连云港市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320701,
                        'county': '市辖区',
                        'superCode': 320700
                    },
                    {
                        'countyCode': 320703,
                        'county': '连云区',
                        'superCode': 320700
                    },
                    {
                        'countyCode': 320705,
                        'county': '新浦区',
                        'superCode': 320700
                    },
                    {
                        'countyCode': 320706,
                        'county': '海州区',
                        'superCode': 320700
                    },
                    {
                        'countyCode': 320721,
                        'county': '赣榆县',
                        'superCode': 320700
                    },
                    {
                        'countyCode': 320722,
                        'county': '东海县',
                        'superCode': 320700
                    },
                    {
                        'countyCode': 320723,
                        'county': '灌云县',
                        'superCode': 320700
                    },
                    {
                        'countyCode': 320724,
                        'county': '灌南县',
                        'superCode': 320700
                    }
                ]
            },
            {
                'cityCode': 320800,
                'city': '淮安市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320801,
                        'county': '市辖区',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320802,
                        'county': '清河区',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320803,
                        'county': '楚州区',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320804,
                        'county': '淮阴区',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320811,
                        'county': '清浦区',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320826,
                        'county': '涟水县',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320829,
                        'county': '洪泽县',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320830,
                        'county': '盱眙县',
                        'superCode': 320800
                    },
                    {
                        'countyCode': 320831,
                        'county': '金湖县',
                        'superCode': 320800
                    }
                ]
            },
            {
                'cityCode': 320900,
                'city': '盐城市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 320901,
                        'county': '市辖区',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320902,
                        'county': '亭湖区',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320903,
                        'county': '盐都区',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320921,
                        'county': '响水县',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320922,
                        'county': '滨海县',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320923,
                        'county': '阜宁县',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320924,
                        'county': '射阳县',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320925,
                        'county': '建湖县',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320981,
                        'county': '东台市',
                        'superCode': 320900
                    },
                    {
                        'countyCode': 320982,
                        'county': '大丰市',
                        'superCode': 320900
                    }
                ]
            },
            {
                'cityCode': 321000,
                'city': '扬州市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 321001,
                        'county': '市辖区',
                        'superCode': 321000
                    },
                    {
                        'countyCode': 321002,
                        'county': '广陵区',
                        'superCode': 321000
                    },
                    {
                        'countyCode': 321003,
                        'county': '邗江区',
                        'superCode': 321000
                    },
                    {
                        'countyCode': 321011,
                        'county': '郊　区',
                        'superCode': 321000
                    },
                    {
                        'countyCode': 321023,
                        'county': '宝应县',
                        'superCode': 321000
                    },
                    {
                        'countyCode': 321081,
                        'county': '仪征市',
                        'superCode': 321000
                    },
                    {
                        'countyCode': 321084,
                        'county': '高邮市',
                        'superCode': 321000
                    },
                    {
                        'countyCode': 321088,
                        'county': '江都市',
                        'superCode': 321000
                    }
                ]
            },
            {
                'cityCode': 321100,
                'city': '镇江市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 321101,
                        'county': '市辖区',
                        'superCode': 321100
                    },
                    {
                        'countyCode': 321102,
                        'county': '京口区',
                        'superCode': 321100
                    },
                    {
                        'countyCode': 321111,
                        'county': '润州区',
                        'superCode': 321100
                    },
                    {
                        'countyCode': 321112,
                        'county': '丹徒区',
                        'superCode': 321100
                    },
                    {
                        'countyCode': 321181,
                        'county': '丹阳市',
                        'superCode': 321100
                    },
                    {
                        'countyCode': 321182,
                        'county': '扬中市',
                        'superCode': 321100
                    },
                    {
                        'countyCode': 321183,
                        'county': '句容市',
                        'superCode': 321100
                    }
                ]
            },
            {
                'cityCode': 321200,
                'city': '泰州市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 321201,
                        'county': '市辖区',
                        'superCode': 321200
                    },
                    {
                        'countyCode': 321202,
                        'county': '海陵区',
                        'superCode': 321200
                    },
                    {
                        'countyCode': 321203,
                        'county': '高港区',
                        'superCode': 321200
                    },
                    {
                        'countyCode': 321281,
                        'county': '兴化市',
                        'superCode': 321200
                    },
                    {
                        'countyCode': 321282,
                        'county': '靖江市',
                        'superCode': 321200
                    },
                    {
                        'countyCode': 321283,
                        'county': '泰兴市',
                        'superCode': 321200
                    },
                    {
                        'countyCode': 321284,
                        'county': '姜堰市',
                        'superCode': 321200
                    }
                ]
            },
            {
                'cityCode': 321300,
                'city': '宿迁市',
                'superCode': 320000,
                'counties': [
                    {
                        'countyCode': 321301,
                        'county': '市辖区',
                        'superCode': 321300
                    },
                    {
                        'countyCode': 321302,
                        'county': '宿城区',
                        'superCode': 321300
                    },
                    {
                        'countyCode': 321311,
                        'county': '宿豫区',
                        'superCode': 321300
                    },
                    {
                        'countyCode': 321322,
                        'county': '沭阳县',
                        'superCode': 321300
                    },
                    {
                        'countyCode': 321323,
                        'county': '泗阳县',
                        'superCode': 321300
                    },
                    {
                        'countyCode': 321324,
                        'county': '泗洪县',
                        'superCode': 321300
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 330000,
        'province': '浙江省',
        'cities': [
            {
                'cityCode': 330100,
                'city': '杭州市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330101,
                        'county': '市辖区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330102,
                        'county': '上城区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330103,
                        'county': '下城区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330104,
                        'county': '江干区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330105,
                        'county': '拱墅区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330106,
                        'county': '西湖区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330108,
                        'county': '滨江区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330109,
                        'county': '萧山区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330110,
                        'county': '余杭区',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330122,
                        'county': '桐庐县',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330127,
                        'county': '淳安县',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330182,
                        'county': '建德市',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330183,
                        'county': '富阳市',
                        'superCode': 330100
                    },
                    {
                        'countyCode': 330185,
                        'county': '临安市',
                        'superCode': 330100
                    }
                ]
            },
            {
                'cityCode': 330200,
                'city': '宁波市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330201,
                        'county': '市辖区',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330203,
                        'county': '海曙区',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330204,
                        'county': '江东区',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330205,
                        'county': '江北区',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330206,
                        'county': '北仑区',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330211,
                        'county': '镇海区',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330212,
                        'county': '鄞州区',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330225,
                        'county': '象山县',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330226,
                        'county': '宁海县',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330281,
                        'county': '余姚市',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330282,
                        'county': '慈溪市',
                        'superCode': 330200
                    },
                    {
                        'countyCode': 330283,
                        'county': '奉化市',
                        'superCode': 330200
                    }
                ]
            },
            {
                'cityCode': 330300,
                'city': '温州市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330301,
                        'county': '市辖区',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330302,
                        'county': '鹿城区',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330303,
                        'county': '龙湾区',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330304,
                        'county': '瓯海区',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330322,
                        'county': '洞头县',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330324,
                        'county': '永嘉县',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330326,
                        'county': '平阳县',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330327,
                        'county': '苍南县',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330328,
                        'county': '文成县',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330329,
                        'county': '泰顺县',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330381,
                        'county': '瑞安市',
                        'superCode': 330300
                    },
                    {
                        'countyCode': 330382,
                        'county': '乐清市',
                        'superCode': 330300
                    }
                ]
            },
            {
                'cityCode': 330400,
                'city': '嘉兴市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330401,
                        'county': '市辖区',
                        'superCode': 330400
                    },
                    {
                        'countyCode': 330402,
                        'county': '秀城区',
                        'superCode': 330400
                    },
                    {
                        'countyCode': 330411,
                        'county': '秀洲区',
                        'superCode': 330400
                    },
                    {
                        'countyCode': 330421,
                        'county': '嘉善县',
                        'superCode': 330400
                    },
                    {
                        'countyCode': 330424,
                        'county': '海盐县',
                        'superCode': 330400
                    },
                    {
                        'countyCode': 330481,
                        'county': '海宁市',
                        'superCode': 330400
                    },
                    {
                        'countyCode': 330482,
                        'county': '平湖市',
                        'superCode': 330400
                    },
                    {
                        'countyCode': 330483,
                        'county': '桐乡市',
                        'superCode': 330400
                    }
                ]
            },
            {
                'cityCode': 330500,
                'city': '湖州市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330501,
                        'county': '市辖区',
                        'superCode': 330500
                    },
                    {
                        'countyCode': 330502,
                        'county': '吴兴区',
                        'superCode': 330500
                    },
                    {
                        'countyCode': 330503,
                        'county': '南浔区',
                        'superCode': 330500
                    },
                    {
                        'countyCode': 330521,
                        'county': '德清县',
                        'superCode': 330500
                    },
                    {
                        'countyCode': 330522,
                        'county': '长兴县',
                        'superCode': 330500
                    },
                    {
                        'countyCode': 330523,
                        'county': '安吉县',
                        'superCode': 330500
                    }
                ]
            },
            {
                'cityCode': 330600,
                'city': '绍兴市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330601,
                        'county': '市辖区',
                        'superCode': 330600
                    },
                    {
                        'countyCode': 330602,
                        'county': '越城区',
                        'superCode': 330600
                    },
                    {
                        'countyCode': 330621,
                        'county': '绍兴县',
                        'superCode': 330600
                    },
                    {
                        'countyCode': 330624,
                        'county': '新昌县',
                        'superCode': 330600
                    },
                    {
                        'countyCode': 330681,
                        'county': '诸暨市',
                        'superCode': 330600
                    },
                    {
                        'countyCode': 330682,
                        'county': '上虞市',
                        'superCode': 330600
                    },
                    {
                        'countyCode': 330683,
                        'county': '嵊州市',
                        'superCode': 330600
                    }
                ]
            },
            {
                'cityCode': 330700,
                'city': '金华市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330701,
                        'county': '市辖区',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330702,
                        'county': '婺城区',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330703,
                        'county': '金东区',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330723,
                        'county': '武义县',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330726,
                        'county': '浦江县',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330727,
                        'county': '磐安县',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330781,
                        'county': '兰溪市',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330782,
                        'county': '义乌市',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330783,
                        'county': '东阳市',
                        'superCode': 330700
                    },
                    {
                        'countyCode': 330784,
                        'county': '永康市',
                        'superCode': 330700
                    }
                ]
            },
            {
                'cityCode': 330800,
                'city': '衢州市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330801,
                        'county': '市辖区',
                        'superCode': 330800
                    },
                    {
                        'countyCode': 330802,
                        'county': '柯城区',
                        'superCode': 330800
                    },
                    {
                        'countyCode': 330803,
                        'county': '衢江区',
                        'superCode': 330800
                    },
                    {
                        'countyCode': 330822,
                        'county': '常山县',
                        'superCode': 330800
                    },
                    {
                        'countyCode': 330824,
                        'county': '开化县',
                        'superCode': 330800
                    },
                    {
                        'countyCode': 330825,
                        'county': '龙游县',
                        'superCode': 330800
                    },
                    {
                        'countyCode': 330881,
                        'county': '江山市',
                        'superCode': 330800
                    }
                ]
            },
            {
                'cityCode': 330900,
                'city': '舟山市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 330901,
                        'county': '市辖区',
                        'superCode': 330900
                    },
                    {
                        'countyCode': 330902,
                        'county': '定海区',
                        'superCode': 330900
                    },
                    {
                        'countyCode': 330903,
                        'county': '普陀区',
                        'superCode': 330900
                    },
                    {
                        'countyCode': 330921,
                        'county': '岱山县',
                        'superCode': 330900
                    },
                    {
                        'countyCode': 330922,
                        'county': '嵊泗县',
                        'superCode': 330900
                    }
                ]
            },
            {
                'cityCode': 331000,
                'city': '台州市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 331001,
                        'county': '市辖区',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331002,
                        'county': '椒江区',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331003,
                        'county': '黄岩区',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331004,
                        'county': '路桥区',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331021,
                        'county': '玉环县',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331022,
                        'county': '三门县',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331023,
                        'county': '天台县',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331024,
                        'county': '仙居县',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331081,
                        'county': '温岭市',
                        'superCode': 331000
                    },
                    {
                        'countyCode': 331082,
                        'county': '临海市',
                        'superCode': 331000
                    }
                ]
            },
            {
                'cityCode': 331100,
                'city': '丽水市',
                'superCode': 330000,
                'counties': [
                    {
                        'countyCode': 331101,
                        'county': '市辖区',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331102,
                        'county': '莲都区',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331121,
                        'county': '青田县',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331122,
                        'county': '缙云县',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331123,
                        'county': '遂昌县',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331124,
                        'county': '松阳县',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331125,
                        'county': '云和县',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331126,
                        'county': '庆元县',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331127,
                        'county': '景宁畲族自治县',
                        'superCode': 331100
                    },
                    {
                        'countyCode': 331181,
                        'county': '龙泉市',
                        'superCode': 331100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 340000,
        'province': '安徽省',
        'cities': [
            {
                'cityCode': 340100,
                'city': '合肥市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340101,
                        'county': '市辖区',
                        'superCode': 340100
                    },
                    {
                        'countyCode': 340102,
                        'county': '瑶海区',
                        'superCode': 340100
                    },
                    {
                        'countyCode': 340103,
                        'county': '庐阳区',
                        'superCode': 340100
                    },
                    {
                        'countyCode': 340104,
                        'county': '蜀山区',
                        'superCode': 340100
                    },
                    {
                        'countyCode': 340111,
                        'county': '包河区',
                        'superCode': 340100
                    },
                    {
                        'countyCode': 340121,
                        'county': '长丰县',
                        'superCode': 340100
                    },
                    {
                        'countyCode': 340122,
                        'county': '肥东县',
                        'superCode': 340100
                    },
                    {
                        'countyCode': 340123,
                        'county': '肥西县',
                        'superCode': 340100
                    }
                ]
            },
            {
                'cityCode': 340200,
                'city': '芜湖市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340201,
                        'county': '市辖区',
                        'superCode': 340200
                    },
                    {
                        'countyCode': 340202,
                        'county': '镜湖区',
                        'superCode': 340200
                    },
                    {
                        'countyCode': 340203,
                        'county': '马塘区',
                        'superCode': 340200
                    },
                    {
                        'countyCode': 340204,
                        'county': '新芜区',
                        'superCode': 340200
                    },
                    {
                        'countyCode': 340207,
                        'county': '鸠江区',
                        'superCode': 340200
                    },
                    {
                        'countyCode': 340221,
                        'county': '芜湖县',
                        'superCode': 340200
                    },
                    {
                        'countyCode': 340222,
                        'county': '繁昌县',
                        'superCode': 340200
                    },
                    {
                        'countyCode': 340223,
                        'county': '南陵县',
                        'superCode': 340200
                    }
                ]
            },
            {
                'cityCode': 340300,
                'city': '蚌埠市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340301,
                        'county': '市辖区',
                        'superCode': 340300
                    },
                    {
                        'countyCode': 340302,
                        'county': '龙子湖区',
                        'superCode': 340300
                    },
                    {
                        'countyCode': 340303,
                        'county': '蚌山区',
                        'superCode': 340300
                    },
                    {
                        'countyCode': 340304,
                        'county': '禹会区',
                        'superCode': 340300
                    },
                    {
                        'countyCode': 340311,
                        'county': '淮上区',
                        'superCode': 340300
                    },
                    {
                        'countyCode': 340321,
                        'county': '怀远县',
                        'superCode': 340300
                    },
                    {
                        'countyCode': 340322,
                        'county': '五河县',
                        'superCode': 340300
                    },
                    {
                        'countyCode': 340323,
                        'county': '固镇县',
                        'superCode': 340300
                    }
                ]
            },
            {
                'cityCode': 340400,
                'city': '淮南市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340401,
                        'county': '市辖区',
                        'superCode': 340400
                    },
                    {
                        'countyCode': 340402,
                        'county': '大通区',
                        'superCode': 340400
                    },
                    {
                        'countyCode': 340403,
                        'county': '田家庵区',
                        'superCode': 340400
                    },
                    {
                        'countyCode': 340404,
                        'county': '谢家集区',
                        'superCode': 340400
                    },
                    {
                        'countyCode': 340405,
                        'county': '八公山区',
                        'superCode': 340400
                    },
                    {
                        'countyCode': 340406,
                        'county': '潘集区',
                        'superCode': 340400
                    },
                    {
                        'countyCode': 340421,
                        'county': '凤台县',
                        'superCode': 340400
                    }
                ]
            },
            {
                'cityCode': 340500,
                'city': '马鞍山市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340501,
                        'county': '市辖区',
                        'superCode': 340500
                    },
                    {
                        'countyCode': 340502,
                        'county': '金家庄区',
                        'superCode': 340500
                    },
                    {
                        'countyCode': 340503,
                        'county': '花山区',
                        'superCode': 340500
                    },
                    {
                        'countyCode': 340504,
                        'county': '雨山区',
                        'superCode': 340500
                    },
                    {
                        'countyCode': 340521,
                        'county': '当涂县',
                        'superCode': 340500
                    }
                ]
            },
            {
                'cityCode': 340600,
                'city': '淮北市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340601,
                        'county': '市辖区',
                        'superCode': 340600
                    },
                    {
                        'countyCode': 340602,
                        'county': '杜集区',
                        'superCode': 340600
                    },
                    {
                        'countyCode': 340603,
                        'county': '相山区',
                        'superCode': 340600
                    },
                    {
                        'countyCode': 340604,
                        'county': '烈山区',
                        'superCode': 340600
                    },
                    {
                        'countyCode': 340621,
                        'county': '濉溪县',
                        'superCode': 340600
                    }
                ]
            },
            {
                'cityCode': 340700,
                'city': '铜陵市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340701,
                        'county': '市辖区',
                        'superCode': 340700
                    },
                    {
                        'countyCode': 340702,
                        'county': '铜官山区',
                        'superCode': 340700
                    },
                    {
                        'countyCode': 340703,
                        'county': '狮子山区',
                        'superCode': 340700
                    },
                    {
                        'countyCode': 340711,
                        'county': '郊　区',
                        'superCode': 340700
                    },
                    {
                        'countyCode': 340721,
                        'county': '铜陵县',
                        'superCode': 340700
                    }
                ]
            },
            {
                'cityCode': 340800,
                'city': '安庆市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 340801,
                        'county': '市辖区',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340802,
                        'county': '迎江区',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340803,
                        'county': '大观区',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340811,
                        'county': '郊　区',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340822,
                        'county': '怀宁县',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340823,
                        'county': '枞阳县',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340824,
                        'county': '潜山县',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340825,
                        'county': '太湖县',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340826,
                        'county': '宿松县',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340827,
                        'county': '望江县',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340828,
                        'county': '岳西县',
                        'superCode': 340800
                    },
                    {
                        'countyCode': 340881,
                        'county': '桐城市',
                        'superCode': 340800
                    }
                ]
            },
            {
                'cityCode': 341000,
                'city': '黄山市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341001,
                        'county': '市辖区',
                        'superCode': 341000
                    },
                    {
                        'countyCode': 341002,
                        'county': '屯溪区',
                        'superCode': 341000
                    },
                    {
                        'countyCode': 341003,
                        'county': '黄山区',
                        'superCode': 341000
                    },
                    {
                        'countyCode': 341004,
                        'county': '徽州区',
                        'superCode': 341000
                    },
                    {
                        'countyCode': 341021,
                        'county': '歙　县',
                        'superCode': 341000
                    },
                    {
                        'countyCode': 341022,
                        'county': '休宁县',
                        'superCode': 341000
                    },
                    {
                        'countyCode': 341023,
                        'county': '黟　县',
                        'superCode': 341000
                    },
                    {
                        'countyCode': 341024,
                        'county': '祁门县',
                        'superCode': 341000
                    }
                ]
            },
            {
                'cityCode': 341100,
                'city': '滁州市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341101,
                        'county': '市辖区',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341102,
                        'county': '琅琊区',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341103,
                        'county': '南谯区',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341122,
                        'county': '来安县',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341124,
                        'county': '全椒县',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341125,
                        'county': '定远县',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341126,
                        'county': '凤阳县',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341181,
                        'county': '天长市',
                        'superCode': 341100
                    },
                    {
                        'countyCode': 341182,
                        'county': '明光市',
                        'superCode': 341100
                    }
                ]
            },
            {
                'cityCode': 341200,
                'city': '阜阳市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341201,
                        'county': '市辖区',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341202,
                        'county': '颍州区',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341203,
                        'county': '颍东区',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341204,
                        'county': '颍泉区',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341221,
                        'county': '临泉县',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341222,
                        'county': '太和县',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341225,
                        'county': '阜南县',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341226,
                        'county': '颍上县',
                        'superCode': 341200
                    },
                    {
                        'countyCode': 341282,
                        'county': '界首市',
                        'superCode': 341200
                    }
                ]
            },
            {
                'cityCode': 341300,
                'city': '宿州市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341301,
                        'county': '市辖区',
                        'superCode': 341300
                    },
                    {
                        'countyCode': 341302,
                        'county': '墉桥区',
                        'superCode': 341300
                    },
                    {
                        'countyCode': 341321,
                        'county': '砀山县',
                        'superCode': 341300
                    },
                    {
                        'countyCode': 341322,
                        'county': '萧　县',
                        'superCode': 341300
                    },
                    {
                        'countyCode': 341323,
                        'county': '灵璧县',
                        'superCode': 341300
                    },
                    {
                        'countyCode': 341324,
                        'county': '泗　县',
                        'superCode': 341300
                    }
                ]
            },
            {
                'cityCode': 341400,
                'city': '巢湖市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341401,
                        'county': '市辖区',
                        'superCode': 341400
                    },
                    {
                        'countyCode': 341402,
                        'county': '居巢区',
                        'superCode': 341400
                    },
                    {
                        'countyCode': 341421,
                        'county': '庐江县',
                        'superCode': 341400
                    },
                    {
                        'countyCode': 341422,
                        'county': '无为县',
                        'superCode': 341400
                    },
                    {
                        'countyCode': 341423,
                        'county': '含山县',
                        'superCode': 341400
                    },
                    {
                        'countyCode': 341424,
                        'county': '和　县',
                        'superCode': 341400
                    }
                ]
            },
            {
                'cityCode': 341500,
                'city': '六安市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341501,
                        'county': '市辖区',
                        'superCode': 341500
                    },
                    {
                        'countyCode': 341502,
                        'county': '金安区',
                        'superCode': 341500
                    },
                    {
                        'countyCode': 341503,
                        'county': '裕安区',
                        'superCode': 341500
                    },
                    {
                        'countyCode': 341521,
                        'county': '寿　县',
                        'superCode': 341500
                    },
                    {
                        'countyCode': 341522,
                        'county': '霍邱县',
                        'superCode': 341500
                    },
                    {
                        'countyCode': 341523,
                        'county': '舒城县',
                        'superCode': 341500
                    },
                    {
                        'countyCode': 341524,
                        'county': '金寨县',
                        'superCode': 341500
                    },
                    {
                        'countyCode': 341525,
                        'county': '霍山县',
                        'superCode': 341500
                    }
                ]
            },
            {
                'cityCode': 341600,
                'city': '亳州市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341601,
                        'county': '市辖区',
                        'superCode': 341600
                    },
                    {
                        'countyCode': 341602,
                        'county': '谯城区',
                        'superCode': 341600
                    },
                    {
                        'countyCode': 341621,
                        'county': '涡阳县',
                        'superCode': 341600
                    },
                    {
                        'countyCode': 341622,
                        'county': '蒙城县',
                        'superCode': 341600
                    },
                    {
                        'countyCode': 341623,
                        'county': '利辛县',
                        'superCode': 341600
                    }
                ]
            },
            {
                'cityCode': 341700,
                'city': '池州市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341701,
                        'county': '市辖区',
                        'superCode': 341700
                    },
                    {
                        'countyCode': 341702,
                        'county': '贵池区',
                        'superCode': 341700
                    },
                    {
                        'countyCode': 341721,
                        'county': '东至县',
                        'superCode': 341700
                    },
                    {
                        'countyCode': 341722,
                        'county': '石台县',
                        'superCode': 341700
                    },
                    {
                        'countyCode': 341723,
                        'county': '青阳县',
                        'superCode': 341700
                    }
                ]
            },
            {
                'cityCode': 341800,
                'city': '宣城市',
                'superCode': 340000,
                'counties': [
                    {
                        'countyCode': 341801,
                        'county': '市辖区',
                        'superCode': 341800
                    },
                    {
                        'countyCode': 341802,
                        'county': '宣州区',
                        'superCode': 341800
                    },
                    {
                        'countyCode': 341821,
                        'county': '郎溪县',
                        'superCode': 341800
                    },
                    {
                        'countyCode': 341822,
                        'county': '广德县',
                        'superCode': 341800
                    },
                    {
                        'countyCode': 341823,
                        'county': '泾　县',
                        'superCode': 341800
                    },
                    {
                        'countyCode': 341824,
                        'county': '绩溪县',
                        'superCode': 341800
                    },
                    {
                        'countyCode': 341825,
                        'county': '旌德县',
                        'superCode': 341800
                    },
                    {
                        'countyCode': 341881,
                        'county': '宁国市',
                        'superCode': 341800
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 350000,
        'province': '福建省',
        'cities': [
            {
                'cityCode': 350100,
                'city': '福州市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350101,
                        'county': '市辖区',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350102,
                        'county': '鼓楼区',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350103,
                        'county': '台江区',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350104,
                        'county': '仓山区',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350105,
                        'county': '马尾区',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350111,
                        'county': '晋安区',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350121,
                        'county': '闽侯县',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350122,
                        'county': '连江县',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350123,
                        'county': '罗源县',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350124,
                        'county': '闽清县',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350125,
                        'county': '永泰县',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350128,
                        'county': '平潭县',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350181,
                        'county': '福清市',
                        'superCode': 350100
                    },
                    {
                        'countyCode': 350182,
                        'county': '长乐市',
                        'superCode': 350100
                    }
                ]
            },
            {
                'cityCode': 350200,
                'city': '厦门市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350201,
                        'county': '市辖区',
                        'superCode': 350200
                    },
                    {
                        'countyCode': 350203,
                        'county': '思明区',
                        'superCode': 350200
                    },
                    {
                        'countyCode': 350205,
                        'county': '海沧区',
                        'superCode': 350200
                    },
                    {
                        'countyCode': 350206,
                        'county': '湖里区',
                        'superCode': 350200
                    },
                    {
                        'countyCode': 350211,
                        'county': '集美区',
                        'superCode': 350200
                    },
                    {
                        'countyCode': 350212,
                        'county': '同安区',
                        'superCode': 350200
                    },
                    {
                        'countyCode': 350213,
                        'county': '翔安区',
                        'superCode': 350200
                    }
                ]
            },
            {
                'cityCode': 350300,
                'city': '莆田市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350301,
                        'county': '市辖区',
                        'superCode': 350300
                    },
                    {
                        'countyCode': 350302,
                        'county': '城厢区',
                        'superCode': 350300
                    },
                    {
                        'countyCode': 350303,
                        'county': '涵江区',
                        'superCode': 350300
                    },
                    {
                        'countyCode': 350304,
                        'county': '荔城区',
                        'superCode': 350300
                    },
                    {
                        'countyCode': 350305,
                        'county': '秀屿区',
                        'superCode': 350300
                    },
                    {
                        'countyCode': 350322,
                        'county': '仙游县',
                        'superCode': 350300
                    }
                ]
            },
            {
                'cityCode': 350400,
                'city': '三明市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350401,
                        'county': '市辖区',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350402,
                        'county': '梅列区',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350403,
                        'county': '三元区',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350421,
                        'county': '明溪县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350423,
                        'county': '清流县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350424,
                        'county': '宁化县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350425,
                        'county': '大田县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350426,
                        'county': '尤溪县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350427,
                        'county': '沙　县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350428,
                        'county': '将乐县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350429,
                        'county': '泰宁县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350430,
                        'county': '建宁县',
                        'superCode': 350400
                    },
                    {
                        'countyCode': 350481,
                        'county': '永安市',
                        'superCode': 350400
                    }
                ]
            },
            {
                'cityCode': 350500,
                'city': '泉州市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350501,
                        'county': '市辖区',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350502,
                        'county': '鲤城区',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350503,
                        'county': '丰泽区',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350504,
                        'county': '洛江区',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350505,
                        'county': '泉港区',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350521,
                        'county': '惠安县',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350524,
                        'county': '安溪县',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350525,
                        'county': '永春县',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350526,
                        'county': '德化县',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350527,
                        'county': '金门县',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350581,
                        'county': '石狮市',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350582,
                        'county': '晋江市',
                        'superCode': 350500
                    },
                    {
                        'countyCode': 350583,
                        'county': '南安市',
                        'superCode': 350500
                    }
                ]
            },
            {
                'cityCode': 350600,
                'city': '漳州市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350601,
                        'county': '市辖区',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350602,
                        'county': '芗城区',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350603,
                        'county': '龙文区',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350622,
                        'county': '云霄县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350623,
                        'county': '漳浦县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350624,
                        'county': '诏安县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350625,
                        'county': '长泰县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350626,
                        'county': '东山县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350627,
                        'county': '南靖县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350628,
                        'county': '平和县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350629,
                        'county': '华安县',
                        'superCode': 350600
                    },
                    {
                        'countyCode': 350681,
                        'county': '龙海市',
                        'superCode': 350600
                    }
                ]
            },
            {
                'cityCode': 350700,
                'city': '南平市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350701,
                        'county': '市辖区',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350702,
                        'county': '延平区',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350721,
                        'county': '顺昌县',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350722,
                        'county': '浦城县',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350723,
                        'county': '光泽县',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350724,
                        'county': '松溪县',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350725,
                        'county': '政和县',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350781,
                        'county': '邵武市',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350782,
                        'county': '武夷山市',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350783,
                        'county': '建瓯市',
                        'superCode': 350700
                    },
                    {
                        'countyCode': 350784,
                        'county': '建阳市',
                        'superCode': 350700
                    }
                ]
            },
            {
                'cityCode': 350800,
                'city': '龙岩市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350801,
                        'county': '市辖区',
                        'superCode': 350800
                    },
                    {
                        'countyCode': 350802,
                        'county': '新罗区',
                        'superCode': 350800
                    },
                    {
                        'countyCode': 350821,
                        'county': '长汀县',
                        'superCode': 350800
                    },
                    {
                        'countyCode': 350822,
                        'county': '永定县',
                        'superCode': 350800
                    },
                    {
                        'countyCode': 350823,
                        'county': '上杭县',
                        'superCode': 350800
                    },
                    {
                        'countyCode': 350824,
                        'county': '武平县',
                        'superCode': 350800
                    },
                    {
                        'countyCode': 350825,
                        'county': '连城县',
                        'superCode': 350800
                    },
                    {
                        'countyCode': 350881,
                        'county': '漳平市',
                        'superCode': 350800
                    }
                ]
            },
            {
                'cityCode': 350900,
                'city': '宁德市',
                'superCode': 350000,
                'counties': [
                    {
                        'countyCode': 350901,
                        'county': '市辖区',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350902,
                        'county': '蕉城区',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350921,
                        'county': '霞浦县',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350922,
                        'county': '古田县',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350923,
                        'county': '屏南县',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350924,
                        'county': '寿宁县',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350925,
                        'county': '周宁县',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350926,
                        'county': '柘荣县',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350981,
                        'county': '福安市',
                        'superCode': 350900
                    },
                    {
                        'countyCode': 350982,
                        'county': '福鼎市',
                        'superCode': 350900
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 360000,
        'province': '江西省',
        'cities': [
            {
                'cityCode': 360100,
                'city': '南昌市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360101,
                        'county': '市辖区',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360102,
                        'county': '东湖区',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360103,
                        'county': '西湖区',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360104,
                        'county': '青云谱区',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360105,
                        'county': '湾里区',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360111,
                        'county': '青山湖区',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360121,
                        'county': '南昌县',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360122,
                        'county': '新建县',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360123,
                        'county': '安义县',
                        'superCode': 360100
                    },
                    {
                        'countyCode': 360124,
                        'county': '进贤县',
                        'superCode': 360100
                    }
                ]
            },
            {
                'cityCode': 360200,
                'city': '景德镇市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360201,
                        'county': '市辖区',
                        'superCode': 360200
                    },
                    {
                        'countyCode': 360202,
                        'county': '昌江区',
                        'superCode': 360200
                    },
                    {
                        'countyCode': 360203,
                        'county': '珠山区',
                        'superCode': 360200
                    },
                    {
                        'countyCode': 360222,
                        'county': '浮梁县',
                        'superCode': 360200
                    },
                    {
                        'countyCode': 360281,
                        'county': '乐平市',
                        'superCode': 360200
                    }
                ]
            },
            {
                'cityCode': 360300,
                'city': '萍乡市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360301,
                        'county': '市辖区',
                        'superCode': 360300
                    },
                    {
                        'countyCode': 360302,
                        'county': '安源区',
                        'superCode': 360300
                    },
                    {
                        'countyCode': 360313,
                        'county': '湘东区',
                        'superCode': 360300
                    },
                    {
                        'countyCode': 360321,
                        'county': '莲花县',
                        'superCode': 360300
                    },
                    {
                        'countyCode': 360322,
                        'county': '上栗县',
                        'superCode': 360300
                    },
                    {
                        'countyCode': 360323,
                        'county': '芦溪县',
                        'superCode': 360300
                    }
                ]
            },
            {
                'cityCode': 360400,
                'city': '九江市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360401,
                        'county': '市辖区',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360402,
                        'county': '庐山区',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360403,
                        'county': '浔阳区',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360421,
                        'county': '九江县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360423,
                        'county': '武宁县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360424,
                        'county': '修水县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360425,
                        'county': '永修县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360426,
                        'county': '德安县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360427,
                        'county': '星子县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360428,
                        'county': '都昌县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360429,
                        'county': '湖口县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360430,
                        'county': '彭泽县',
                        'superCode': 360400
                    },
                    {
                        'countyCode': 360481,
                        'county': '瑞昌市',
                        'superCode': 360400
                    }
                ]
            },
            {
                'cityCode': 360500,
                'city': '新余市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360501,
                        'county': '市辖区',
                        'superCode': 360500
                    },
                    {
                        'countyCode': 360502,
                        'county': '渝水区',
                        'superCode': 360500
                    },
                    {
                        'countyCode': 360521,
                        'county': '分宜县',
                        'superCode': 360500
                    }
                ]
            },
            {
                'cityCode': 360600,
                'city': '鹰潭市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360601,
                        'county': '市辖区',
                        'superCode': 360600
                    },
                    {
                        'countyCode': 360602,
                        'county': '月湖区',
                        'superCode': 360600
                    },
                    {
                        'countyCode': 360622,
                        'county': '余江县',
                        'superCode': 360600
                    },
                    {
                        'countyCode': 360681,
                        'county': '贵溪市',
                        'superCode': 360600
                    }
                ]
            },
            {
                'cityCode': 360700,
                'city': '赣州市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360701,
                        'county': '市辖区',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360702,
                        'county': '章贡区',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360721,
                        'county': '赣　县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360722,
                        'county': '信丰县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360723,
                        'county': '大余县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360724,
                        'county': '上犹县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360725,
                        'county': '崇义县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360726,
                        'county': '安远县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360727,
                        'county': '龙南县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360728,
                        'county': '定南县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360729,
                        'county': '全南县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360730,
                        'county': '宁都县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360731,
                        'county': '于都县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360732,
                        'county': '兴国县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360733,
                        'county': '会昌县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360734,
                        'county': '寻乌县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360735,
                        'county': '石城县',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360781,
                        'county': '瑞金市',
                        'superCode': 360700
                    },
                    {
                        'countyCode': 360782,
                        'county': '南康市',
                        'superCode': 360700
                    }
                ]
            },
            {
                'cityCode': 360800,
                'city': '吉安市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360801,
                        'county': '市辖区',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360802,
                        'county': '吉州区',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360803,
                        'county': '青原区',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360821,
                        'county': '吉安县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360822,
                        'county': '吉水县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360823,
                        'county': '峡江县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360824,
                        'county': '新干县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360825,
                        'county': '永丰县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360826,
                        'county': '泰和县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360827,
                        'county': '遂川县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360828,
                        'county': '万安县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360829,
                        'county': '安福县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360830,
                        'county': '永新县',
                        'superCode': 360800
                    },
                    {
                        'countyCode': 360881,
                        'county': '井冈山市',
                        'superCode': 360800
                    }
                ]
            },
            {
                'cityCode': 360900,
                'city': '宜春市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 360901,
                        'county': '市辖区',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360902,
                        'county': '袁州区',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360921,
                        'county': '奉新县',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360922,
                        'county': '万载县',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360923,
                        'county': '上高县',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360924,
                        'county': '宜丰县',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360925,
                        'county': '靖安县',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360926,
                        'county': '铜鼓县',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360981,
                        'county': '丰城市',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360982,
                        'county': '樟树市',
                        'superCode': 360900
                    },
                    {
                        'countyCode': 360983,
                        'county': '高安市',
                        'superCode': 360900
                    }
                ]
            },
            {
                'cityCode': 361000,
                'city': '抚州市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 361001,
                        'county': '市辖区',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361002,
                        'county': '临川区',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361021,
                        'county': '南城县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361022,
                        'county': '黎川县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361023,
                        'county': '南丰县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361024,
                        'county': '崇仁县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361025,
                        'county': '乐安县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361026,
                        'county': '宜黄县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361027,
                        'county': '金溪县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361028,
                        'county': '资溪县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361029,
                        'county': '东乡县',
                        'superCode': 361000
                    },
                    {
                        'countyCode': 361030,
                        'county': '广昌县',
                        'superCode': 361000
                    }
                ]
            },
            {
                'cityCode': 361100,
                'city': '上饶市',
                'superCode': 360000,
                'counties': [
                    {
                        'countyCode': 361101,
                        'county': '市辖区',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361102,
                        'county': '信州区',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361121,
                        'county': '上饶县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361122,
                        'county': '广丰县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361123,
                        'county': '玉山县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361124,
                        'county': '铅山县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361125,
                        'county': '横峰县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361126,
                        'county': '弋阳县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361127,
                        'county': '余干县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361128,
                        'county': '鄱阳县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361129,
                        'county': '万年县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361130,
                        'county': '婺源县',
                        'superCode': 361100
                    },
                    {
                        'countyCode': 361181,
                        'county': '德兴市',
                        'superCode': 361100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 370000,
        'province': '山东省',
        'cities': [
            {
                'cityCode': 370100,
                'city': '济南市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370101,
                        'county': '市辖区',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370102,
                        'county': '历下区',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370103,
                        'county': '市中区',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370104,
                        'county': '槐荫区',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370105,
                        'county': '天桥区',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370112,
                        'county': '历城区',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370113,
                        'county': '长清区',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370124,
                        'county': '平阴县',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370125,
                        'county': '济阳县',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370126,
                        'county': '商河县',
                        'superCode': 370100
                    },
                    {
                        'countyCode': 370181,
                        'county': '章丘市',
                        'superCode': 370100
                    }
                ]
            },
            {
                'cityCode': 370200,
                'city': '青岛市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370201,
                        'county': '市辖区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370202,
                        'county': '市南区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370203,
                        'county': '市北区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370205,
                        'county': '四方区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370211,
                        'county': '黄岛区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370212,
                        'county': '崂山区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370213,
                        'county': '李沧区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370214,
                        'county': '城阳区',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370281,
                        'county': '胶州市',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370282,
                        'county': '即墨市',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370283,
                        'county': '平度市',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370284,
                        'county': '胶南市',
                        'superCode': 370200
                    },
                    {
                        'countyCode': 370285,
                        'county': '莱西市',
                        'superCode': 370200
                    }
                ]
            },
            {
                'cityCode': 370300,
                'city': '淄博市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370301,
                        'county': '市辖区',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370302,
                        'county': '淄川区',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370303,
                        'county': '张店区',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370304,
                        'county': '博山区',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370305,
                        'county': '临淄区',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370306,
                        'county': '周村区',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370321,
                        'county': '桓台县',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370322,
                        'county': '高青县',
                        'superCode': 370300
                    },
                    {
                        'countyCode': 370323,
                        'county': '沂源县',
                        'superCode': 370300
                    }
                ]
            },
            {
                'cityCode': 370400,
                'city': '枣庄市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370401,
                        'county': '市辖区',
                        'superCode': 370400
                    },
                    {
                        'countyCode': 370402,
                        'county': '市中区',
                        'superCode': 370400
                    },
                    {
                        'countyCode': 370403,
                        'county': '薛城区',
                        'superCode': 370400
                    },
                    {
                        'countyCode': 370404,
                        'county': '峄城区',
                        'superCode': 370400
                    },
                    {
                        'countyCode': 370405,
                        'county': '台儿庄区',
                        'superCode': 370400
                    },
                    {
                        'countyCode': 370406,
                        'county': '山亭区',
                        'superCode': 370400
                    },
                    {
                        'countyCode': 370481,
                        'county': '滕州市',
                        'superCode': 370400
                    }
                ]
            },
            {
                'cityCode': 370500,
                'city': '东营市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370501,
                        'county': '市辖区',
                        'superCode': 370500
                    },
                    {
                        'countyCode': 370502,
                        'county': '东营区',
                        'superCode': 370500
                    },
                    {
                        'countyCode': 370503,
                        'county': '河口区',
                        'superCode': 370500
                    },
                    {
                        'countyCode': 370521,
                        'county': '垦利县',
                        'superCode': 370500
                    },
                    {
                        'countyCode': 370522,
                        'county': '利津县',
                        'superCode': 370500
                    },
                    {
                        'countyCode': 370523,
                        'county': '广饶县',
                        'superCode': 370500
                    }
                ]
            },
            {
                'cityCode': 370600,
                'city': '烟台市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370601,
                        'county': '市辖区',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370602,
                        'county': '芝罘区',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370611,
                        'county': '福山区',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370612,
                        'county': '牟平区',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370613,
                        'county': '莱山区',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370634,
                        'county': '长岛县',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370681,
                        'county': '龙口市',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370682,
                        'county': '莱阳市',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370683,
                        'county': '莱州市',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370684,
                        'county': '蓬莱市',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370685,
                        'county': '招远市',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370686,
                        'county': '栖霞市',
                        'superCode': 370600
                    },
                    {
                        'countyCode': 370687,
                        'county': '海阳市',
                        'superCode': 370600
                    }
                ]
            },
            {
                'cityCode': 370700,
                'city': '潍坊市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370701,
                        'county': '市辖区',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370702,
                        'county': '潍城区',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370703,
                        'county': '寒亭区',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370704,
                        'county': '坊子区',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370705,
                        'county': '奎文区',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370724,
                        'county': '临朐县',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370725,
                        'county': '昌乐县',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370781,
                        'county': '青州市',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370782,
                        'county': '诸城市',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370783,
                        'county': '寿光市',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370784,
                        'county': '安丘市',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370785,
                        'county': '高密市',
                        'superCode': 370700
                    },
                    {
                        'countyCode': 370786,
                        'county': '昌邑市',
                        'superCode': 370700
                    }
                ]
            },
            {
                'cityCode': 370800,
                'city': '济宁市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370801,
                        'county': '市辖区',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370802,
                        'county': '市中区',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370811,
                        'county': '任城区',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370826,
                        'county': '微山县',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370827,
                        'county': '鱼台县',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370828,
                        'county': '金乡县',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370829,
                        'county': '嘉祥县',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370830,
                        'county': '汶上县',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370831,
                        'county': '泗水县',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370832,
                        'county': '梁山县',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370881,
                        'county': '曲阜市',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370882,
                        'county': '兖州市',
                        'superCode': 370800
                    },
                    {
                        'countyCode': 370883,
                        'county': '邹城市',
                        'superCode': 370800
                    }
                ]
            },
            {
                'cityCode': 370900,
                'city': '泰安市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 370901,
                        'county': '市辖区',
                        'superCode': 370900
                    },
                    {
                        'countyCode': 370903,
                        'county': '岱岳区',
                        'superCode': 370900
                    },
                    {
                        'countyCode': 370921,
                        'county': '宁阳县',
                        'superCode': 370900
                    },
                    {
                        'countyCode': 370923,
                        'county': '东平县',
                        'superCode': 370900
                    },
                    {
                        'countyCode': 370982,
                        'county': '新泰市',
                        'superCode': 370900
                    },
                    {
                        'countyCode': 370983,
                        'county': '肥城市',
                        'superCode': 370900
                    }
                ]
            },
            {
                'cityCode': 371000,
                'city': '威海市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371001,
                        'county': '市辖区',
                        'superCode': 371000
                    },
                    {
                        'countyCode': 371002,
                        'county': '环翠区',
                        'superCode': 371000
                    },
                    {
                        'countyCode': 371081,
                        'county': '文登市',
                        'superCode': 371000
                    },
                    {
                        'countyCode': 371082,
                        'county': '荣成市',
                        'superCode': 371000
                    },
                    {
                        'countyCode': 371083,
                        'county': '乳山市',
                        'superCode': 371000
                    }
                ]
            },
            {
                'cityCode': 371100,
                'city': '日照市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371101,
                        'county': '市辖区',
                        'superCode': 371100
                    },
                    {
                        'countyCode': 371102,
                        'county': '东港区',
                        'superCode': 371100
                    },
                    {
                        'countyCode': 371103,
                        'county': '岚山区',
                        'superCode': 371100
                    },
                    {
                        'countyCode': 371121,
                        'county': '五莲县',
                        'superCode': 371100
                    },
                    {
                        'countyCode': 371122,
                        'county': '莒　县',
                        'superCode': 371100
                    }
                ]
            },
            {
                'cityCode': 371200,
                'city': '莱芜市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371201,
                        'county': '市辖区',
                        'superCode': 371200
                    },
                    {
                        'countyCode': 371202,
                        'county': '莱城区',
                        'superCode': 371200
                    },
                    {
                        'countyCode': 371203,
                        'county': '钢城区',
                        'superCode': 371200
                    }
                ]
            },
            {
                'cityCode': 371300,
                'city': '临沂市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371301,
                        'county': '市辖区',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371302,
                        'county': '兰山区',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371311,
                        'county': '罗庄区',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371312,
                        'county': '河东区',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371321,
                        'county': '沂南县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371322,
                        'county': '郯城县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371323,
                        'county': '沂水县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371324,
                        'county': '苍山县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371325,
                        'county': '费　县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371326,
                        'county': '平邑县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371327,
                        'county': '莒南县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371328,
                        'county': '蒙阴县',
                        'superCode': 371300
                    },
                    {
                        'countyCode': 371329,
                        'county': '临沭县',
                        'superCode': 371300
                    }
                ]
            },
            {
                'cityCode': 371400,
                'city': '德州市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371401,
                        'county': '市辖区',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371402,
                        'county': '德城区',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371421,
                        'county': '陵　县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371422,
                        'county': '宁津县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371423,
                        'county': '庆云县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371424,
                        'county': '临邑县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371425,
                        'county': '齐河县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371426,
                        'county': '平原县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371427,
                        'county': '夏津县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371428,
                        'county': '武城县',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371481,
                        'county': '乐陵市',
                        'superCode': 371400
                    },
                    {
                        'countyCode': 371482,
                        'county': '禹城市',
                        'superCode': 371400
                    }
                ]
            },
            {
                'cityCode': 371500,
                'city': '聊城市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371501,
                        'county': '市辖区',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371502,
                        'county': '东昌府区',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371521,
                        'county': '阳谷县',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371522,
                        'county': '莘　县',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371523,
                        'county': '茌平县',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371524,
                        'county': '东阿县',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371525,
                        'county': '冠　县',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371526,
                        'county': '高唐县',
                        'superCode': 371500
                    },
                    {
                        'countyCode': 371581,
                        'county': '临清市',
                        'superCode': 371500
                    }
                ]
            },
            {
                'cityCode': 371600,
                'city': '滨州市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371601,
                        'county': '市辖区',
                        'superCode': 371600
                    },
                    {
                        'countyCode': 371602,
                        'county': '滨城区',
                        'superCode': 371600
                    },
                    {
                        'countyCode': 371621,
                        'county': '惠民县',
                        'superCode': 371600
                    },
                    {
                        'countyCode': 371622,
                        'county': '阳信县',
                        'superCode': 371600
                    },
                    {
                        'countyCode': 371623,
                        'county': '无棣县',
                        'superCode': 371600
                    },
                    {
                        'countyCode': 371624,
                        'county': '沾化县',
                        'superCode': 371600
                    },
                    {
                        'countyCode': 371625,
                        'county': '博兴县',
                        'superCode': 371600
                    },
                    {
                        'countyCode': 371626,
                        'county': '邹平县',
                        'superCode': 371600
                    }
                ]
            },
            {
                'cityCode': 371700,
                'city': '荷泽市',
                'superCode': 370000,
                'counties': [
                    {
                        'countyCode': 371701,
                        'county': '市辖区',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371702,
                        'county': '牡丹区',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371721,
                        'county': '曹　县',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371722,
                        'county': '单　县',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371723,
                        'county': '成武县',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371724,
                        'county': '巨野县',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371725,
                        'county': '郓城县',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371726,
                        'county': '鄄城县',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371727,
                        'county': '定陶县',
                        'superCode': 371700
                    },
                    {
                        'countyCode': 371728,
                        'county': '东明县',
                        'superCode': 371700
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 410000,
        'province': '河南省',
        'cities': [
            {
                'cityCode': 410100,
                'city': '郑州市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410101,
                        'county': '市辖区',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410102,
                        'county': '中原区',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410103,
                        'county': '二七区',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410104,
                        'county': '管城回族区',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410105,
                        'county': '金水区',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410106,
                        'county': '上街区',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410108,
                        'county': '邙山区',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410122,
                        'county': '中牟县',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410181,
                        'county': '巩义市',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410182,
                        'county': '荥阳市',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410183,
                        'county': '新密市',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410184,
                        'county': '新郑市',
                        'superCode': 410100
                    },
                    {
                        'countyCode': 410185,
                        'county': '登封市',
                        'superCode': 410100
                    }
                ]
            },
            {
                'cityCode': 410200,
                'city': '开封市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410201,
                        'county': '市辖区',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410202,
                        'county': '龙亭区',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410203,
                        'county': '顺河回族区',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410204,
                        'county': '鼓楼区',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410205,
                        'county': '南关区',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410211,
                        'county': '郊　区',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410221,
                        'county': '杞　县',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410222,
                        'county': '通许县',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410223,
                        'county': '尉氏县',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410224,
                        'county': '开封县',
                        'superCode': 410200
                    },
                    {
                        'countyCode': 410225,
                        'county': '兰考县',
                        'superCode': 410200
                    }
                ]
            },
            {
                'cityCode': 410300,
                'city': '洛阳市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410301,
                        'county': '市辖区',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410302,
                        'county': '老城区',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410303,
                        'county': '西工区',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410304,
                        'county': '廛河回族区',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410305,
                        'county': '涧西区',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410306,
                        'county': '吉利区',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410307,
                        'county': '洛龙区',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410322,
                        'county': '孟津县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410323,
                        'county': '新安县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410324,
                        'county': '栾川县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410325,
                        'county': '嵩　县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410326,
                        'county': '汝阳县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410327,
                        'county': '宜阳县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410328,
                        'county': '洛宁县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410329,
                        'county': '伊川县',
                        'superCode': 410300
                    },
                    {
                        'countyCode': 410381,
                        'county': '偃师市',
                        'superCode': 410300
                    }
                ]
            },
            {
                'cityCode': 410400,
                'city': '平顶山市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410401,
                        'county': '市辖区',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410402,
                        'county': '新华区',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410403,
                        'county': '卫东区',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410404,
                        'county': '石龙区',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410411,
                        'county': '湛河区',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410421,
                        'county': '宝丰县',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410422,
                        'county': '叶　县',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410423,
                        'county': '鲁山县',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410425,
                        'county': '郏　县',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410481,
                        'county': '舞钢市',
                        'superCode': 410400
                    },
                    {
                        'countyCode': 410482,
                        'county': '汝州市',
                        'superCode': 410400
                    }
                ]
            },
            {
                'cityCode': 410500,
                'city': '安阳市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410501,
                        'county': '市辖区',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410502,
                        'county': '文峰区',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410503,
                        'county': '北关区',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410505,
                        'county': '殷都区',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410506,
                        'county': '龙安区',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410522,
                        'county': '安阳县',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410523,
                        'county': '汤阴县',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410526,
                        'county': '滑　县',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410527,
                        'county': '内黄县',
                        'superCode': 410500
                    },
                    {
                        'countyCode': 410581,
                        'county': '林州市',
                        'superCode': 410500
                    }
                ]
            },
            {
                'cityCode': 410600,
                'city': '鹤壁市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410601,
                        'county': '市辖区',
                        'superCode': 410600
                    },
                    {
                        'countyCode': 410602,
                        'county': '鹤山区',
                        'superCode': 410600
                    },
                    {
                        'countyCode': 410603,
                        'county': '山城区',
                        'superCode': 410600
                    },
                    {
                        'countyCode': 410611,
                        'county': '淇滨区',
                        'superCode': 410600
                    },
                    {
                        'countyCode': 410621,
                        'county': '浚　县',
                        'superCode': 410600
                    },
                    {
                        'countyCode': 410622,
                        'county': '淇　县',
                        'superCode': 410600
                    }
                ]
            },
            {
                'cityCode': 410700,
                'city': '新乡市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410701,
                        'county': '市辖区',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410702,
                        'county': '红旗区',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410703,
                        'county': '卫滨区',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410704,
                        'county': '凤泉区',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410711,
                        'county': '牧野区',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410721,
                        'county': '新乡县',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410724,
                        'county': '获嘉县',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410725,
                        'county': '原阳县',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410726,
                        'county': '延津县',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410727,
                        'county': '封丘县',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410728,
                        'county': '长垣县',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410781,
                        'county': '卫辉市',
                        'superCode': 410700
                    },
                    {
                        'countyCode': 410782,
                        'county': '辉县市',
                        'superCode': 410700
                    }
                ]
            },
            {
                'cityCode': 410800,
                'city': '焦作市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410801,
                        'county': '市辖区',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410802,
                        'county': '解放区',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410803,
                        'county': '中站区',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410804,
                        'county': '马村区',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410811,
                        'county': '山阳区',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410821,
                        'county': '修武县',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410822,
                        'county': '博爱县',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410823,
                        'county': '武陟县',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410825,
                        'county': '温　县',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410881,
                        'county': '济源市',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410882,
                        'county': '沁阳市',
                        'superCode': 410800
                    },
                    {
                        'countyCode': 410883,
                        'county': '孟州市',
                        'superCode': 410800
                    }
                ]
            },
            {
                'cityCode': 410900,
                'city': '濮阳市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 410901,
                        'county': '市辖区',
                        'superCode': 410900
                    },
                    {
                        'countyCode': 410902,
                        'county': '华龙区',
                        'superCode': 410900
                    },
                    {
                        'countyCode': 410922,
                        'county': '清丰县',
                        'superCode': 410900
                    },
                    {
                        'countyCode': 410923,
                        'county': '南乐县',
                        'superCode': 410900
                    },
                    {
                        'countyCode': 410926,
                        'county': '范　县',
                        'superCode': 410900
                    },
                    {
                        'countyCode': 410927,
                        'county': '台前县',
                        'superCode': 410900
                    },
                    {
                        'countyCode': 410928,
                        'county': '濮阳县',
                        'superCode': 410900
                    }
                ]
            },
            {
                'cityCode': 411000,
                'city': '许昌市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411001,
                        'county': '市辖区',
                        'superCode': 411000
                    },
                    {
                        'countyCode': 411002,
                        'county': '魏都区',
                        'superCode': 411000
                    },
                    {
                        'countyCode': 411023,
                        'county': '许昌县',
                        'superCode': 411000
                    },
                    {
                        'countyCode': 411024,
                        'county': '鄢陵县',
                        'superCode': 411000
                    },
                    {
                        'countyCode': 411025,
                        'county': '襄城县',
                        'superCode': 411000
                    },
                    {
                        'countyCode': 411081,
                        'county': '禹州市',
                        'superCode': 411000
                    },
                    {
                        'countyCode': 411082,
                        'county': '长葛市',
                        'superCode': 411000
                    }
                ]
            },
            {
                'cityCode': 411100,
                'city': '漯河市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411101,
                        'county': '市辖区',
                        'superCode': 411100
                    },
                    {
                        'countyCode': 411102,
                        'county': '源汇区',
                        'superCode': 411100
                    },
                    {
                        'countyCode': 411103,
                        'county': '郾城区',
                        'superCode': 411100
                    },
                    {
                        'countyCode': 411104,
                        'county': '召陵区',
                        'superCode': 411100
                    },
                    {
                        'countyCode': 411121,
                        'county': '舞阳县',
                        'superCode': 411100
                    },
                    {
                        'countyCode': 411122,
                        'county': '临颍县',
                        'superCode': 411100
                    }
                ]
            },
            {
                'cityCode': 411200,
                'city': '三门峡市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411201,
                        'county': '市辖区',
                        'superCode': 411200
                    },
                    {
                        'countyCode': 411202,
                        'county': '湖滨区',
                        'superCode': 411200
                    },
                    {
                        'countyCode': 411221,
                        'county': '渑池县',
                        'superCode': 411200
                    },
                    {
                        'countyCode': 411222,
                        'county': '陕　县',
                        'superCode': 411200
                    },
                    {
                        'countyCode': 411224,
                        'county': '卢氏县',
                        'superCode': 411200
                    },
                    {
                        'countyCode': 411281,
                        'county': '义马市',
                        'superCode': 411200
                    },
                    {
                        'countyCode': 411282,
                        'county': '灵宝市',
                        'superCode': 411200
                    }
                ]
            },
            {
                'cityCode': 411300,
                'city': '南阳市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411301,
                        'county': '市辖区',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411302,
                        'county': '宛城区',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411303,
                        'county': '卧龙区',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411321,
                        'county': '南召县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411322,
                        'county': '方城县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411323,
                        'county': '西峡县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411324,
                        'county': '镇平县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411325,
                        'county': '内乡县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411326,
                        'county': '淅川县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411327,
                        'county': '社旗县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411328,
                        'county': '唐河县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411329,
                        'county': '新野县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411330,
                        'county': '桐柏县',
                        'superCode': 411300
                    },
                    {
                        'countyCode': 411381,
                        'county': '邓州市',
                        'superCode': 411300
                    }
                ]
            },
            {
                'cityCode': 411400,
                'city': '商丘市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411401,
                        'county': '市辖区',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411402,
                        'county': '梁园区',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411403,
                        'county': '睢阳区',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411421,
                        'county': '民权县',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411422,
                        'county': '睢　县',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411423,
                        'county': '宁陵县',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411424,
                        'county': '柘城县',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411425,
                        'county': '虞城县',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411426,
                        'county': '夏邑县',
                        'superCode': 411400
                    },
                    {
                        'countyCode': 411481,
                        'county': '永城市',
                        'superCode': 411400
                    }
                ]
            },
            {
                'cityCode': 411500,
                'city': '信阳市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411501,
                        'county': '市辖区',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411502,
                        'county': '师河区',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411503,
                        'county': '平桥区',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411521,
                        'county': '罗山县',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411522,
                        'county': '光山县',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411523,
                        'county': '新　县',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411524,
                        'county': '商城县',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411525,
                        'county': '固始县',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411526,
                        'county': '潢川县',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411527,
                        'county': '淮滨县',
                        'superCode': 411500
                    },
                    {
                        'countyCode': 411528,
                        'county': '息　县',
                        'superCode': 411500
                    }
                ]
            },
            {
                'cityCode': 411600,
                'city': '周口市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411601,
                        'county': '市辖区',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411602,
                        'county': '川汇区',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411621,
                        'county': '扶沟县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411622,
                        'county': '西华县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411623,
                        'county': '商水县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411624,
                        'county': '沈丘县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411625,
                        'county': '郸城县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411626,
                        'county': '淮阳县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411627,
                        'county': '太康县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411628,
                        'county': '鹿邑县',
                        'superCode': 411600
                    },
                    {
                        'countyCode': 411681,
                        'county': '项城市',
                        'superCode': 411600
                    }
                ]
            },
            {
                'cityCode': 411700,
                'city': '驻马店市',
                'superCode': 410000,
                'counties': [
                    {
                        'countyCode': 411701,
                        'county': '市辖区',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411702,
                        'county': '驿城区',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411721,
                        'county': '西平县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411722,
                        'county': '上蔡县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411723,
                        'county': '平舆县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411724,
                        'county': '正阳县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411725,
                        'county': '确山县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411726,
                        'county': '泌阳县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411727,
                        'county': '汝南县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411728,
                        'county': '遂平县',
                        'superCode': 411700
                    },
                    {
                        'countyCode': 411729,
                        'county': '新蔡县',
                        'superCode': 411700
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 420000,
        'province': '湖北省',
        'cities': [
            {
                'cityCode': 420100,
                'city': '武汉市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420101,
                        'county': '市辖区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420102,
                        'county': '江岸区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420103,
                        'county': '江汉区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420104,
                        'county': '硚口区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420105,
                        'county': '汉阳区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420106,
                        'county': '武昌区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420107,
                        'county': '青山区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420111,
                        'county': '洪山区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420112,
                        'county': '东西湖区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420113,
                        'county': '汉南区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420114,
                        'county': '蔡甸区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420115,
                        'county': '江夏区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420116,
                        'county': '黄陂区',
                        'superCode': 420100
                    },
                    {
                        'countyCode': 420117,
                        'county': '新洲区',
                        'superCode': 420100
                    }
                ]
            },
            {
                'cityCode': 420200,
                'city': '黄石市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420201,
                        'county': '市辖区',
                        'superCode': 420200
                    },
                    {
                        'countyCode': 420202,
                        'county': '黄石港区',
                        'superCode': 420200
                    },
                    {
                        'countyCode': 420203,
                        'county': '西塞山区',
                        'superCode': 420200
                    },
                    {
                        'countyCode': 420204,
                        'county': '下陆区',
                        'superCode': 420200
                    },
                    {
                        'countyCode': 420205,
                        'county': '铁山区',
                        'superCode': 420200
                    },
                    {
                        'countyCode': 420222,
                        'county': '阳新县',
                        'superCode': 420200
                    },
                    {
                        'countyCode': 420281,
                        'county': '大冶市',
                        'superCode': 420200
                    }
                ]
            },
            {
                'cityCode': 420300,
                'city': '十堰市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420301,
                        'county': '市辖区',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420302,
                        'county': '茅箭区',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420303,
                        'county': '张湾区',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420321,
                        'county': '郧　县',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420322,
                        'county': '郧西县',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420323,
                        'county': '竹山县',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420324,
                        'county': '竹溪县',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420325,
                        'county': '房　县',
                        'superCode': 420300
                    },
                    {
                        'countyCode': 420381,
                        'county': '丹江口市',
                        'superCode': 420300
                    }
                ]
            },
            {
                'cityCode': 420500,
                'city': '宜昌市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420501,
                        'county': '市辖区',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420502,
                        'county': '西陵区',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420503,
                        'county': '伍家岗区',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420504,
                        'county': '点军区',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420505,
                        'county': '猇亭区',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420506,
                        'county': '夷陵区',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420525,
                        'county': '远安县',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420526,
                        'county': '兴山县',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420527,
                        'county': '秭归县',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420528,
                        'county': '长阳土家族自治县',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420529,
                        'county': '五峰土家族自治县',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420581,
                        'county': '宜都市',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420582,
                        'county': '当阳市',
                        'superCode': 420500
                    },
                    {
                        'countyCode': 420583,
                        'county': '枝江市',
                        'superCode': 420500
                    }
                ]
            },
            {
                'cityCode': 420600,
                'city': '襄阳市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420601,
                        'county': '市辖区',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420602,
                        'county': '襄城区',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420606,
                        'county': '樊城区',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420607,
                        'county': '襄阳区',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420624,
                        'county': '南漳县',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420625,
                        'county': '谷城县',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420626,
                        'county': '保康县',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420682,
                        'county': '老河口市',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420683,
                        'county': '枣阳市',
                        'superCode': 420600
                    },
                    {
                        'countyCode': 420684,
                        'county': '宜城市',
                        'superCode': 420600
                    }
                ]
            },
            {
                'cityCode': 420700,
                'city': '鄂州市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420701,
                        'county': '市辖区',
                        'superCode': 420700
                    },
                    {
                        'countyCode': 420702,
                        'county': '梁子湖区',
                        'superCode': 420700
                    },
                    {
                        'countyCode': 420703,
                        'county': '华容区',
                        'superCode': 420700
                    },
                    {
                        'countyCode': 420704,
                        'county': '鄂城区',
                        'superCode': 420700
                    }
                ]
            },
            {
                'cityCode': 420800,
                'city': '荆门市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420801,
                        'county': '市辖区',
                        'superCode': 420800
                    },
                    {
                        'countyCode': 420802,
                        'county': '东宝区',
                        'superCode': 420800
                    },
                    {
                        'countyCode': 420804,
                        'county': '掇刀区',
                        'superCode': 420800
                    },
                    {
                        'countyCode': 420821,
                        'county': '京山县',
                        'superCode': 420800
                    },
                    {
                        'countyCode': 420822,
                        'county': '沙洋县',
                        'superCode': 420800
                    },
                    {
                        'countyCode': 420881,
                        'county': '钟祥市',
                        'superCode': 420800
                    }
                ]
            },
            {
                'cityCode': 420900,
                'city': '孝感市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 420901,
                        'county': '市辖区',
                        'superCode': 420900
                    },
                    {
                        'countyCode': 420902,
                        'county': '孝南区',
                        'superCode': 420900
                    },
                    {
                        'countyCode': 420921,
                        'county': '孝昌县',
                        'superCode': 420900
                    },
                    {
                        'countyCode': 420922,
                        'county': '大悟县',
                        'superCode': 420900
                    },
                    {
                        'countyCode': 420923,
                        'county': '云梦县',
                        'superCode': 420900
                    },
                    {
                        'countyCode': 420981,
                        'county': '应城市',
                        'superCode': 420900
                    },
                    {
                        'countyCode': 420982,
                        'county': '安陆市',
                        'superCode': 420900
                    },
                    {
                        'countyCode': 420984,
                        'county': '汉川市',
                        'superCode': 420900
                    }
                ]
            },
            {
                'cityCode': 421000,
                'city': '荆州市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 421001,
                        'county': '市辖区',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421002,
                        'county': '沙市区',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421003,
                        'county': '荆州区',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421022,
                        'county': '公安县',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421023,
                        'county': '监利县',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421024,
                        'county': '江陵县',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421081,
                        'county': '石首市',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421083,
                        'county': '洪湖市',
                        'superCode': 421000
                    },
                    {
                        'countyCode': 421087,
                        'county': '松滋市',
                        'superCode': 421000
                    }
                ]
            },
            {
                'cityCode': 421100,
                'city': '黄冈市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 421101,
                        'county': '市辖区',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421102,
                        'county': '黄州区',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421121,
                        'county': '团风县',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421122,
                        'county': '红安县',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421123,
                        'county': '罗田县',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421124,
                        'county': '英山县',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421125,
                        'county': '浠水县',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421126,
                        'county': '蕲春县',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421127,
                        'county': '黄梅县',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421181,
                        'county': '麻城市',
                        'superCode': 421100
                    },
                    {
                        'countyCode': 421182,
                        'county': '武穴市',
                        'superCode': 421100
                    }
                ]
            },
            {
                'cityCode': 421200,
                'city': '咸宁市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 421201,
                        'county': '市辖区',
                        'superCode': 421200
                    },
                    {
                        'countyCode': 421202,
                        'county': '咸安区',
                        'superCode': 421200
                    },
                    {
                        'countyCode': 421221,
                        'county': '嘉鱼县',
                        'superCode': 421200
                    },
                    {
                        'countyCode': 421222,
                        'county': '通城县',
                        'superCode': 421200
                    },
                    {
                        'countyCode': 421223,
                        'county': '崇阳县',
                        'superCode': 421200
                    },
                    {
                        'countyCode': 421224,
                        'county': '通山县',
                        'superCode': 421200
                    },
                    {
                        'countyCode': 421281,
                        'county': '赤壁市',
                        'superCode': 421200
                    }
                ]
            },
            {
                'cityCode': 421300,
                'city': '随州市',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 421301,
                        'county': '市辖区',
                        'superCode': 421300
                    },
                    {
                        'countyCode': 421302,
                        'county': '曾都区',
                        'superCode': 421300
                    },
                    {
                        'countyCode': 421381,
                        'county': '广水市',
                        'superCode': 421300
                    }
                ]
            },
            {
                'cityCode': 422800,
                'city': '恩施土家族苗族自治州',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 422801,
                        'county': '恩施市',
                        'superCode': 422800
                    },
                    {
                        'countyCode': 422802,
                        'county': '利川市',
                        'superCode': 422800
                    },
                    {
                        'countyCode': 422822,
                        'county': '建始县',
                        'superCode': 422800
                    },
                    {
                        'countyCode': 422823,
                        'county': '巴东县',
                        'superCode': 422800
                    },
                    {
                        'countyCode': 422825,
                        'county': '宣恩县',
                        'superCode': 422800
                    },
                    {
                        'countyCode': 422826,
                        'county': '咸丰县',
                        'superCode': 422800
                    },
                    {
                        'countyCode': 422827,
                        'county': '来凤县',
                        'superCode': 422800
                    },
                    {
                        'countyCode': 422828,
                        'county': '鹤峰县',
                        'superCode': 422800
                    }
                ]
            },
            {
                'cityCode': 429000,
                'city': '神农架林区',
                'superCode': 420000,
                'counties': [
                    {
                        'countyCode': 429004,
                        'county': '仙桃市',
                        'superCode': 429000
                    },
                    {
                        'countyCode': 429005,
                        'county': '潜江市',
                        'superCode': 429000
                    },
                    {
                        'countyCode': 429006,
                        'county': '天门市',
                        'superCode': 429000
                    },
                    {
                        'countyCode': 429021,
                        'county': '神农架林区',
                        'superCode': 429000
                    }
                ]
            },
            {
                'cityCode': 421400,
                'city': '仙桃市',
                'superCode': 420000,
                'counties': []
            },
            {
                'cityCode': 421500,
                'city': '天门市',
                'superCode': 420000,
                'counties': []
            },
            {
                'cityCode': 421600,
                'city': '潜江市',
                'superCode': 420000,
                'counties': []
            }
        ]
    },
    {
        'provinceCode': 430000,
        'province': '湖南省',
        'cities': [
            {
                'cityCode': 430100,
                'city': '长沙市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430101,
                        'county': '市辖区',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430102,
                        'county': '芙蓉区',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430103,
                        'county': '天心区',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430104,
                        'county': '岳麓区',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430105,
                        'county': '开福区',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430111,
                        'county': '雨花区',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430121,
                        'county': '长沙县',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430122,
                        'county': '望城县',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430124,
                        'county': '宁乡县',
                        'superCode': 430100
                    },
                    {
                        'countyCode': 430181,
                        'county': '浏阳市',
                        'superCode': 430100
                    }
                ]
            },
            {
                'cityCode': 430200,
                'city': '株洲市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430201,
                        'county': '市辖区',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430202,
                        'county': '荷塘区',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430203,
                        'county': '芦淞区',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430204,
                        'county': '石峰区',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430211,
                        'county': '天元区',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430221,
                        'county': '株洲县',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430223,
                        'county': '攸　县',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430224,
                        'county': '茶陵县',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430225,
                        'county': '炎陵县',
                        'superCode': 430200
                    },
                    {
                        'countyCode': 430281,
                        'county': '醴陵市',
                        'superCode': 430200
                    }
                ]
            },
            {
                'cityCode': 430300,
                'city': '湘潭市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430301,
                        'county': '市辖区',
                        'superCode': 430300
                    },
                    {
                        'countyCode': 430302,
                        'county': '雨湖区',
                        'superCode': 430300
                    },
                    {
                        'countyCode': 430304,
                        'county': '岳塘区',
                        'superCode': 430300
                    },
                    {
                        'countyCode': 430321,
                        'county': '湘潭县',
                        'superCode': 430300
                    },
                    {
                        'countyCode': 430381,
                        'county': '湘乡市',
                        'superCode': 430300
                    },
                    {
                        'countyCode': 430382,
                        'county': '韶山市',
                        'superCode': 430300
                    }
                ]
            },
            {
                'cityCode': 430400,
                'city': '衡阳市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430401,
                        'county': '市辖区',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430405,
                        'county': '珠晖区',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430406,
                        'county': '雁峰区',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430407,
                        'county': '石鼓区',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430408,
                        'county': '蒸湘区',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430412,
                        'county': '南岳区',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430421,
                        'county': '衡阳县',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430422,
                        'county': '衡南县',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430423,
                        'county': '衡山县',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430424,
                        'county': '衡东县',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430426,
                        'county': '祁东县',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430481,
                        'county': '耒阳市',
                        'superCode': 430400
                    },
                    {
                        'countyCode': 430482,
                        'county': '常宁市',
                        'superCode': 430400
                    }
                ]
            },
            {
                'cityCode': 430500,
                'city': '邵阳市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430501,
                        'county': '市辖区',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430502,
                        'county': '双清区',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430503,
                        'county': '大祥区',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430511,
                        'county': '北塔区',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430521,
                        'county': '邵东县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430522,
                        'county': '新邵县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430523,
                        'county': '邵阳县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430524,
                        'county': '隆回县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430525,
                        'county': '洞口县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430527,
                        'county': '绥宁县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430528,
                        'county': '新宁县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430529,
                        'county': '城步苗族自治县',
                        'superCode': 430500
                    },
                    {
                        'countyCode': 430581,
                        'county': '武冈市',
                        'superCode': 430500
                    }
                ]
            },
            {
                'cityCode': 430600,
                'city': '岳阳市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430601,
                        'county': '市辖区',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430602,
                        'county': '岳阳楼区',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430603,
                        'county': '云溪区',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430611,
                        'county': '君山区',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430621,
                        'county': '岳阳县',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430623,
                        'county': '华容县',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430624,
                        'county': '湘阴县',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430626,
                        'county': '平江县',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430681,
                        'county': '汨罗市',
                        'superCode': 430600
                    },
                    {
                        'countyCode': 430682,
                        'county': '临湘市',
                        'superCode': 430600
                    }
                ]
            },
            {
                'cityCode': 430700,
                'city': '常德市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430701,
                        'county': '市辖区',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430702,
                        'county': '武陵区',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430703,
                        'county': '鼎城区',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430721,
                        'county': '安乡县',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430722,
                        'county': '汉寿县',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430723,
                        'county': '澧　县',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430724,
                        'county': '临澧县',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430725,
                        'county': '桃源县',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430726,
                        'county': '石门县',
                        'superCode': 430700
                    },
                    {
                        'countyCode': 430781,
                        'county': '津市市',
                        'superCode': 430700
                    }
                ]
            },
            {
                'cityCode': 430800,
                'city': '张家界市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430801,
                        'county': '市辖区',
                        'superCode': 430800
                    },
                    {
                        'countyCode': 430802,
                        'county': '永定区',
                        'superCode': 430800
                    },
                    {
                        'countyCode': 430811,
                        'county': '武陵源区',
                        'superCode': 430800
                    },
                    {
                        'countyCode': 430821,
                        'county': '慈利县',
                        'superCode': 430800
                    },
                    {
                        'countyCode': 430822,
                        'county': '桑植县',
                        'superCode': 430800
                    }
                ]
            },
            {
                'cityCode': 430900,
                'city': '益阳市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 430901,
                        'county': '市辖区',
                        'superCode': 430900
                    },
                    {
                        'countyCode': 430902,
                        'county': '资阳区',
                        'superCode': 430900
                    },
                    {
                        'countyCode': 430903,
                        'county': '赫山区',
                        'superCode': 430900
                    },
                    {
                        'countyCode': 430921,
                        'county': '南　县',
                        'superCode': 430900
                    },
                    {
                        'countyCode': 430922,
                        'county': '桃江县',
                        'superCode': 430900
                    },
                    {
                        'countyCode': 430923,
                        'county': '安化县',
                        'superCode': 430900
                    },
                    {
                        'countyCode': 430981,
                        'county': '沅江市',
                        'superCode': 430900
                    }
                ]
            },
            {
                'cityCode': 431000,
                'city': '郴州市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 431001,
                        'county': '市辖区',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431002,
                        'county': '北湖区',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431003,
                        'county': '苏仙区',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431021,
                        'county': '桂阳县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431022,
                        'county': '宜章县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431023,
                        'county': '永兴县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431024,
                        'county': '嘉禾县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431025,
                        'county': '临武县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431026,
                        'county': '汝城县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431027,
                        'county': '桂东县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431028,
                        'county': '安仁县',
                        'superCode': 431000
                    },
                    {
                        'countyCode': 431081,
                        'county': '资兴市',
                        'superCode': 431000
                    }
                ]
            },
            {
                'cityCode': 431100,
                'city': '永州市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 431101,
                        'county': '市辖区',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431102,
                        'county': '芝山区',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431103,
                        'county': '冷水滩区',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431121,
                        'county': '祁阳县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431122,
                        'county': '东安县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431123,
                        'county': '双牌县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431124,
                        'county': '道　县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431125,
                        'county': '江永县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431126,
                        'county': '宁远县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431127,
                        'county': '蓝山县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431128,
                        'county': '新田县',
                        'superCode': 431100
                    },
                    {
                        'countyCode': 431129,
                        'county': '江华瑶族自治县',
                        'superCode': 431100
                    }
                ]
            },
            {
                'cityCode': 431200,
                'city': '怀化市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 431201,
                        'county': '市辖区',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431202,
                        'county': '鹤城区',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431221,
                        'county': '中方县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431222,
                        'county': '沅陵县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431223,
                        'county': '辰溪县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431224,
                        'county': '溆浦县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431225,
                        'county': '会同县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431226,
                        'county': '麻阳苗族自治县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431227,
                        'county': '新晃侗族自治县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431228,
                        'county': '芷江侗族自治县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431229,
                        'county': '靖州苗族侗族自治县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431230,
                        'county': '通道侗族自治县',
                        'superCode': 431200
                    },
                    {
                        'countyCode': 431281,
                        'county': '洪江市',
                        'superCode': 431200
                    }
                ]
            },
            {
                'cityCode': 431300,
                'city': '娄底市',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 431301,
                        'county': '市辖区',
                        'superCode': 431300
                    },
                    {
                        'countyCode': 431302,
                        'county': '娄星区',
                        'superCode': 431300
                    },
                    {
                        'countyCode': 431321,
                        'county': '双峰县',
                        'superCode': 431300
                    },
                    {
                        'countyCode': 431322,
                        'county': '新化县',
                        'superCode': 431300
                    },
                    {
                        'countyCode': 431381,
                        'county': '冷水江市',
                        'superCode': 431300
                    },
                    {
                        'countyCode': 431382,
                        'county': '涟源市',
                        'superCode': 431300
                    }
                ]
            },
            {
                'cityCode': 433100,
                'city': '湘西土家族苗族自治州',
                'superCode': 430000,
                'counties': [
                    {
                        'countyCode': 433101,
                        'county': '吉首市',
                        'superCode': 433100
                    },
                    {
                        'countyCode': 433122,
                        'county': '泸溪县',
                        'superCode': 433100
                    },
                    {
                        'countyCode': 433123,
                        'county': '凤凰县',
                        'superCode': 433100
                    },
                    {
                        'countyCode': 433124,
                        'county': '花垣县',
                        'superCode': 433100
                    },
                    {
                        'countyCode': 433125,
                        'county': '保靖县',
                        'superCode': 433100
                    },
                    {
                        'countyCode': 433126,
                        'county': '古丈县',
                        'superCode': 433100
                    },
                    {
                        'countyCode': 433127,
                        'county': '永顺县',
                        'superCode': 433100
                    },
                    {
                        'countyCode': 433130,
                        'county': '龙山县',
                        'superCode': 433100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 440000,
        'province': '广东省',
        'cities': [
            {
                'cityCode': 440100,
                'city': '广州市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440101,
                        'county': '市辖区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440102,
                        'county': '东山区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440103,
                        'county': '荔湾区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440104,
                        'county': '越秀区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440105,
                        'county': '海珠区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440106,
                        'county': '天河区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440107,
                        'county': '芳村区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440111,
                        'county': '白云区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440112,
                        'county': '黄埔区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440113,
                        'county': '番禺区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440114,
                        'county': '花都区',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440183,
                        'county': '增城市',
                        'superCode': 440100
                    },
                    {
                        'countyCode': 440184,
                        'county': '从化市',
                        'superCode': 440100
                    }
                ]
            },
            {
                'cityCode': 440200,
                'city': '韶关市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440201,
                        'county': '市辖区',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440203,
                        'county': '武江区',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440204,
                        'county': '浈江区',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440205,
                        'county': '曲江区',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440222,
                        'county': '始兴县',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440224,
                        'county': '仁化县',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440229,
                        'county': '翁源县',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440232,
                        'county': '乳源瑶族自治县',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440233,
                        'county': '新丰县',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440281,
                        'county': '乐昌市',
                        'superCode': 440200
                    },
                    {
                        'countyCode': 440282,
                        'county': '南雄市',
                        'superCode': 440200
                    }
                ]
            },
            {
                'cityCode': 440300,
                'city': '深圳市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440301,
                        'county': '市辖区',
                        'superCode': 440300
                    },
                    {
                        'countyCode': 440303,
                        'county': '罗湖区',
                        'superCode': 440300
                    },
                    {
                        'countyCode': 440304,
                        'county': '福田区',
                        'superCode': 440300
                    },
                    {
                        'countyCode': 440305,
                        'county': '南山区',
                        'superCode': 440300
                    },
                    {
                        'countyCode': 440306,
                        'county': '宝安区',
                        'superCode': 440300
                    },
                    {
                        'countyCode': 440307,
                        'county': '龙岗区',
                        'superCode': 440300
                    },
                    {
                        'countyCode': 440308,
                        'county': '盐田区',
                        'superCode': 440300
                    }
                ]
            },
            {
                'cityCode': 440400,
                'city': '珠海市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440401,
                        'county': '市辖区',
                        'superCode': 440400
                    },
                    {
                        'countyCode': 440402,
                        'county': '香洲区',
                        'superCode': 440400
                    },
                    {
                        'countyCode': 440403,
                        'county': '斗门区',
                        'superCode': 440400
                    },
                    {
                        'countyCode': 440404,
                        'county': '金湾区',
                        'superCode': 440400
                    }
                ]
            },
            {
                'cityCode': 440500,
                'city': '汕头市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440501,
                        'county': '市辖区',
                        'superCode': 440500
                    },
                    {
                        'countyCode': 440507,
                        'county': '龙湖区',
                        'superCode': 440500
                    },
                    {
                        'countyCode': 440511,
                        'county': '金平区',
                        'superCode': 440500
                    },
                    {
                        'countyCode': 440512,
                        'county': '濠江区',
                        'superCode': 440500
                    },
                    {
                        'countyCode': 440513,
                        'county': '潮阳区',
                        'superCode': 440500
                    },
                    {
                        'countyCode': 440514,
                        'county': '潮南区',
                        'superCode': 440500
                    },
                    {
                        'countyCode': 440515,
                        'county': '澄海区',
                        'superCode': 440500
                    },
                    {
                        'countyCode': 440523,
                        'county': '南澳县',
                        'superCode': 440500
                    }
                ]
            },
            {
                'cityCode': 440600,
                'city': '佛山市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440601,
                        'county': '市辖区',
                        'superCode': 440600
                    },
                    {
                        'countyCode': 440604,
                        'county': '禅城区',
                        'superCode': 440600
                    },
                    {
                        'countyCode': 440605,
                        'county': '南海区',
                        'superCode': 440600
                    },
                    {
                        'countyCode': 440606,
                        'county': '顺德区',
                        'superCode': 440600
                    },
                    {
                        'countyCode': 440607,
                        'county': '三水区',
                        'superCode': 440600
                    },
                    {
                        'countyCode': 440608,
                        'county': '高明区',
                        'superCode': 440600
                    }
                ]
            },
            {
                'cityCode': 440700,
                'city': '江门市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440701,
                        'county': '市辖区',
                        'superCode': 440700
                    },
                    {
                        'countyCode': 440703,
                        'county': '蓬江区',
                        'superCode': 440700
                    },
                    {
                        'countyCode': 440704,
                        'county': '江海区',
                        'superCode': 440700
                    },
                    {
                        'countyCode': 440705,
                        'county': '新会区',
                        'superCode': 440700
                    },
                    {
                        'countyCode': 440781,
                        'county': '台山市',
                        'superCode': 440700
                    },
                    {
                        'countyCode': 440783,
                        'county': '开平市',
                        'superCode': 440700
                    },
                    {
                        'countyCode': 440784,
                        'county': '鹤山市',
                        'superCode': 440700
                    },
                    {
                        'countyCode': 440785,
                        'county': '恩平市',
                        'superCode': 440700
                    }
                ]
            },
            {
                'cityCode': 440800,
                'city': '湛江市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440801,
                        'county': '市辖区',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440802,
                        'county': '赤坎区',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440803,
                        'county': '霞山区',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440804,
                        'county': '坡头区',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440811,
                        'county': '麻章区',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440823,
                        'county': '遂溪县',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440825,
                        'county': '徐闻县',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440881,
                        'county': '廉江市',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440882,
                        'county': '雷州市',
                        'superCode': 440800
                    },
                    {
                        'countyCode': 440883,
                        'county': '吴川市',
                        'superCode': 440800
                    }
                ]
            },
            {
                'cityCode': 440900,
                'city': '茂名市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 440901,
                        'county': '市辖区',
                        'superCode': 440900
                    },
                    {
                        'countyCode': 440902,
                        'county': '茂南区',
                        'superCode': 440900
                    },
                    {
                        'countyCode': 440903,
                        'county': '茂港区',
                        'superCode': 440900
                    },
                    {
                        'countyCode': 440923,
                        'county': '电白县',
                        'superCode': 440900
                    },
                    {
                        'countyCode': 440981,
                        'county': '高州市',
                        'superCode': 440900
                    },
                    {
                        'countyCode': 440982,
                        'county': '化州市',
                        'superCode': 440900
                    },
                    {
                        'countyCode': 440983,
                        'county': '信宜市',
                        'superCode': 440900
                    }
                ]
            },
            {
                'cityCode': 441200,
                'city': '肇庆市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 441201,
                        'county': '市辖区',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441202,
                        'county': '端州区',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441203,
                        'county': '鼎湖区',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441223,
                        'county': '广宁县',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441224,
                        'county': '怀集县',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441225,
                        'county': '封开县',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441226,
                        'county': '德庆县',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441283,
                        'county': '高要市',
                        'superCode': 441200
                    },
                    {
                        'countyCode': 441284,
                        'county': '四会市',
                        'superCode': 441200
                    }
                ]
            },
            {
                'cityCode': 441300,
                'city': '惠州市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 441301,
                        'county': '市辖区',
                        'superCode': 441300
                    },
                    {
                        'countyCode': 441302,
                        'county': '惠城区',
                        'superCode': 441300
                    },
                    {
                        'countyCode': 441303,
                        'county': '惠阳区',
                        'superCode': 441300
                    },
                    {
                        'countyCode': 441322,
                        'county': '博罗县',
                        'superCode': 441300
                    },
                    {
                        'countyCode': 441323,
                        'county': '惠东县',
                        'superCode': 441300
                    },
                    {
                        'countyCode': 441324,
                        'county': '龙门县',
                        'superCode': 441300
                    }
                ]
            },
            {
                'cityCode': 441400,
                'city': '梅州市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 441401,
                        'county': '市辖区',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441402,
                        'county': '梅江区',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441421,
                        'county': '梅　县',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441422,
                        'county': '大埔县',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441423,
                        'county': '丰顺县',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441424,
                        'county': '五华县',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441426,
                        'county': '平远县',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441427,
                        'county': '蕉岭县',
                        'superCode': 441400
                    },
                    {
                        'countyCode': 441481,
                        'county': '兴宁市',
                        'superCode': 441400
                    }
                ]
            },
            {
                'cityCode': 441500,
                'city': '汕尾市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 441501,
                        'county': '市辖区',
                        'superCode': 441500
                    },
                    {
                        'countyCode': 441502,
                        'county': '城　区',
                        'superCode': 441500
                    },
                    {
                        'countyCode': 441521,
                        'county': '海丰县',
                        'superCode': 441500
                    },
                    {
                        'countyCode': 441523,
                        'county': '陆河县',
                        'superCode': 441500
                    },
                    {
                        'countyCode': 441581,
                        'county': '陆丰市',
                        'superCode': 441500
                    }
                ]
            },
            {
                'cityCode': 441600,
                'city': '河源市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 441601,
                        'county': '市辖区',
                        'superCode': 441600
                    },
                    {
                        'countyCode': 441602,
                        'county': '源城区',
                        'superCode': 441600
                    },
                    {
                        'countyCode': 441621,
                        'county': '紫金县',
                        'superCode': 441600
                    },
                    {
                        'countyCode': 441622,
                        'county': '龙川县',
                        'superCode': 441600
                    },
                    {
                        'countyCode': 441623,
                        'county': '连平县',
                        'superCode': 441600
                    },
                    {
                        'countyCode': 441624,
                        'county': '和平县',
                        'superCode': 441600
                    },
                    {
                        'countyCode': 441625,
                        'county': '东源县',
                        'superCode': 441600
                    }
                ]
            },
            {
                'cityCode': 441700,
                'city': '阳江市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 441701,
                        'county': '市辖区',
                        'superCode': 441700
                    },
                    {
                        'countyCode': 441702,
                        'county': '江城区',
                        'superCode': 441700
                    },
                    {
                        'countyCode': 441721,
                        'county': '阳西县',
                        'superCode': 441700
                    },
                    {
                        'countyCode': 441723,
                        'county': '阳东县',
                        'superCode': 441700
                    },
                    {
                        'countyCode': 441781,
                        'county': '阳春市',
                        'superCode': 441700
                    }
                ]
            },
            {
                'cityCode': 441800,
                'city': '清远市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 441801,
                        'county': '市辖区',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441802,
                        'county': '清城区',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441821,
                        'county': '佛冈县',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441823,
                        'county': '阳山县',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441825,
                        'county': '连山壮族瑶族自治县',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441826,
                        'county': '连南瑶族自治县',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441827,
                        'county': '清新县',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441881,
                        'county': '英德市',
                        'superCode': 441800
                    },
                    {
                        'countyCode': 441882,
                        'county': '连州市',
                        'superCode': 441800
                    }
                ]
            },
            {
                'cityCode': 441900,
                'city': '东莞市',
                'superCode': 440000,
                'counties': []
            },
            {
                'cityCode': 442000,
                'city': '中山市',
                'superCode': 440000,
                'counties': []
            },
            {
                'cityCode': 445100,
                'city': '潮州市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 445101,
                        'county': '市辖区',
                        'superCode': 445100
                    },
                    {
                        'countyCode': 445102,
                        'county': '湘桥区',
                        'superCode': 445100
                    },
                    {
                        'countyCode': 445121,
                        'county': '潮安县',
                        'superCode': 445100
                    },
                    {
                        'countyCode': 445122,
                        'county': '饶平县',
                        'superCode': 445100
                    }
                ]
            },
            {
                'cityCode': 445200,
                'city': '揭阳市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 445201,
                        'county': '市辖区',
                        'superCode': 445200
                    },
                    {
                        'countyCode': 445202,
                        'county': '榕城区',
                        'superCode': 445200
                    },
                    {
                        'countyCode': 445221,
                        'county': '揭东县',
                        'superCode': 445200
                    },
                    {
                        'countyCode': 445222,
                        'county': '揭西县',
                        'superCode': 445200
                    },
                    {
                        'countyCode': 445224,
                        'county': '惠来县',
                        'superCode': 445200
                    },
                    {
                        'countyCode': 445281,
                        'county': '普宁市',
                        'superCode': 445200
                    }
                ]
            },
            {
                'cityCode': 445300,
                'city': '云浮市',
                'superCode': 440000,
                'counties': [
                    {
                        'countyCode': 445301,
                        'county': '市辖区',
                        'superCode': 445300
                    },
                    {
                        'countyCode': 445302,
                        'county': '云城区',
                        'superCode': 445300
                    },
                    {
                        'countyCode': 445321,
                        'county': '新兴县',
                        'superCode': 445300
                    },
                    {
                        'countyCode': 445322,
                        'county': '郁南县',
                        'superCode': 445300
                    },
                    {
                        'countyCode': 445323,
                        'county': '云安县',
                        'superCode': 445300
                    },
                    {
                        'countyCode': 445381,
                        'county': '罗定市',
                        'superCode': 445300
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 450000,
        'province': '广西壮族自治区',
        'cities': [
            {
                'cityCode': 450100,
                'city': '南宁市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450101,
                        'county': '市辖区',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450102,
                        'county': '兴宁区',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450103,
                        'county': '青秀区',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450105,
                        'county': '江南区',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450107,
                        'county': '西乡塘区',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450108,
                        'county': '良庆区',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450109,
                        'county': '邕宁区',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450122,
                        'county': '武鸣县',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450123,
                        'county': '隆安县',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450124,
                        'county': '马山县',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450125,
                        'county': '上林县',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450126,
                        'county': '宾阳县',
                        'superCode': 450100
                    },
                    {
                        'countyCode': 450127,
                        'county': '横　县',
                        'superCode': 450100
                    }
                ]
            },
            {
                'cityCode': 450200,
                'city': '柳州市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450201,
                        'county': '市辖区',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450202,
                        'county': '城中区',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450203,
                        'county': '鱼峰区',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450204,
                        'county': '柳南区',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450205,
                        'county': '柳北区',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450221,
                        'county': '柳江县',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450222,
                        'county': '柳城县',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450223,
                        'county': '鹿寨县',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450224,
                        'county': '融安县',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450225,
                        'county': '融水苗族自治县',
                        'superCode': 450200
                    },
                    {
                        'countyCode': 450226,
                        'county': '三江侗族自治县',
                        'superCode': 450200
                    }
                ]
            },
            {
                'cityCode': 450300,
                'city': '桂林市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450301,
                        'county': '市辖区',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450302,
                        'county': '秀峰区',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450303,
                        'county': '叠彩区',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450304,
                        'county': '象山区',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450305,
                        'county': '七星区',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450311,
                        'county': '雁山区',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450321,
                        'county': '阳朔县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450322,
                        'county': '临桂县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450323,
                        'county': '灵川县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450324,
                        'county': '全州县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450325,
                        'county': '兴安县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450326,
                        'county': '永福县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450327,
                        'county': '灌阳县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450328,
                        'county': '龙胜各族自治县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450329,
                        'county': '资源县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450330,
                        'county': '平乐县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450331,
                        'county': '荔蒲县',
                        'superCode': 450300
                    },
                    {
                        'countyCode': 450332,
                        'county': '恭城瑶族自治县',
                        'superCode': 450300
                    }
                ]
            },
            {
                'cityCode': 450400,
                'city': '梧州市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450401,
                        'county': '市辖区',
                        'superCode': 450400
                    },
                    {
                        'countyCode': 450403,
                        'county': '万秀区',
                        'superCode': 450400
                    },
                    {
                        'countyCode': 450404,
                        'county': '蝶山区',
                        'superCode': 450400
                    },
                    {
                        'countyCode': 450405,
                        'county': '长洲区',
                        'superCode': 450400
                    },
                    {
                        'countyCode': 450421,
                        'county': '苍梧县',
                        'superCode': 450400
                    },
                    {
                        'countyCode': 450422,
                        'county': '藤　县',
                        'superCode': 450400
                    },
                    {
                        'countyCode': 450423,
                        'county': '蒙山县',
                        'superCode': 450400
                    },
                    {
                        'countyCode': 450481,
                        'county': '岑溪市',
                        'superCode': 450400
                    }
                ]
            },
            {
                'cityCode': 450500,
                'city': '北海市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450501,
                        'county': '市辖区',
                        'superCode': 450500
                    },
                    {
                        'countyCode': 450502,
                        'county': '海城区',
                        'superCode': 450500
                    },
                    {
                        'countyCode': 450503,
                        'county': '银海区',
                        'superCode': 450500
                    },
                    {
                        'countyCode': 450512,
                        'county': '铁山港区',
                        'superCode': 450500
                    },
                    {
                        'countyCode': 450521,
                        'county': '合浦县',
                        'superCode': 450500
                    }
                ]
            },
            {
                'cityCode': 450600,
                'city': '防城港市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450601,
                        'county': '市辖区',
                        'superCode': 450600
                    },
                    {
                        'countyCode': 450602,
                        'county': '港口区',
                        'superCode': 450600
                    },
                    {
                        'countyCode': 450603,
                        'county': '防城区',
                        'superCode': 450600
                    },
                    {
                        'countyCode': 450621,
                        'county': '上思县',
                        'superCode': 450600
                    },
                    {
                        'countyCode': 450681,
                        'county': '东兴市',
                        'superCode': 450600
                    }
                ]
            },
            {
                'cityCode': 450700,
                'city': '钦州市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450701,
                        'county': '市辖区',
                        'superCode': 450700
                    },
                    {
                        'countyCode': 450702,
                        'county': '钦南区',
                        'superCode': 450700
                    },
                    {
                        'countyCode': 450703,
                        'county': '钦北区',
                        'superCode': 450700
                    },
                    {
                        'countyCode': 450721,
                        'county': '灵山县',
                        'superCode': 450700
                    },
                    {
                        'countyCode': 450722,
                        'county': '浦北县',
                        'superCode': 450700
                    }
                ]
            },
            {
                'cityCode': 450800,
                'city': '贵港市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450801,
                        'county': '市辖区',
                        'superCode': 450800
                    },
                    {
                        'countyCode': 450802,
                        'county': '港北区',
                        'superCode': 450800
                    },
                    {
                        'countyCode': 450803,
                        'county': '港南区',
                        'superCode': 450800
                    },
                    {
                        'countyCode': 450804,
                        'county': '覃塘区',
                        'superCode': 450800
                    },
                    {
                        'countyCode': 450821,
                        'county': '平南县',
                        'superCode': 450800
                    },
                    {
                        'countyCode': 450881,
                        'county': '桂平市',
                        'superCode': 450800
                    }
                ]
            },
            {
                'cityCode': 450900,
                'city': '玉林市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 450901,
                        'county': '市辖区',
                        'superCode': 450900
                    },
                    {
                        'countyCode': 450902,
                        'county': '玉州区',
                        'superCode': 450900
                    },
                    {
                        'countyCode': 450921,
                        'county': '容　县',
                        'superCode': 450900
                    },
                    {
                        'countyCode': 450922,
                        'county': '陆川县',
                        'superCode': 450900
                    },
                    {
                        'countyCode': 450923,
                        'county': '博白县',
                        'superCode': 450900
                    },
                    {
                        'countyCode': 450924,
                        'county': '兴业县',
                        'superCode': 450900
                    },
                    {
                        'countyCode': 450981,
                        'county': '北流市',
                        'superCode': 450900
                    }
                ]
            },
            {
                'cityCode': 451000,
                'city': '百色市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 451001,
                        'county': '市辖区',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451002,
                        'county': '右江区',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451021,
                        'county': '田阳县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451022,
                        'county': '田东县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451023,
                        'county': '平果县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451024,
                        'county': '德保县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451025,
                        'county': '靖西县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451026,
                        'county': '那坡县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451027,
                        'county': '凌云县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451028,
                        'county': '乐业县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451029,
                        'county': '田林县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451030,
                        'county': '西林县',
                        'superCode': 451000
                    },
                    {
                        'countyCode': 451031,
                        'county': '隆林各族自治县',
                        'superCode': 451000
                    }
                ]
            },
            {
                'cityCode': 451100,
                'city': '贺州市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 451101,
                        'county': '市辖区',
                        'superCode': 451100
                    },
                    {
                        'countyCode': 451102,
                        'county': '八步区',
                        'superCode': 451100
                    },
                    {
                        'countyCode': 451121,
                        'county': '昭平县',
                        'superCode': 451100
                    },
                    {
                        'countyCode': 451122,
                        'county': '钟山县',
                        'superCode': 451100
                    },
                    {
                        'countyCode': 451123,
                        'county': '富川瑶族自治县',
                        'superCode': 451100
                    }
                ]
            },
            {
                'cityCode': 451200,
                'city': '河池市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 451201,
                        'county': '市辖区',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451202,
                        'county': '金城江区',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451221,
                        'county': '南丹县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451222,
                        'county': '天峨县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451223,
                        'county': '凤山县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451224,
                        'county': '东兰县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451225,
                        'county': '罗城仫佬族自治县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451226,
                        'county': '环江毛南族自治县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451227,
                        'county': '巴马瑶族自治县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451228,
                        'county': '都安瑶族自治县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451229,
                        'county': '大化瑶族自治县',
                        'superCode': 451200
                    },
                    {
                        'countyCode': 451281,
                        'county': '宜州市',
                        'superCode': 451200
                    }
                ]
            },
            {
                'cityCode': 451300,
                'city': '来宾市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 451301,
                        'county': '市辖区',
                        'superCode': 451300
                    },
                    {
                        'countyCode': 451302,
                        'county': '兴宾区',
                        'superCode': 451300
                    },
                    {
                        'countyCode': 451321,
                        'county': '忻城县',
                        'superCode': 451300
                    },
                    {
                        'countyCode': 451322,
                        'county': '象州县',
                        'superCode': 451300
                    },
                    {
                        'countyCode': 451323,
                        'county': '武宣县',
                        'superCode': 451300
                    },
                    {
                        'countyCode': 451324,
                        'county': '金秀瑶族自治县',
                        'superCode': 451300
                    },
                    {
                        'countyCode': 451381,
                        'county': '合山市',
                        'superCode': 451300
                    }
                ]
            },
            {
                'cityCode': 451400,
                'city': '崇左市',
                'superCode': 450000,
                'counties': [
                    {
                        'countyCode': 451401,
                        'county': '市辖区',
                        'superCode': 451400
                    },
                    {
                        'countyCode': 451402,
                        'county': '江洲区',
                        'superCode': 451400
                    },
                    {
                        'countyCode': 451421,
                        'county': '扶绥县',
                        'superCode': 451400
                    },
                    {
                        'countyCode': 451422,
                        'county': '宁明县',
                        'superCode': 451400
                    },
                    {
                        'countyCode': 451423,
                        'county': '龙州县',
                        'superCode': 451400
                    },
                    {
                        'countyCode': 451424,
                        'county': '大新县',
                        'superCode': 451400
                    },
                    {
                        'countyCode': 451425,
                        'county': '天等县',
                        'superCode': 451400
                    },
                    {
                        'countyCode': 451481,
                        'county': '凭祥市',
                        'superCode': 451400
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 460000,
        'province': '海南省',
        'cities': [
            {
                'cityCode': 460100,
                'city': '海口市',
                'superCode': 460000,
                'counties': [
                    {
                        'countyCode': 460101,
                        'county': '市辖区',
                        'superCode': 460100
                    },
                    {
                        'countyCode': 460105,
                        'county': '秀英区',
                        'superCode': 460100
                    },
                    {
                        'countyCode': 460106,
                        'county': '龙华区',
                        'superCode': 460100
                    },
                    {
                        'countyCode': 460107,
                        'county': '琼山区',
                        'superCode': 460100
                    },
                    {
                        'countyCode': 460108,
                        'county': '美兰区',
                        'superCode': 460100
                    }
                ]
            },
            {
                'cityCode': 460200,
                'city': '三亚市',
                'superCode': 460000,
                'counties': [
                    {
                        'countyCode': 460201,
                        'county': '市辖区',
                        'superCode': 460200
                    }
                ]
            },
            {
                'cityCode': 469000,
                'city': '省直辖县级行政单位',
                'superCode': 460000,
                'counties': [
                    {
                        'countyCode': 469001,
                        'county': '五指山市',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469002,
                        'county': '琼海市',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469003,
                        'county': '儋州市',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469005,
                        'county': '文昌市',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469006,
                        'county': '万宁市',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469007,
                        'county': '东方市',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469025,
                        'county': '定安县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469026,
                        'county': '屯昌县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469027,
                        'county': '澄迈县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469028,
                        'county': '临高县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469030,
                        'county': '白沙黎族自治县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469031,
                        'county': '昌江黎族自治县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469033,
                        'county': '乐东黎族自治县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469034,
                        'county': '陵水黎族自治县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469035,
                        'county': '保亭黎族苗族自治县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469036,
                        'county': '琼中黎族苗族自治县',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469037,
                        'county': '西沙群岛',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469038,
                        'county': '南沙群岛',
                        'superCode': 469000
                    },
                    {
                        'countyCode': 469039,
                        'county': '中沙群岛的岛礁及其海域',
                        'superCode': 469000
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 500000,
        'province': '重庆市',
        'cities': [
            {
                'cityCode': 500100,
                'city': '重庆市',
                'superCode': 500000,
                'counties': [
                    {
                        'countyCode': 500101,
                        'county': '万州区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500102,
                        'county': '涪陵区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500103,
                        'county': '渝中区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500104,
                        'county': '大渡口区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500105,
                        'county': '江北区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500106,
                        'county': '沙坪坝区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500107,
                        'county': '九龙坡区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500108,
                        'county': '南岸区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500109,
                        'county': '北碚区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500110,
                        'county': '万盛区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500111,
                        'county': '双桥区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500112,
                        'county': '渝北区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500113,
                        'county': '巴南区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500114,
                        'county': '黔江区',
                        'superCode': 500100
                    },
                    {
                        'countyCode': 500115,
                        'county': '长寿区',
                        'superCode': 500100
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 510000,
        'province': '四川省',
        'cities': [
            {
                'cityCode': 510100,
                'city': '成都市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510101,
                        'county': '市辖区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510104,
                        'county': '锦江区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510105,
                        'county': '青羊区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510106,
                        'county': '金牛区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510107,
                        'county': '武侯区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510108,
                        'county': '成华区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510112,
                        'county': '龙泉驿区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510113,
                        'county': '青白江区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510114,
                        'county': '新都区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510115,
                        'county': '温江区',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510121,
                        'county': '金堂县',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510122,
                        'county': '双流县',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510124,
                        'county': '郫　县',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510129,
                        'county': '大邑县',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510131,
                        'county': '蒲江县',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510132,
                        'county': '新津县',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510181,
                        'county': '都江堰市',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510182,
                        'county': '彭州市',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510183,
                        'county': '邛崃市',
                        'superCode': 510100
                    },
                    {
                        'countyCode': 510184,
                        'county': '崇州市',
                        'superCode': 510100
                    }
                ]
            },
            {
                'cityCode': 510300,
                'city': '自贡市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510301,
                        'county': '市辖区',
                        'superCode': 510300
                    },
                    {
                        'countyCode': 510302,
                        'county': '自流井区',
                        'superCode': 510300
                    },
                    {
                        'countyCode': 510303,
                        'county': '贡井区',
                        'superCode': 510300
                    },
                    {
                        'countyCode': 510304,
                        'county': '大安区',
                        'superCode': 510300
                    },
                    {
                        'countyCode': 510311,
                        'county': '沿滩区',
                        'superCode': 510300
                    },
                    {
                        'countyCode': 510321,
                        'county': '荣　县',
                        'superCode': 510300
                    },
                    {
                        'countyCode': 510322,
                        'county': '富顺县',
                        'superCode': 510300
                    }
                ]
            },
            {
                'cityCode': 510400,
                'city': '攀枝花市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510401,
                        'county': '市辖区',
                        'superCode': 510400
                    },
                    {
                        'countyCode': 510402,
                        'county': '东　区',
                        'superCode': 510400
                    },
                    {
                        'countyCode': 510403,
                        'county': '西　区',
                        'superCode': 510400
                    },
                    {
                        'countyCode': 510411,
                        'county': '仁和区',
                        'superCode': 510400
                    },
                    {
                        'countyCode': 510421,
                        'county': '米易县',
                        'superCode': 510400
                    },
                    {
                        'countyCode': 510422,
                        'county': '盐边县',
                        'superCode': 510400
                    }
                ]
            },
            {
                'cityCode': 510500,
                'city': '泸州市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510501,
                        'county': '市辖区',
                        'superCode': 510500
                    },
                    {
                        'countyCode': 510502,
                        'county': '江阳区',
                        'superCode': 510500
                    },
                    {
                        'countyCode': 510503,
                        'county': '纳溪区',
                        'superCode': 510500
                    },
                    {
                        'countyCode': 510504,
                        'county': '龙马潭区',
                        'superCode': 510500
                    },
                    {
                        'countyCode': 510521,
                        'county': '泸　县',
                        'superCode': 510500
                    },
                    {
                        'countyCode': 510522,
                        'county': '合江县',
                        'superCode': 510500
                    },
                    {
                        'countyCode': 510524,
                        'county': '叙永县',
                        'superCode': 510500
                    },
                    {
                        'countyCode': 510525,
                        'county': '古蔺县',
                        'superCode': 510500
                    }
                ]
            },
            {
                'cityCode': 510600,
                'city': '德阳市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510601,
                        'county': '市辖区',
                        'superCode': 510600
                    },
                    {
                        'countyCode': 510603,
                        'county': '旌阳区',
                        'superCode': 510600
                    },
                    {
                        'countyCode': 510623,
                        'county': '中江县',
                        'superCode': 510600
                    },
                    {
                        'countyCode': 510626,
                        'county': '罗江县',
                        'superCode': 510600
                    },
                    {
                        'countyCode': 510681,
                        'county': '广汉市',
                        'superCode': 510600
                    },
                    {
                        'countyCode': 510682,
                        'county': '什邡市',
                        'superCode': 510600
                    },
                    {
                        'countyCode': 510683,
                        'county': '绵竹市',
                        'superCode': 510600
                    }
                ]
            },
            {
                'cityCode': 510700,
                'city': '绵阳市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510701,
                        'county': '市辖区',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510703,
                        'county': '涪城区',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510704,
                        'county': '游仙区',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510722,
                        'county': '三台县',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510723,
                        'county': '盐亭县',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510724,
                        'county': '安　县',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510725,
                        'county': '梓潼县',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510726,
                        'county': '北川羌族自治县',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510727,
                        'county': '平武县',
                        'superCode': 510700
                    },
                    {
                        'countyCode': 510781,
                        'county': '江油市',
                        'superCode': 510700
                    }
                ]
            },
            {
                'cityCode': 510800,
                'city': '广元市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510801,
                        'county': '市辖区',
                        'superCode': 510800
                    },
                    {
                        'countyCode': 510802,
                        'county': '市中区',
                        'superCode': 510800
                    },
                    {
                        'countyCode': 510811,
                        'county': '元坝区',
                        'superCode': 510800
                    },
                    {
                        'countyCode': 510812,
                        'county': '朝天区',
                        'superCode': 510800
                    },
                    {
                        'countyCode': 510821,
                        'county': '旺苍县',
                        'superCode': 510800
                    },
                    {
                        'countyCode': 510822,
                        'county': '青川县',
                        'superCode': 510800
                    },
                    {
                        'countyCode': 510823,
                        'county': '剑阁县',
                        'superCode': 510800
                    },
                    {
                        'countyCode': 510824,
                        'county': '苍溪县',
                        'superCode': 510800
                    }
                ]
            },
            {
                'cityCode': 510900,
                'city': '遂宁市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 510901,
                        'county': '市辖区',
                        'superCode': 510900
                    },
                    {
                        'countyCode': 510903,
                        'county': '船山区',
                        'superCode': 510900
                    },
                    {
                        'countyCode': 510904,
                        'county': '安居区',
                        'superCode': 510900
                    },
                    {
                        'countyCode': 510921,
                        'county': '蓬溪县',
                        'superCode': 510900
                    },
                    {
                        'countyCode': 510922,
                        'county': '射洪县',
                        'superCode': 510900
                    },
                    {
                        'countyCode': 510923,
                        'county': '大英县',
                        'superCode': 510900
                    }
                ]
            },
            {
                'cityCode': 511000,
                'city': '内江市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511001,
                        'county': '市辖区',
                        'superCode': 511000
                    },
                    {
                        'countyCode': 511002,
                        'county': '市中区',
                        'superCode': 511000
                    },
                    {
                        'countyCode': 511011,
                        'county': '东兴区',
                        'superCode': 511000
                    },
                    {
                        'countyCode': 511024,
                        'county': '威远县',
                        'superCode': 511000
                    },
                    {
                        'countyCode': 511025,
                        'county': '资中县',
                        'superCode': 511000
                    },
                    {
                        'countyCode': 511028,
                        'county': '隆昌县',
                        'superCode': 511000
                    }
                ]
            },
            {
                'cityCode': 511100,
                'city': '乐山市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511101,
                        'county': '市辖区',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511102,
                        'county': '市中区',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511111,
                        'county': '沙湾区',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511112,
                        'county': '五通桥区',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511113,
                        'county': '金口河区',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511123,
                        'county': '犍为县',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511124,
                        'county': '井研县',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511126,
                        'county': '夹江县',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511129,
                        'county': '沐川县',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511132,
                        'county': '峨边彝族自治县',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511133,
                        'county': '马边彝族自治县',
                        'superCode': 511100
                    },
                    {
                        'countyCode': 511181,
                        'county': '峨眉山市',
                        'superCode': 511100
                    }
                ]
            },
            {
                'cityCode': 511300,
                'city': '南充市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511301,
                        'county': '市辖区',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511302,
                        'county': '顺庆区',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511303,
                        'county': '高坪区',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511304,
                        'county': '嘉陵区',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511321,
                        'county': '南部县',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511322,
                        'county': '营山县',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511323,
                        'county': '蓬安县',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511324,
                        'county': '仪陇县',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511325,
                        'county': '西充县',
                        'superCode': 511300
                    },
                    {
                        'countyCode': 511381,
                        'county': '阆中市',
                        'superCode': 511300
                    }
                ]
            },
            {
                'cityCode': 511400,
                'city': '眉山市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511401,
                        'county': '市辖区',
                        'superCode': 511400
                    },
                    {
                        'countyCode': 511402,
                        'county': '东坡区',
                        'superCode': 511400
                    },
                    {
                        'countyCode': 511421,
                        'county': '仁寿县',
                        'superCode': 511400
                    },
                    {
                        'countyCode': 511422,
                        'county': '彭山县',
                        'superCode': 511400
                    },
                    {
                        'countyCode': 511423,
                        'county': '洪雅县',
                        'superCode': 511400
                    },
                    {
                        'countyCode': 511424,
                        'county': '丹棱县',
                        'superCode': 511400
                    },
                    {
                        'countyCode': 511425,
                        'county': '青神县',
                        'superCode': 511400
                    }
                ]
            },
            {
                'cityCode': 511500,
                'city': '宜宾市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511501,
                        'county': '市辖区',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511502,
                        'county': '翠屏区',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511521,
                        'county': '宜宾县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511522,
                        'county': '南溪县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511523,
                        'county': '江安县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511524,
                        'county': '长宁县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511525,
                        'county': '高　县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511526,
                        'county': '珙　县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511527,
                        'county': '筠连县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511528,
                        'county': '兴文县',
                        'superCode': 511500
                    },
                    {
                        'countyCode': 511529,
                        'county': '屏山县',
                        'superCode': 511500
                    }
                ]
            },
            {
                'cityCode': 511600,
                'city': '广安市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511601,
                        'county': '市辖区',
                        'superCode': 511600
                    },
                    {
                        'countyCode': 511602,
                        'county': '广安区',
                        'superCode': 511600
                    },
                    {
                        'countyCode': 511621,
                        'county': '岳池县',
                        'superCode': 511600
                    },
                    {
                        'countyCode': 511622,
                        'county': '武胜县',
                        'superCode': 511600
                    },
                    {
                        'countyCode': 511623,
                        'county': '邻水县',
                        'superCode': 511600
                    },
                    {
                        'countyCode': 511681,
                        'county': '华莹市',
                        'superCode': 511600
                    }
                ]
            },
            {
                'cityCode': 511700,
                'city': '达州市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511701,
                        'county': '市辖区',
                        'superCode': 511700
                    },
                    {
                        'countyCode': 511702,
                        'county': '通川区',
                        'superCode': 511700
                    },
                    {
                        'countyCode': 511721,
                        'county': '达　县',
                        'superCode': 511700
                    },
                    {
                        'countyCode': 511722,
                        'county': '宣汉县',
                        'superCode': 511700
                    },
                    {
                        'countyCode': 511723,
                        'county': '开江县',
                        'superCode': 511700
                    },
                    {
                        'countyCode': 511724,
                        'county': '大竹县',
                        'superCode': 511700
                    },
                    {
                        'countyCode': 511725,
                        'county': '渠　县',
                        'superCode': 511700
                    },
                    {
                        'countyCode': 511781,
                        'county': '万源市',
                        'superCode': 511700
                    }
                ]
            },
            {
                'cityCode': 511800,
                'city': '雅安市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511801,
                        'county': '市辖区',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511802,
                        'county': '雨城区',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511821,
                        'county': '名山县',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511822,
                        'county': '荥经县',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511823,
                        'county': '汉源县',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511824,
                        'county': '石棉县',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511825,
                        'county': '天全县',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511826,
                        'county': '芦山县',
                        'superCode': 511800
                    },
                    {
                        'countyCode': 511827,
                        'county': '宝兴县',
                        'superCode': 511800
                    }
                ]
            },
            {
                'cityCode': 511900,
                'city': '巴中市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 511901,
                        'county': '市辖区',
                        'superCode': 511900
                    },
                    {
                        'countyCode': 511902,
                        'county': '巴州区',
                        'superCode': 511900
                    },
                    {
                        'countyCode': 511921,
                        'county': '通江县',
                        'superCode': 511900
                    },
                    {
                        'countyCode': 511922,
                        'county': '南江县',
                        'superCode': 511900
                    },
                    {
                        'countyCode': 511923,
                        'county': '平昌县',
                        'superCode': 511900
                    }
                ]
            },
            {
                'cityCode': 512000,
                'city': '资阳市',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 512001,
                        'county': '市辖区',
                        'superCode': 512000
                    },
                    {
                        'countyCode': 512002,
                        'county': '雁江区',
                        'superCode': 512000
                    },
                    {
                        'countyCode': 512021,
                        'county': '安岳县',
                        'superCode': 512000
                    },
                    {
                        'countyCode': 512022,
                        'county': '乐至县',
                        'superCode': 512000
                    },
                    {
                        'countyCode': 512081,
                        'county': '简阳市',
                        'superCode': 512000
                    }
                ]
            },
            {
                'cityCode': 513200,
                'city': '阿坝藏族羌族自治州',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 513221,
                        'county': '汶川县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513222,
                        'county': '理　县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513223,
                        'county': '茂　县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513224,
                        'county': '松潘县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513225,
                        'county': '九寨沟县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513226,
                        'county': '金川县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513227,
                        'county': '小金县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513228,
                        'county': '黑水县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513229,
                        'county': '马尔康县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513230,
                        'county': '壤塘县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513231,
                        'county': '阿坝县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513232,
                        'county': '若尔盖县',
                        'superCode': 513200
                    },
                    {
                        'countyCode': 513233,
                        'county': '红原县',
                        'superCode': 513200
                    }
                ]
            },
            {
                'cityCode': 513300,
                'city': '甘孜藏族自治州',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 513321,
                        'county': '康定县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513322,
                        'county': '泸定县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513323,
                        'county': '丹巴县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513324,
                        'county': '九龙县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513325,
                        'county': '雅江县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513326,
                        'county': '道孚县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513327,
                        'county': '炉霍县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513328,
                        'county': '甘孜县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513329,
                        'county': '新龙县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513330,
                        'county': '德格县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513331,
                        'county': '白玉县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513332,
                        'county': '石渠县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513333,
                        'county': '色达县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513334,
                        'county': '理塘县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513335,
                        'county': '巴塘县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513336,
                        'county': '乡城县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513337,
                        'county': '稻城县',
                        'superCode': 513300
                    },
                    {
                        'countyCode': 513338,
                        'county': '得荣县',
                        'superCode': 513300
                    }
                ]
            },
            {
                'cityCode': 513400,
                'city': '凉山彝族自治州',
                'superCode': 510000,
                'counties': [
                    {
                        'countyCode': 513401,
                        'county': '西昌市',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513422,
                        'county': '木里藏族自治县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513423,
                        'county': '盐源县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513424,
                        'county': '德昌县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513425,
                        'county': '会理县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513426,
                        'county': '会东县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513427,
                        'county': '宁南县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513428,
                        'county': '普格县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513429,
                        'county': '布拖县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513430,
                        'county': '金阳县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513431,
                        'county': '昭觉县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513432,
                        'county': '喜德县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513433,
                        'county': '冕宁县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513434,
                        'county': '越西县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513435,
                        'county': '甘洛县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513436,
                        'county': '美姑县',
                        'superCode': 513400
                    },
                    {
                        'countyCode': 513437,
                        'county': '雷波县',
                        'superCode': 513400
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 520000,
        'province': '贵州省',
        'cities': [
            {
                'cityCode': 520100,
                'city': '贵阳市',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 520101,
                        'county': '市辖区',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520102,
                        'county': '南明区',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520103,
                        'county': '云岩区',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520111,
                        'county': '花溪区',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520112,
                        'county': '乌当区',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520113,
                        'county': '白云区',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520114,
                        'county': '小河区',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520121,
                        'county': '开阳县',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520122,
                        'county': '息烽县',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520123,
                        'county': '修文县',
                        'superCode': 520100
                    },
                    {
                        'countyCode': 520181,
                        'county': '清镇市',
                        'superCode': 520100
                    }
                ]
            },
            {
                'cityCode': 520200,
                'city': '六盘水市',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 520201,
                        'county': '钟山区',
                        'superCode': 520200
                    },
                    {
                        'countyCode': 520203,
                        'county': '六枝特区',
                        'superCode': 520200
                    },
                    {
                        'countyCode': 520221,
                        'county': '水城县',
                        'superCode': 520200
                    },
                    {
                        'countyCode': 520222,
                        'county': '盘　县',
                        'superCode': 520200
                    }
                ]
            },
            {
                'cityCode': 520300,
                'city': '遵义市',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 520301,
                        'county': '市辖区',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520302,
                        'county': '红花岗区',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520303,
                        'county': '汇川区',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520321,
                        'county': '遵义县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520322,
                        'county': '桐梓县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520323,
                        'county': '绥阳县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520324,
                        'county': '正安县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520325,
                        'county': '道真仡佬族苗族自治县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520326,
                        'county': '务川仡佬族苗族自治县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520327,
                        'county': '凤冈县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520328,
                        'county': '湄潭县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520329,
                        'county': '余庆县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520330,
                        'county': '习水县',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520381,
                        'county': '赤水市',
                        'superCode': 520300
                    },
                    {
                        'countyCode': 520382,
                        'county': '仁怀市',
                        'superCode': 520300
                    }
                ]
            },
            {
                'cityCode': 520400,
                'city': '安顺市',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 520401,
                        'county': '市辖区',
                        'superCode': 520400
                    },
                    {
                        'countyCode': 520402,
                        'county': '西秀区',
                        'superCode': 520400
                    },
                    {
                        'countyCode': 520421,
                        'county': '平坝县',
                        'superCode': 520400
                    },
                    {
                        'countyCode': 520422,
                        'county': '普定县',
                        'superCode': 520400
                    },
                    {
                        'countyCode': 520423,
                        'county': '镇宁布依族苗族自治县',
                        'superCode': 520400
                    },
                    {
                        'countyCode': 520424,
                        'county': '关岭布依族苗族自治县',
                        'superCode': 520400
                    },
                    {
                        'countyCode': 520425,
                        'county': '紫云苗族布依族自治县',
                        'superCode': 520400
                    }
                ]
            },
            {
                'cityCode': 522200,
                'city': '铜仁地区',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 522201,
                        'county': '铜仁市',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522222,
                        'county': '江口县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522223,
                        'county': '玉屏侗族自治县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522224,
                        'county': '石阡县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522225,
                        'county': '思南县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522226,
                        'county': '印江土家族苗族自治县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522227,
                        'county': '德江县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522228,
                        'county': '沿河土家族自治县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522229,
                        'county': '松桃苗族自治县',
                        'superCode': 522200
                    },
                    {
                        'countyCode': 522230,
                        'county': '万山特区',
                        'superCode': 522200
                    }
                ]
            },
            {
                'cityCode': 522300,
                'city': '黔西南布依族苗族自治州',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 522301,
                        'county': '兴义市',
                        'superCode': 522300
                    },
                    {
                        'countyCode': 522322,
                        'county': '兴仁县',
                        'superCode': 522300
                    },
                    {
                        'countyCode': 522323,
                        'county': '普安县',
                        'superCode': 522300
                    },
                    {
                        'countyCode': 522324,
                        'county': '晴隆县',
                        'superCode': 522300
                    },
                    {
                        'countyCode': 522325,
                        'county': '贞丰县',
                        'superCode': 522300
                    },
                    {
                        'countyCode': 522326,
                        'county': '望谟县',
                        'superCode': 522300
                    },
                    {
                        'countyCode': 522327,
                        'county': '册亨县',
                        'superCode': 522300
                    },
                    {
                        'countyCode': 522328,
                        'county': '安龙县',
                        'superCode': 522300
                    }
                ]
            },
            {
                'cityCode': 522400,
                'city': '毕节地区',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 522401,
                        'county': '毕节市',
                        'superCode': 522400
                    },
                    {
                        'countyCode': 522422,
                        'county': '大方县',
                        'superCode': 522400
                    },
                    {
                        'countyCode': 522423,
                        'county': '黔西县',
                        'superCode': 522400
                    },
                    {
                        'countyCode': 522424,
                        'county': '金沙县',
                        'superCode': 522400
                    },
                    {
                        'countyCode': 522425,
                        'county': '织金县',
                        'superCode': 522400
                    },
                    {
                        'countyCode': 522426,
                        'county': '纳雍县',
                        'superCode': 522400
                    },
                    {
                        'countyCode': 522427,
                        'county': '威宁彝族回族苗族自治县',
                        'superCode': 522400
                    },
                    {
                        'countyCode': 522428,
                        'county': '赫章县',
                        'superCode': 522400
                    }
                ]
            },
            {
                'cityCode': 522600,
                'city': '黔东南苗族侗族自治州',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 522601,
                        'county': '凯里市',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522622,
                        'county': '黄平县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522623,
                        'county': '施秉县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522624,
                        'county': '三穗县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522625,
                        'county': '镇远县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522626,
                        'county': '岑巩县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522627,
                        'county': '天柱县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522628,
                        'county': '锦屏县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522629,
                        'county': '剑河县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522630,
                        'county': '台江县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522631,
                        'county': '黎平县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522632,
                        'county': '榕江县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522633,
                        'county': '从江县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522634,
                        'county': '雷山县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522635,
                        'county': '麻江县',
                        'superCode': 522600
                    },
                    {
                        'countyCode': 522636,
                        'county': '丹寨县',
                        'superCode': 522600
                    }
                ]
            },
            {
                'cityCode': 522700,
                'city': '黔南布依族苗族自治州',
                'superCode': 520000,
                'counties': [
                    {
                        'countyCode': 522701,
                        'county': '都匀市',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522702,
                        'county': '福泉市',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522722,
                        'county': '荔波县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522723,
                        'county': '贵定县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522725,
                        'county': '瓮安县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522726,
                        'county': '独山县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522727,
                        'county': '平塘县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522728,
                        'county': '罗甸县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522729,
                        'county': '长顺县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522730,
                        'county': '龙里县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522731,
                        'county': '惠水县',
                        'superCode': 522700
                    },
                    {
                        'countyCode': 522732,
                        'county': '三都水族自治县',
                        'superCode': 522700
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 530000,
        'province': '云南省',
        'cities': [
            {
                'cityCode': 530100,
                'city': '昆明市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530101,
                        'county': '市辖区',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530102,
                        'county': '五华区',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530103,
                        'county': '盘龙区',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530111,
                        'county': '官渡区',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530112,
                        'county': '西山区',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530113,
                        'county': '东川区',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530121,
                        'county': '呈贡县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530122,
                        'county': '晋宁县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530124,
                        'county': '富民县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530125,
                        'county': '宜良县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530126,
                        'county': '石林彝族自治县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530127,
                        'county': '嵩明县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530128,
                        'county': '禄劝彝族苗族自治县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530129,
                        'county': '寻甸回族彝族自治县',
                        'superCode': 530100
                    },
                    {
                        'countyCode': 530181,
                        'county': '安宁市',
                        'superCode': 530100
                    }
                ]
            },
            {
                'cityCode': 530300,
                'city': '曲靖市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530301,
                        'county': '市辖区',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530302,
                        'county': '麒麟区',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530321,
                        'county': '马龙县',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530322,
                        'county': '陆良县',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530323,
                        'county': '师宗县',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530324,
                        'county': '罗平县',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530325,
                        'county': '富源县',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530326,
                        'county': '会泽县',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530328,
                        'county': '沾益县',
                        'superCode': 530300
                    },
                    {
                        'countyCode': 530381,
                        'county': '宣威市',
                        'superCode': 530300
                    }
                ]
            },
            {
                'cityCode': 530400,
                'city': '玉溪市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530401,
                        'county': '市辖区',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530402,
                        'county': '红塔区',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530421,
                        'county': '江川县',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530422,
                        'county': '澄江县',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530423,
                        'county': '通海县',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530424,
                        'county': '华宁县',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530425,
                        'county': '易门县',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530426,
                        'county': '峨山彝族自治县',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530427,
                        'county': '新平彝族傣族自治县',
                        'superCode': 530400
                    },
                    {
                        'countyCode': 530428,
                        'county': '元江哈尼族彝族傣族自治县',
                        'superCode': 530400
                    }
                ]
            },
            {
                'cityCode': 530500,
                'city': '保山市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530501,
                        'county': '市辖区',
                        'superCode': 530500
                    },
                    {
                        'countyCode': 530502,
                        'county': '隆阳区',
                        'superCode': 530500
                    },
                    {
                        'countyCode': 530521,
                        'county': '施甸县',
                        'superCode': 530500
                    },
                    {
                        'countyCode': 530522,
                        'county': '腾冲县',
                        'superCode': 530500
                    },
                    {
                        'countyCode': 530523,
                        'county': '龙陵县',
                        'superCode': 530500
                    },
                    {
                        'countyCode': 530524,
                        'county': '昌宁县',
                        'superCode': 530500
                    }
                ]
            },
            {
                'cityCode': 530600,
                'city': '昭通市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530601,
                        'county': '市辖区',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530602,
                        'county': '昭阳区',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530621,
                        'county': '鲁甸县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530622,
                        'county': '巧家县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530623,
                        'county': '盐津县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530624,
                        'county': '大关县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530625,
                        'county': '永善县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530626,
                        'county': '绥江县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530627,
                        'county': '镇雄县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530628,
                        'county': '彝良县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530629,
                        'county': '威信县',
                        'superCode': 530600
                    },
                    {
                        'countyCode': 530630,
                        'county': '水富县',
                        'superCode': 530600
                    }
                ]
            },
            {
                'cityCode': 530700,
                'city': '丽江市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530701,
                        'county': '市辖区',
                        'superCode': 530700
                    },
                    {
                        'countyCode': 530702,
                        'county': '古城区',
                        'superCode': 530700
                    },
                    {
                        'countyCode': 530721,
                        'county': '玉龙纳西族自治县',
                        'superCode': 530700
                    },
                    {
                        'countyCode': 530722,
                        'county': '永胜县',
                        'superCode': 530700
                    },
                    {
                        'countyCode': 530723,
                        'county': '华坪县',
                        'superCode': 530700
                    },
                    {
                        'countyCode': 530724,
                        'county': '宁蒗彝族自治县',
                        'superCode': 530700
                    }
                ]
            },
            {
                'cityCode': 530800,
                'city': '思茅市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530801,
                        'county': '市辖区',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530802,
                        'county': '翠云区',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530821,
                        'county': '普洱哈尼族彝族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530822,
                        'county': '墨江哈尼族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530823,
                        'county': '景东彝族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530824,
                        'county': '景谷傣族彝族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530825,
                        'county': '镇沅彝族哈尼族拉祜族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530826,
                        'county': '江城哈尼族彝族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530827,
                        'county': '孟连傣族拉祜族佤族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530828,
                        'county': '澜沧拉祜族自治县',
                        'superCode': 530800
                    },
                    {
                        'countyCode': 530829,
                        'county': '西盟佤族自治县',
                        'superCode': 530800
                    }
                ]
            },
            {
                'cityCode': 530900,
                'city': '临沧市',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 530901,
                        'county': '市辖区',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530902,
                        'county': '临翔区',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530921,
                        'county': '凤庆县',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530922,
                        'county': '云　县',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530923,
                        'county': '永德县',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530924,
                        'county': '镇康县',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530925,
                        'county': '双江拉祜族佤族布朗族傣族自治县',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530926,
                        'county': '耿马傣族佤族自治县',
                        'superCode': 530900
                    },
                    {
                        'countyCode': 530927,
                        'county': '沧源佤族自治县',
                        'superCode': 530900
                    }
                ]
            },
            {
                'cityCode': 532300,
                'city': '楚雄彝族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 532301,
                        'county': '楚雄市',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532322,
                        'county': '双柏县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532323,
                        'county': '牟定县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532324,
                        'county': '南华县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532325,
                        'county': '姚安县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532326,
                        'county': '大姚县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532327,
                        'county': '永仁县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532328,
                        'county': '元谋县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532329,
                        'county': '武定县',
                        'superCode': 532300
                    },
                    {
                        'countyCode': 532331,
                        'county': '禄丰县',
                        'superCode': 532300
                    }
                ]
            },
            {
                'cityCode': 532500,
                'city': '红河哈尼族彝族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 532501,
                        'county': '个旧市',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532502,
                        'county': '开远市',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532522,
                        'county': '蒙自县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532523,
                        'county': '屏边苗族自治县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532524,
                        'county': '建水县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532525,
                        'county': '石屏县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532526,
                        'county': '弥勒县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532527,
                        'county': '泸西县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532528,
                        'county': '元阳县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532529,
                        'county': '红河县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532530,
                        'county': '金平苗族瑶族傣族自治县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532531,
                        'county': '绿春县',
                        'superCode': 532500
                    },
                    {
                        'countyCode': 532532,
                        'county': '河口瑶族自治县',
                        'superCode': 532500
                    }
                ]
            },
            {
                'cityCode': 532600,
                'city': '文山壮族苗族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 532621,
                        'county': '文山县',
                        'superCode': 532600
                    },
                    {
                        'countyCode': 532622,
                        'county': '砚山县',
                        'superCode': 532600
                    },
                    {
                        'countyCode': 532623,
                        'county': '西畴县',
                        'superCode': 532600
                    },
                    {
                        'countyCode': 532624,
                        'county': '麻栗坡县',
                        'superCode': 532600
                    },
                    {
                        'countyCode': 532625,
                        'county': '马关县',
                        'superCode': 532600
                    },
                    {
                        'countyCode': 532626,
                        'county': '丘北县',
                        'superCode': 532600
                    },
                    {
                        'countyCode': 532627,
                        'county': '广南县',
                        'superCode': 532600
                    },
                    {
                        'countyCode': 532628,
                        'county': '富宁县',
                        'superCode': 532600
                    }
                ]
            },
            {
                'cityCode': 532800,
                'city': '西双版纳傣族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 532801,
                        'county': '景洪市',
                        'superCode': 532800
                    },
                    {
                        'countyCode': 532822,
                        'county': '勐海县',
                        'superCode': 532800
                    },
                    {
                        'countyCode': 532823,
                        'county': '勐腊县',
                        'superCode': 532800
                    }
                ]
            },
            {
                'cityCode': 532900,
                'city': '大理白族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 532901,
                        'county': '大理市',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532922,
                        'county': '漾濞彝族自治县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532923,
                        'county': '祥云县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532924,
                        'county': '宾川县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532925,
                        'county': '弥渡县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532926,
                        'county': '南涧彝族自治县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532927,
                        'county': '巍山彝族回族自治县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532928,
                        'county': '永平县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532929,
                        'county': '云龙县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532930,
                        'county': '洱源县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532931,
                        'county': '剑川县',
                        'superCode': 532900
                    },
                    {
                        'countyCode': 532932,
                        'county': '鹤庆县',
                        'superCode': 532900
                    }
                ]
            },
            {
                'cityCode': 533100,
                'city': '德宏傣族景颇族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 533102,
                        'county': '瑞丽市',
                        'superCode': 533100
                    },
                    {
                        'countyCode': 533103,
                        'county': '潞西市',
                        'superCode': 533100
                    },
                    {
                        'countyCode': 533122,
                        'county': '梁河县',
                        'superCode': 533100
                    },
                    {
                        'countyCode': 533123,
                        'county': '盈江县',
                        'superCode': 533100
                    },
                    {
                        'countyCode': 533124,
                        'county': '陇川县',
                        'superCode': 533100
                    }
                ]
            },
            {
                'cityCode': 533300,
                'city': '怒江傈僳族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 533321,
                        'county': '泸水县',
                        'superCode': 533300
                    },
                    {
                        'countyCode': 533323,
                        'county': '福贡县',
                        'superCode': 533300
                    },
                    {
                        'countyCode': 533324,
                        'county': '贡山独龙族怒族自治县',
                        'superCode': 533300
                    },
                    {
                        'countyCode': 533325,
                        'county': '兰坪白族普米族自治县',
                        'superCode': 533300
                    }
                ]
            },
            {
                'cityCode': 533400,
                'city': '迪庆藏族自治州',
                'superCode': 530000,
                'counties': [
                    {
                        'countyCode': 533421,
                        'county': '香格里拉县',
                        'superCode': 533400
                    },
                    {
                        'countyCode': 533422,
                        'county': '德钦县',
                        'superCode': 533400
                    },
                    {
                        'countyCode': 533423,
                        'county': '维西傈僳族自治县',
                        'superCode': 533400
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 540000,
        'province': '西藏自治区',
        'cities': [
            {
                'cityCode': 540100,
                'city': '拉萨市',
                'superCode': 540000,
                'counties': [
                    {
                        'countyCode': 540101,
                        'county': '市辖区',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540102,
                        'county': '城关区',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540121,
                        'county': '林周县',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540122,
                        'county': '当雄县',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540123,
                        'county': '尼木县',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540124,
                        'county': '曲水县',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540125,
                        'county': '堆龙德庆县',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540126,
                        'county': '达孜县',
                        'superCode': 540100
                    },
                    {
                        'countyCode': 540127,
                        'county': '墨竹工卡县',
                        'superCode': 540100
                    }
                ]
            },
            {
                'cityCode': 542100,
                'city': '昌都地区',
                'superCode': 540000,
                'counties': [
                    {
                        'countyCode': 542121,
                        'county': '昌都县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542122,
                        'county': '江达县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542123,
                        'county': '贡觉县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542124,
                        'county': '类乌齐县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542125,
                        'county': '丁青县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542126,
                        'county': '察雅县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542127,
                        'county': '八宿县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542128,
                        'county': '左贡县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542129,
                        'county': '芒康县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542132,
                        'county': '洛隆县',
                        'superCode': 542100
                    },
                    {
                        'countyCode': 542133,
                        'county': '边坝县',
                        'superCode': 542100
                    }
                ]
            },
            {
                'cityCode': 542200,
                'city': '山南地区',
                'superCode': 540000,
                'counties': [
                    {
                        'countyCode': 542221,
                        'county': '乃东县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542222,
                        'county': '扎囊县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542223,
                        'county': '贡嘎县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542224,
                        'county': '桑日县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542225,
                        'county': '琼结县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542226,
                        'county': '曲松县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542227,
                        'county': '措美县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542228,
                        'county': '洛扎县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542229,
                        'county': '加查县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542231,
                        'county': '隆子县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542232,
                        'county': '错那县',
                        'superCode': 542200
                    },
                    {
                        'countyCode': 542233,
                        'county': '浪卡子县',
                        'superCode': 542200
                    }
                ]
            },
            {
                'cityCode': 542300,
                'city': '日喀则地区',
                'superCode': 540000,
                'counties': [
                    {
                        'countyCode': 542301,
                        'county': '日喀则市',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542322,
                        'county': '南木林县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542323,
                        'county': '江孜县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542324,
                        'county': '定日县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542325,
                        'county': '萨迦县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542326,
                        'county': '拉孜县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542327,
                        'county': '昂仁县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542328,
                        'county': '谢通门县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542329,
                        'county': '白朗县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542330,
                        'county': '仁布县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542331,
                        'county': '康马县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542332,
                        'county': '定结县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542333,
                        'county': '仲巴县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542334,
                        'county': '亚东县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542335,
                        'county': '吉隆县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542336,
                        'county': '聂拉木县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542337,
                        'county': '萨嘎县',
                        'superCode': 542300
                    },
                    {
                        'countyCode': 542338,
                        'county': '岗巴县',
                        'superCode': 542300
                    }
                ]
            },
            {
                'cityCode': 542400,
                'city': '那曲地区',
                'superCode': 540000,
                'counties': [
                    {
                        'countyCode': 542421,
                        'county': '那曲县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542422,
                        'county': '嘉黎县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542423,
                        'county': '比如县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542424,
                        'county': '聂荣县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542425,
                        'county': '安多县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542426,
                        'county': '申扎县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542427,
                        'county': '索　县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542428,
                        'county': '班戈县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542429,
                        'county': '巴青县',
                        'superCode': 542400
                    },
                    {
                        'countyCode': 542430,
                        'county': '尼玛县',
                        'superCode': 542400
                    }
                ]
            },
            {
                'cityCode': 542500,
                'city': '阿里地区',
                'superCode': 540000,
                'counties': [
                    {
                        'countyCode': 542521,
                        'county': '普兰县',
                        'superCode': 542500
                    },
                    {
                        'countyCode': 542522,
                        'county': '札达县',
                        'superCode': 542500
                    },
                    {
                        'countyCode': 542523,
                        'county': '噶尔县',
                        'superCode': 542500
                    },
                    {
                        'countyCode': 542524,
                        'county': '日土县',
                        'superCode': 542500
                    },
                    {
                        'countyCode': 542525,
                        'county': '革吉县',
                        'superCode': 542500
                    },
                    {
                        'countyCode': 542526,
                        'county': '改则县',
                        'superCode': 542500
                    },
                    {
                        'countyCode': 542527,
                        'county': '措勤县',
                        'superCode': 542500
                    }
                ]
            },
            {
                'cityCode': 542600,
                'city': '林芝地区',
                'superCode': 540000,
                'counties': [
                    {
                        'countyCode': 542621,
                        'county': '林芝县',
                        'superCode': 542600
                    },
                    {
                        'countyCode': 542622,
                        'county': '工布江达县',
                        'superCode': 542600
                    },
                    {
                        'countyCode': 542623,
                        'county': '米林县',
                        'superCode': 542600
                    },
                    {
                        'countyCode': 542624,
                        'county': '墨脱县',
                        'superCode': 542600
                    },
                    {
                        'countyCode': 542625,
                        'county': '波密县',
                        'superCode': 542600
                    },
                    {
                        'countyCode': 542626,
                        'county': '察隅县',
                        'superCode': 542600
                    },
                    {
                        'countyCode': 542627,
                        'county': '朗　县',
                        'superCode': 542600
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 610000,
        'province': '陕西省',
        'cities': [
            {
                'cityCode': 610100,
                'city': '西安市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610101,
                        'county': '市辖区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610102,
                        'county': '新城区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610103,
                        'county': '碑林区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610104,
                        'county': '莲湖区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610111,
                        'county': '灞桥区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610112,
                        'county': '未央区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610113,
                        'county': '雁塔区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610114,
                        'county': '阎良区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610115,
                        'county': '临潼区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610116,
                        'county': '长安区',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610122,
                        'county': '蓝田县',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610124,
                        'county': '周至县',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610125,
                        'county': '户　县',
                        'superCode': 610100
                    },
                    {
                        'countyCode': 610126,
                        'county': '高陵县',
                        'superCode': 610100
                    }
                ]
            },
            {
                'cityCode': 610200,
                'city': '铜川市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610201,
                        'county': '市辖区',
                        'superCode': 610200
                    },
                    {
                        'countyCode': 610202,
                        'county': '王益区',
                        'superCode': 610200
                    },
                    {
                        'countyCode': 610203,
                        'county': '印台区',
                        'superCode': 610200
                    },
                    {
                        'countyCode': 610204,
                        'county': '耀州区',
                        'superCode': 610200
                    },
                    {
                        'countyCode': 610222,
                        'county': '宜君县',
                        'superCode': 610200
                    }
                ]
            },
            {
                'cityCode': 610300,
                'city': '宝鸡市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610301,
                        'county': '市辖区',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610302,
                        'county': '渭滨区',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610303,
                        'county': '金台区',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610304,
                        'county': '陈仓区',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610322,
                        'county': '凤翔县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610323,
                        'county': '岐山县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610324,
                        'county': '扶风县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610326,
                        'county': '眉　县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610327,
                        'county': '陇　县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610328,
                        'county': '千阳县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610329,
                        'county': '麟游县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610330,
                        'county': '凤　县',
                        'superCode': 610300
                    },
                    {
                        'countyCode': 610331,
                        'county': '太白县',
                        'superCode': 610300
                    }
                ]
            },
            {
                'cityCode': 610400,
                'city': '咸阳市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610401,
                        'county': '市辖区',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610402,
                        'county': '秦都区',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610403,
                        'county': '杨凌区',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610404,
                        'county': '渭城区',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610422,
                        'county': '三原县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610423,
                        'county': '泾阳县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610424,
                        'county': '乾　县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610425,
                        'county': '礼泉县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610426,
                        'county': '永寿县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610427,
                        'county': '彬　县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610428,
                        'county': '长武县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610429,
                        'county': '旬邑县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610430,
                        'county': '淳化县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610431,
                        'county': '武功县',
                        'superCode': 610400
                    },
                    {
                        'countyCode': 610481,
                        'county': '兴平市',
                        'superCode': 610400
                    }
                ]
            },
            {
                'cityCode': 610500,
                'city': '渭南市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610501,
                        'county': '市辖区',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610502,
                        'county': '临渭区',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610521,
                        'county': '华　县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610522,
                        'county': '潼关县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610523,
                        'county': '大荔县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610524,
                        'county': '合阳县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610525,
                        'county': '澄城县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610526,
                        'county': '蒲城县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610527,
                        'county': '白水县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610528,
                        'county': '富平县',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610581,
                        'county': '韩城市',
                        'superCode': 610500
                    },
                    {
                        'countyCode': 610582,
                        'county': '华阴市',
                        'superCode': 610500
                    }
                ]
            },
            {
                'cityCode': 610600,
                'city': '延安市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610601,
                        'county': '市辖区',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610621,
                        'county': '延长县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610622,
                        'county': '延川县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610623,
                        'county': '子长县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610624,
                        'county': '安塞县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610625,
                        'county': '志丹县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610626,
                        'county': '吴旗县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610627,
                        'county': '甘泉县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610628,
                        'county': '富　县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610629,
                        'county': '洛川县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610630,
                        'county': '宜川县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610631,
                        'county': '黄龙县',
                        'superCode': 610600
                    },
                    {
                        'countyCode': 610632,
                        'county': '黄陵县',
                        'superCode': 610600
                    }
                ]
            },
            {
                'cityCode': 610700,
                'city': '汉中市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610701,
                        'county': '市辖区',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610702,
                        'county': '汉台区',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610721,
                        'county': '南郑县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610722,
                        'county': '城固县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610723,
                        'county': '洋　县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610724,
                        'county': '西乡县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610725,
                        'county': '勉　县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610726,
                        'county': '宁强县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610727,
                        'county': '略阳县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610728,
                        'county': '镇巴县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610729,
                        'county': '留坝县',
                        'superCode': 610700
                    },
                    {
                        'countyCode': 610730,
                        'county': '佛坪县',
                        'superCode': 610700
                    }
                ]
            },
            {
                'cityCode': 610800,
                'city': '榆林市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610801,
                        'county': '市辖区',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610802,
                        'county': '榆阳区',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610821,
                        'county': '神木县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610822,
                        'county': '府谷县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610823,
                        'county': '横山县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610824,
                        'county': '靖边县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610825,
                        'county': '定边县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610826,
                        'county': '绥德县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610827,
                        'county': '米脂县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610828,
                        'county': '佳　县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610829,
                        'county': '吴堡县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610830,
                        'county': '清涧县',
                        'superCode': 610800
                    },
                    {
                        'countyCode': 610831,
                        'county': '子洲县',
                        'superCode': 610800
                    }
                ]
            },
            {
                'cityCode': 610900,
                'city': '安康市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 610901,
                        'county': '市辖区',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610902,
                        'county': '汉滨区',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610921,
                        'county': '汉阴县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610922,
                        'county': '石泉县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610923,
                        'county': '宁陕县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610924,
                        'county': '紫阳县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610925,
                        'county': '岚皋县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610926,
                        'county': '平利县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610927,
                        'county': '镇坪县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610928,
                        'county': '旬阳县',
                        'superCode': 610900
                    },
                    {
                        'countyCode': 610929,
                        'county': '白河县',
                        'superCode': 610900
                    }
                ]
            },
            {
                'cityCode': 611000,
                'city': '商洛市',
                'superCode': 610000,
                'counties': [
                    {
                        'countyCode': 611001,
                        'county': '市辖区',
                        'superCode': 611000
                    },
                    {
                        'countyCode': 611002,
                        'county': '商州区',
                        'superCode': 611000
                    },
                    {
                        'countyCode': 611021,
                        'county': '洛南县',
                        'superCode': 611000
                    },
                    {
                        'countyCode': 611022,
                        'county': '丹凤县',
                        'superCode': 611000
                    },
                    {
                        'countyCode': 611023,
                        'county': '商南县',
                        'superCode': 611000
                    },
                    {
                        'countyCode': 611024,
                        'county': '山阳县',
                        'superCode': 611000
                    },
                    {
                        'countyCode': 611025,
                        'county': '镇安县',
                        'superCode': 611000
                    },
                    {
                        'countyCode': 611026,
                        'county': '柞水县',
                        'superCode': 611000
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 620000,
        'province': '甘肃省',
        'cities': [
            {
                'cityCode': 620100,
                'city': '兰州市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620101,
                        'county': '市辖区',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620102,
                        'county': '城关区',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620103,
                        'county': '七里河区',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620104,
                        'county': '西固区',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620105,
                        'county': '安宁区',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620111,
                        'county': '红古区',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620121,
                        'county': '永登县',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620122,
                        'county': '皋兰县',
                        'superCode': 620100
                    },
                    {
                        'countyCode': 620123,
                        'county': '榆中县',
                        'superCode': 620100
                    }
                ]
            },
            {
                'cityCode': 620200,
                'city': '嘉峪关市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620201,
                        'county': '市辖区',
                        'superCode': 620200
                    }
                ]
            },
            {
                'cityCode': 620300,
                'city': '金昌市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620301,
                        'county': '市辖区',
                        'superCode': 620300
                    },
                    {
                        'countyCode': 620302,
                        'county': '金川区',
                        'superCode': 620300
                    },
                    {
                        'countyCode': 620321,
                        'county': '永昌县',
                        'superCode': 620300
                    }
                ]
            },
            {
                'cityCode': 620400,
                'city': '白银市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620401,
                        'county': '市辖区',
                        'superCode': 620400
                    },
                    {
                        'countyCode': 620402,
                        'county': '白银区',
                        'superCode': 620400
                    },
                    {
                        'countyCode': 620403,
                        'county': '平川区',
                        'superCode': 620400
                    },
                    {
                        'countyCode': 620421,
                        'county': '靖远县',
                        'superCode': 620400
                    },
                    {
                        'countyCode': 620422,
                        'county': '会宁县',
                        'superCode': 620400
                    },
                    {
                        'countyCode': 620423,
                        'county': '景泰县',
                        'superCode': 620400
                    }
                ]
            },
            {
                'cityCode': 620500,
                'city': '天水市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620501,
                        'county': '市辖区',
                        'superCode': 620500
                    },
                    {
                        'countyCode': 620502,
                        'county': '秦城区',
                        'superCode': 620500
                    },
                    {
                        'countyCode': 620503,
                        'county': '北道区',
                        'superCode': 620500
                    },
                    {
                        'countyCode': 620521,
                        'county': '清水县',
                        'superCode': 620500
                    },
                    {
                        'countyCode': 620522,
                        'county': '秦安县',
                        'superCode': 620500
                    },
                    {
                        'countyCode': 620523,
                        'county': '甘谷县',
                        'superCode': 620500
                    },
                    {
                        'countyCode': 620524,
                        'county': '武山县',
                        'superCode': 620500
                    },
                    {
                        'countyCode': 620525,
                        'county': '张家川回族自治县',
                        'superCode': 620500
                    }
                ]
            },
            {
                'cityCode': 620600,
                'city': '武威市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620601,
                        'county': '市辖区',
                        'superCode': 620600
                    },
                    {
                        'countyCode': 620602,
                        'county': '凉州区',
                        'superCode': 620600
                    },
                    {
                        'countyCode': 620621,
                        'county': '民勤县',
                        'superCode': 620600
                    },
                    {
                        'countyCode': 620622,
                        'county': '古浪县',
                        'superCode': 620600
                    },
                    {
                        'countyCode': 620623,
                        'county': '天祝藏族自治县',
                        'superCode': 620600
                    }
                ]
            },
            {
                'cityCode': 620700,
                'city': '张掖市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620701,
                        'county': '市辖区',
                        'superCode': 620700
                    },
                    {
                        'countyCode': 620702,
                        'county': '甘州区',
                        'superCode': 620700
                    },
                    {
                        'countyCode': 620721,
                        'county': '肃南裕固族自治县',
                        'superCode': 620700
                    },
                    {
                        'countyCode': 620722,
                        'county': '民乐县',
                        'superCode': 620700
                    },
                    {
                        'countyCode': 620723,
                        'county': '临泽县',
                        'superCode': 620700
                    },
                    {
                        'countyCode': 620724,
                        'county': '高台县',
                        'superCode': 620700
                    },
                    {
                        'countyCode': 620725,
                        'county': '山丹县',
                        'superCode': 620700
                    }
                ]
            },
            {
                'cityCode': 620800,
                'city': '平凉市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620801,
                        'county': '市辖区',
                        'superCode': 620800
                    },
                    {
                        'countyCode': 620802,
                        'county': '崆峒区',
                        'superCode': 620800
                    },
                    {
                        'countyCode': 620821,
                        'county': '泾川县',
                        'superCode': 620800
                    },
                    {
                        'countyCode': 620822,
                        'county': '灵台县',
                        'superCode': 620800
                    },
                    {
                        'countyCode': 620823,
                        'county': '崇信县',
                        'superCode': 620800
                    },
                    {
                        'countyCode': 620824,
                        'county': '华亭县',
                        'superCode': 620800
                    },
                    {
                        'countyCode': 620825,
                        'county': '庄浪县',
                        'superCode': 620800
                    },
                    {
                        'countyCode': 620826,
                        'county': '静宁县',
                        'superCode': 620800
                    }
                ]
            },
            {
                'cityCode': 620900,
                'city': '酒泉市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 620901,
                        'county': '市辖区',
                        'superCode': 620900
                    },
                    {
                        'countyCode': 620902,
                        'county': '肃州区',
                        'superCode': 620900
                    },
                    {
                        'countyCode': 620921,
                        'county': '金塔县',
                        'superCode': 620900
                    },
                    {
                        'countyCode': 620922,
                        'county': '安西县',
                        'superCode': 620900
                    },
                    {
                        'countyCode': 620923,
                        'county': '肃北蒙古族自治县',
                        'superCode': 620900
                    },
                    {
                        'countyCode': 620924,
                        'county': '阿克塞哈萨克族自治县',
                        'superCode': 620900
                    },
                    {
                        'countyCode': 620981,
                        'county': '玉门市',
                        'superCode': 620900
                    },
                    {
                        'countyCode': 620982,
                        'county': '敦煌市',
                        'superCode': 620900
                    }
                ]
            },
            {
                'cityCode': 621000,
                'city': '庆阳市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 621001,
                        'county': '市辖区',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621002,
                        'county': '西峰区',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621021,
                        'county': '庆城县',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621022,
                        'county': '环　县',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621023,
                        'county': '华池县',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621024,
                        'county': '合水县',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621025,
                        'county': '正宁县',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621026,
                        'county': '宁　县',
                        'superCode': 621000
                    },
                    {
                        'countyCode': 621027,
                        'county': '镇原县',
                        'superCode': 621000
                    }
                ]
            },
            {
                'cityCode': 621100,
                'city': '定西市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 621101,
                        'county': '市辖区',
                        'superCode': 621100
                    },
                    {
                        'countyCode': 621102,
                        'county': '安定区',
                        'superCode': 621100
                    },
                    {
                        'countyCode': 621121,
                        'county': '通渭县',
                        'superCode': 621100
                    },
                    {
                        'countyCode': 621122,
                        'county': '陇西县',
                        'superCode': 621100
                    },
                    {
                        'countyCode': 621123,
                        'county': '渭源县',
                        'superCode': 621100
                    },
                    {
                        'countyCode': 621124,
                        'county': '临洮县',
                        'superCode': 621100
                    },
                    {
                        'countyCode': 621125,
                        'county': '漳　县',
                        'superCode': 621100
                    },
                    {
                        'countyCode': 621126,
                        'county': '岷　县',
                        'superCode': 621100
                    }
                ]
            },
            {
                'cityCode': 621200,
                'city': '陇南市',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 621201,
                        'county': '市辖区',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621202,
                        'county': '武都区',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621221,
                        'county': '成　县',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621222,
                        'county': '文　县',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621223,
                        'county': '宕昌县',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621224,
                        'county': '康　县',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621225,
                        'county': '西和县',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621226,
                        'county': '礼　县',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621227,
                        'county': '徽　县',
                        'superCode': 621200
                    },
                    {
                        'countyCode': 621228,
                        'county': '两当县',
                        'superCode': 621200
                    }
                ]
            },
            {
                'cityCode': 622900,
                'city': '临夏回族自治州',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 622901,
                        'county': '临夏市',
                        'superCode': 622900
                    },
                    {
                        'countyCode': 622921,
                        'county': '临夏县',
                        'superCode': 622900
                    },
                    {
                        'countyCode': 622922,
                        'county': '康乐县',
                        'superCode': 622900
                    },
                    {
                        'countyCode': 622923,
                        'county': '永靖县',
                        'superCode': 622900
                    },
                    {
                        'countyCode': 622924,
                        'county': '广河县',
                        'superCode': 622900
                    },
                    {
                        'countyCode': 622925,
                        'county': '和政县',
                        'superCode': 622900
                    },
                    {
                        'countyCode': 622926,
                        'county': '东乡族自治县',
                        'superCode': 622900
                    },
                    {
                        'countyCode': 622927,
                        'county': '积石山保安族东乡族撒拉族自治县',
                        'superCode': 622900
                    }
                ]
            },
            {
                'cityCode': 623000,
                'city': '甘南藏族自治州',
                'superCode': 620000,
                'counties': [
                    {
                        'countyCode': 623001,
                        'county': '合作市',
                        'superCode': 623000
                    },
                    {
                        'countyCode': 623021,
                        'county': '临潭县',
                        'superCode': 623000
                    },
                    {
                        'countyCode': 623022,
                        'county': '卓尼县',
                        'superCode': 623000
                    },
                    {
                        'countyCode': 623023,
                        'county': '舟曲县',
                        'superCode': 623000
                    },
                    {
                        'countyCode': 623024,
                        'county': '迭部县',
                        'superCode': 623000
                    },
                    {
                        'countyCode': 623025,
                        'county': '玛曲县',
                        'superCode': 623000
                    },
                    {
                        'countyCode': 623026,
                        'county': '碌曲县',
                        'superCode': 623000
                    },
                    {
                        'countyCode': 623027,
                        'county': '夏河县',
                        'superCode': 623000
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 630000,
        'province': '青海省',
        'cities': [
            {
                'cityCode': 630100,
                'city': '西宁市',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 630101,
                        'county': '市辖区',
                        'superCode': 630100
                    },
                    {
                        'countyCode': 630102,
                        'county': '城东区',
                        'superCode': 630100
                    },
                    {
                        'countyCode': 630103,
                        'county': '城中区',
                        'superCode': 630100
                    },
                    {
                        'countyCode': 630104,
                        'county': '城西区',
                        'superCode': 630100
                    },
                    {
                        'countyCode': 630105,
                        'county': '城北区',
                        'superCode': 630100
                    },
                    {
                        'countyCode': 630121,
                        'county': '大通回族土族自治县',
                        'superCode': 630100
                    },
                    {
                        'countyCode': 630122,
                        'county': '湟中县',
                        'superCode': 630100
                    },
                    {
                        'countyCode': 630123,
                        'county': '湟源县',
                        'superCode': 630100
                    }
                ]
            },
            {
                'cityCode': 632100,
                'city': '海东地区',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 632121,
                        'county': '平安县',
                        'superCode': 632100
                    },
                    {
                        'countyCode': 632122,
                        'county': '民和回族土族自治县',
                        'superCode': 632100
                    },
                    {
                        'countyCode': 632123,
                        'county': '乐都县',
                        'superCode': 632100
                    },
                    {
                        'countyCode': 632126,
                        'county': '互助土族自治县',
                        'superCode': 632100
                    },
                    {
                        'countyCode': 632127,
                        'county': '化隆回族自治县',
                        'superCode': 632100
                    },
                    {
                        'countyCode': 632128,
                        'county': '循化撒拉族自治县',
                        'superCode': 632100
                    }
                ]
            },
            {
                'cityCode': 632200,
                'city': '海北藏族自治州',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 632221,
                        'county': '门源回族自治县',
                        'superCode': 632200
                    },
                    {
                        'countyCode': 632222,
                        'county': '祁连县',
                        'superCode': 632200
                    },
                    {
                        'countyCode': 632223,
                        'county': '海晏县',
                        'superCode': 632200
                    },
                    {
                        'countyCode': 632224,
                        'county': '刚察县',
                        'superCode': 632200
                    }
                ]
            },
            {
                'cityCode': 632300,
                'city': '黄南藏族自治州',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 632321,
                        'county': '同仁县',
                        'superCode': 632300
                    },
                    {
                        'countyCode': 632322,
                        'county': '尖扎县',
                        'superCode': 632300
                    },
                    {
                        'countyCode': 632323,
                        'county': '泽库县',
                        'superCode': 632300
                    },
                    {
                        'countyCode': 632324,
                        'county': '河南蒙古族自治县',
                        'superCode': 632300
                    }
                ]
            },
            {
                'cityCode': 632500,
                'city': '海南藏族自治州',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 632521,
                        'county': '共和县',
                        'superCode': 632500
                    },
                    {
                        'countyCode': 632522,
                        'county': '同德县',
                        'superCode': 632500
                    },
                    {
                        'countyCode': 632523,
                        'county': '贵德县',
                        'superCode': 632500
                    },
                    {
                        'countyCode': 632524,
                        'county': '兴海县',
                        'superCode': 632500
                    },
                    {
                        'countyCode': 632525,
                        'county': '贵南县',
                        'superCode': 632500
                    }
                ]
            },
            {
                'cityCode': 632600,
                'city': '果洛藏族自治州',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 632621,
                        'county': '玛沁县',
                        'superCode': 632600
                    },
                    {
                        'countyCode': 632622,
                        'county': '班玛县',
                        'superCode': 632600
                    },
                    {
                        'countyCode': 632623,
                        'county': '甘德县',
                        'superCode': 632600
                    },
                    {
                        'countyCode': 632624,
                        'county': '达日县',
                        'superCode': 632600
                    },
                    {
                        'countyCode': 632625,
                        'county': '久治县',
                        'superCode': 632600
                    },
                    {
                        'countyCode': 632626,
                        'county': '玛多县',
                        'superCode': 632600
                    }
                ]
            },
            {
                'cityCode': 632700,
                'city': '玉树藏族自治州',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 632721,
                        'county': '玉树县',
                        'superCode': 632700
                    },
                    {
                        'countyCode': 632722,
                        'county': '杂多县',
                        'superCode': 632700
                    },
                    {
                        'countyCode': 632723,
                        'county': '称多县',
                        'superCode': 632700
                    },
                    {
                        'countyCode': 632724,
                        'county': '治多县',
                        'superCode': 632700
                    },
                    {
                        'countyCode': 632725,
                        'county': '囊谦县',
                        'superCode': 632700
                    },
                    {
                        'countyCode': 632726,
                        'county': '曲麻莱县',
                        'superCode': 632700
                    }
                ]
            },
            {
                'cityCode': 632800,
                'city': '海西蒙古族藏族自治州',
                'superCode': 630000,
                'counties': [
                    {
                        'countyCode': 632801,
                        'county': '格尔木市',
                        'superCode': 632800
                    },
                    {
                        'countyCode': 632802,
                        'county': '德令哈市',
                        'superCode': 632800
                    },
                    {
                        'countyCode': 632821,
                        'county': '乌兰县',
                        'superCode': 632800
                    },
                    {
                        'countyCode': 632822,
                        'county': '都兰县',
                        'superCode': 632800
                    },
                    {
                        'countyCode': 632823,
                        'county': '天峻县',
                        'superCode': 632800
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 640000,
        'province': '宁夏回族自治区',
        'cities': [
            {
                'cityCode': 640100,
                'city': '银川市',
                'superCode': 640000,
                'counties': [
                    {
                        'countyCode': 640101,
                        'county': '市辖区',
                        'superCode': 640100
                    },
                    {
                        'countyCode': 640104,
                        'county': '兴庆区',
                        'superCode': 640100
                    },
                    {
                        'countyCode': 640105,
                        'county': '西夏区',
                        'superCode': 640100
                    },
                    {
                        'countyCode': 640106,
                        'county': '金凤区',
                        'superCode': 640100
                    },
                    {
                        'countyCode': 640121,
                        'county': '永宁县',
                        'superCode': 640100
                    },
                    {
                        'countyCode': 640122,
                        'county': '贺兰县',
                        'superCode': 640100
                    },
                    {
                        'countyCode': 640181,
                        'county': '灵武市',
                        'superCode': 640100
                    }
                ]
            },
            {
                'cityCode': 640200,
                'city': '石嘴山市',
                'superCode': 640000,
                'counties': [
                    {
                        'countyCode': 640201,
                        'county': '市辖区',
                        'superCode': 640200
                    },
                    {
                        'countyCode': 640202,
                        'county': '大武口区',
                        'superCode': 640200
                    },
                    {
                        'countyCode': 640205,
                        'county': '惠农区',
                        'superCode': 640200
                    },
                    {
                        'countyCode': 640221,
                        'county': '平罗县',
                        'superCode': 640200
                    }
                ]
            },
            {
                'cityCode': 640300,
                'city': '吴忠市',
                'superCode': 640000,
                'counties': [
                    {
                        'countyCode': 640301,
                        'county': '市辖区',
                        'superCode': 640300
                    },
                    {
                        'countyCode': 640302,
                        'county': '利通区',
                        'superCode': 640300
                    },
                    {
                        'countyCode': 640323,
                        'county': '盐池县',
                        'superCode': 640300
                    },
                    {
                        'countyCode': 640324,
                        'county': '同心县',
                        'superCode': 640300
                    },
                    {
                        'countyCode': 640381,
                        'county': '青铜峡市',
                        'superCode': 640300
                    }
                ]
            },
            {
                'cityCode': 640400,
                'city': '固原市',
                'superCode': 640000,
                'counties': [
                    {
                        'countyCode': 640401,
                        'county': '市辖区',
                        'superCode': 640400
                    },
                    {
                        'countyCode': 640402,
                        'county': '原州区',
                        'superCode': 640400
                    },
                    {
                        'countyCode': 640422,
                        'county': '西吉县',
                        'superCode': 640400
                    },
                    {
                        'countyCode': 640423,
                        'county': '隆德县',
                        'superCode': 640400
                    },
                    {
                        'countyCode': 640424,
                        'county': '泾源县',
                        'superCode': 640400
                    },
                    {
                        'countyCode': 640425,
                        'county': '彭阳县',
                        'superCode': 640400
                    }
                ]
            },
            {
                'cityCode': 640500,
                'city': '中卫市',
                'superCode': 640000,
                'counties': [
                    {
                        'countyCode': 640501,
                        'county': '市辖区',
                        'superCode': 640500
                    },
                    {
                        'countyCode': 640502,
                        'county': '沙坡头区',
                        'superCode': 640500
                    },
                    {
                        'countyCode': 640521,
                        'county': '中宁县',
                        'superCode': 640500
                    },
                    {
                        'countyCode': 640522,
                        'county': '海原县',
                        'superCode': 640500
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 650000,
        'province': '新疆维吾尔自治区',
        'cities': [
            {
                'cityCode': 650100,
                'city': '乌鲁木齐市',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 650101,
                        'county': '市辖区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650102,
                        'county': '天山区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650103,
                        'county': '沙依巴克区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650104,
                        'county': '新市区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650105,
                        'county': '水磨沟区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650106,
                        'county': '头屯河区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650107,
                        'county': '达坂城区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650108,
                        'county': '东山区',
                        'superCode': 650100
                    },
                    {
                        'countyCode': 650121,
                        'county': '乌鲁木齐县',
                        'superCode': 650100
                    }
                ]
            },
            {
                'cityCode': 650200,
                'city': '克拉玛依市',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 650201,
                        'county': '市辖区',
                        'superCode': 650200
                    },
                    {
                        'countyCode': 650202,
                        'county': '独山子区',
                        'superCode': 650200
                    },
                    {
                        'countyCode': 650203,
                        'county': '克拉玛依区',
                        'superCode': 650200
                    },
                    {
                        'countyCode': 650204,
                        'county': '白碱滩区',
                        'superCode': 650200
                    },
                    {
                        'countyCode': 650205,
                        'county': '乌尔禾区',
                        'superCode': 650200
                    }
                ]
            },
            {
                'cityCode': 652100,
                'city': '吐鲁番地区',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 652101,
                        'county': '吐鲁番市',
                        'superCode': 652100
                    },
                    {
                        'countyCode': 652122,
                        'county': '鄯善县',
                        'superCode': 652100
                    },
                    {
                        'countyCode': 652123,
                        'county': '托克逊县',
                        'superCode': 652100
                    }
                ]
            },
            {
                'cityCode': 652200,
                'city': '哈密地区',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 652201,
                        'county': '哈密市',
                        'superCode': 652200
                    },
                    {
                        'countyCode': 652222,
                        'county': '巴里坤哈萨克自治县',
                        'superCode': 652200
                    },
                    {
                        'countyCode': 652223,
                        'county': '伊吾县',
                        'superCode': 652200
                    }
                ]
            },
            {
                'cityCode': 652300,
                'city': '昌吉回族自治州',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 652301,
                        'county': '昌吉市',
                        'superCode': 652300
                    },
                    {
                        'countyCode': 652302,
                        'county': '阜康市',
                        'superCode': 652300
                    },
                    {
                        'countyCode': 652303,
                        'county': '米泉市',
                        'superCode': 652300
                    },
                    {
                        'countyCode': 652323,
                        'county': '呼图壁县',
                        'superCode': 652300
                    },
                    {
                        'countyCode': 652324,
                        'county': '玛纳斯县',
                        'superCode': 652300
                    },
                    {
                        'countyCode': 652325,
                        'county': '奇台县',
                        'superCode': 652300
                    },
                    {
                        'countyCode': 652327,
                        'county': '吉木萨尔县',
                        'superCode': 652300
                    },
                    {
                        'countyCode': 652328,
                        'county': '木垒哈萨克自治县',
                        'superCode': 652300
                    }
                ]
            },
            {
                'cityCode': 652700,
                'city': '博尔塔拉蒙古自治州',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 652701,
                        'county': '博乐市',
                        'superCode': 652700
                    },
                    {
                        'countyCode': 652722,
                        'county': '精河县',
                        'superCode': 652700
                    },
                    {
                        'countyCode': 652723,
                        'county': '温泉县',
                        'superCode': 652700
                    }
                ]
            },
            {
                'cityCode': 652800,
                'city': '巴音郭楞蒙古自治州',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 652801,
                        'county': '库尔勒市',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652822,
                        'county': '轮台县',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652823,
                        'county': '尉犁县',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652824,
                        'county': '若羌县',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652825,
                        'county': '且末县',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652826,
                        'county': '焉耆回族自治县',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652827,
                        'county': '和静县',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652828,
                        'county': '和硕县',
                        'superCode': 652800
                    },
                    {
                        'countyCode': 652829,
                        'county': '博湖县',
                        'superCode': 652800
                    }
                ]
            },
            {
                'cityCode': 652900,
                'city': '阿克苏地区',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 652901,
                        'county': '阿克苏市',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652922,
                        'county': '温宿县',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652923,
                        'county': '库车县',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652924,
                        'county': '沙雅县',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652925,
                        'county': '新和县',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652926,
                        'county': '拜城县',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652927,
                        'county': '乌什县',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652928,
                        'county': '阿瓦提县',
                        'superCode': 652900
                    },
                    {
                        'countyCode': 652929,
                        'county': '柯坪县',
                        'superCode': 652900
                    }
                ]
            },
            {
                'cityCode': 653000,
                'city': '克孜勒苏柯尔克孜自治州',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 653001,
                        'county': '阿图什市',
                        'superCode': 653000
                    },
                    {
                        'countyCode': 653022,
                        'county': '阿克陶县',
                        'superCode': 653000
                    },
                    {
                        'countyCode': 653023,
                        'county': '阿合奇县',
                        'superCode': 653000
                    },
                    {
                        'countyCode': 653024,
                        'county': '乌恰县',
                        'superCode': 653000
                    }
                ]
            },
            {
                'cityCode': 653100,
                'city': '喀什地区',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 653101,
                        'county': '喀什市',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653121,
                        'county': '疏附县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653122,
                        'county': '疏勒县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653123,
                        'county': '英吉沙县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653124,
                        'county': '泽普县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653125,
                        'county': '莎车县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653126,
                        'county': '叶城县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653127,
                        'county': '麦盖提县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653128,
                        'county': '岳普湖县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653129,
                        'county': '伽师县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653130,
                        'county': '巴楚县',
                        'superCode': 653100
                    },
                    {
                        'countyCode': 653131,
                        'county': '塔什库尔干塔吉克自治县',
                        'superCode': 653100
                    }
                ]
            },
            {
                'cityCode': 653200,
                'city': '和田地区',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 653201,
                        'county': '和田市',
                        'superCode': 653200
                    },
                    {
                        'countyCode': 653221,
                        'county': '和田县',
                        'superCode': 653200
                    },
                    {
                        'countyCode': 653222,
                        'county': '墨玉县',
                        'superCode': 653200
                    },
                    {
                        'countyCode': 653223,
                        'county': '皮山县',
                        'superCode': 653200
                    },
                    {
                        'countyCode': 653224,
                        'county': '洛浦县',
                        'superCode': 653200
                    },
                    {
                        'countyCode': 653225,
                        'county': '策勒县',
                        'superCode': 653200
                    },
                    {
                        'countyCode': 653226,
                        'county': '于田县',
                        'superCode': 653200
                    },
                    {
                        'countyCode': 653227,
                        'county': '民丰县',
                        'superCode': 653200
                    }
                ]
            },
            {
                'cityCode': 654000,
                'city': '伊犁哈萨克自治州',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 654002,
                        'county': '伊宁市',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654003,
                        'county': '奎屯市',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654021,
                        'county': '伊宁县',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654022,
                        'county': '察布查尔锡伯自治县',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654023,
                        'county': '霍城县',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654024,
                        'county': '巩留县',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654025,
                        'county': '新源县',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654026,
                        'county': '昭苏县',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654027,
                        'county': '特克斯县',
                        'superCode': 654000
                    },
                    {
                        'countyCode': 654028,
                        'county': '尼勒克县',
                        'superCode': 654000
                    }
                ]
            },
            {
                'cityCode': 654200,
                'city': '塔城地区',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 654201,
                        'county': '塔城市',
                        'superCode': 654200
                    },
                    {
                        'countyCode': 654202,
                        'county': '乌苏市',
                        'superCode': 654200
                    },
                    {
                        'countyCode': 654221,
                        'county': '额敏县',
                        'superCode': 654200
                    },
                    {
                        'countyCode': 654223,
                        'county': '沙湾县',
                        'superCode': 654200
                    },
                    {
                        'countyCode': 654224,
                        'county': '托里县',
                        'superCode': 654200
                    },
                    {
                        'countyCode': 654225,
                        'county': '裕民县',
                        'superCode': 654200
                    },
                    {
                        'countyCode': 654226,
                        'county': '和布克赛尔蒙古自治县',
                        'superCode': 654200
                    }
                ]
            },
            {
                'cityCode': 654300,
                'city': '阿勒泰地区',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 654301,
                        'county': '阿勒泰市',
                        'superCode': 654300
                    },
                    {
                        'countyCode': 654321,
                        'county': '布尔津县',
                        'superCode': 654300
                    },
                    {
                        'countyCode': 654322,
                        'county': '富蕴县',
                        'superCode': 654300
                    },
                    {
                        'countyCode': 654323,
                        'county': '福海县',
                        'superCode': 654300
                    },
                    {
                        'countyCode': 654324,
                        'county': '哈巴河县',
                        'superCode': 654300
                    },
                    {
                        'countyCode': 654325,
                        'county': '青河县',
                        'superCode': 654300
                    },
                    {
                        'countyCode': 654326,
                        'county': '吉木乃县',
                        'superCode': 654300
                    }
                ]
            },
            {
                'cityCode': 659000,
                'city': '省直辖行政单位',
                'superCode': 650000,
                'counties': [
                    {
                        'countyCode': 659001,
                        'county': '石河子市',
                        'superCode': 659000
                    },
                    {
                        'countyCode': 659002,
                        'county': '阿拉尔市',
                        'superCode': 659000
                    },
                    {
                        'countyCode': 659003,
                        'county': '图木舒克市',
                        'superCode': 659000
                    },
                    {
                        'countyCode': 659004,
                        'county': '五家渠市',
                        'superCode': 659000
                    }
                ]
            }
        ]
    },
    {
        'provinceCode': 710000,
        'province': '台湾省',
        'cities': [
            {
                'cityCode': 710100,
                'city': '台北市',
                'superCode': 710000,
                'counties': []
            },
            {
                'cityCode': 710200,
                'city': '台南市',
                'superCode': 710000,
                'counties': []
            },
            {
                'cityCode': 710300,
                'city': '台中市',
                'superCode': 710000,
                'counties': []
            },
            {
                'cityCode': 710400,
                'city': '高雄市',
                'superCode': 710000,
                'counties': []
            },
            {
                'cityCode': 710500,
                'city': '新竹市',
                'superCode': 710000,
                'counties': []
            },
            {
                'cityCode': 710600,
                'city': '基隆市',
                'superCode': 710000,
                'counties': []
            }
        ]
    },
    {
        'provinceCode': 810000,
        'province': '香港特别行政区',
        'cities': [
            {
                'cityCode': 810100,
                'city': '香港',
                'superCode': 810000,
                'counties': []
            }
        ]
    },
    {
        'provinceCode': 820000,
        'province': '澳门特别行政区',
        'cities': [
            {
                'cityCode': 820100,
                'city': '澳门',
                'superCode': 820000,
                'counties': []
            }
        ]
    }
]


export { provinceList }
