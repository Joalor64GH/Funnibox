/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Middle East", this.version = "7", this.date = "2019", this.folder = "asset-v7/", this.looptime = 6857, this.bpm = 140, this.totalframe = 342, this.nbpolo = 10, this.nbloopbonus = 3, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 27, this.recminloop = 3, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#138f00", this.col0 = "#138f00", this.col1 = "#138f00", this.col2 = "#138f00", this.col3 = "#083D00", this.col4 = "#138f00", this.animearray = [{
        name: "1_lead",
        color: "ff6419",
        uniqsnd: !0
    }, {
        name: "2_pouin",
        color: "ff6419",
        uniqsnd: !0
    }, {
        name: "3_tung",
        color: "ff6419",
        uniqsnd: !0
    }, {
        name: "4_tabla",
        color: "ff6419",
        uniqsnd: !0
    }, {
        name: "5_tuduki",
        color: "ff6419",
        uniqsnd: !0
    }, {
        name: "6_bass",
        color: "e11923",
        uniqsnd: !1
    }, {
        name: "7_bourdon",
        color: "e11923",
        uniqsnd: !0
    }, {
        name: "8_heyas",
        color: "e11923",
        uniqsnd: !0
    }, {
        name: "9_kum",
        color: "e11923",
        uniqsnd: !1
    }, {
        name: "10_string",
        color: "e11923",
        uniqsnd: !1
    }, {
        name: "11_citar",
        color: "328cd2",
        uniqsnd: !0
    }, {
        name: "12_guit",
        color: "328cd2",
        uniqsnd: !0
    }, {
        name: "13_tromp",
        color: "328cd2",
        uniqsnd: !1
    }, {
        name: "14_taoung",
        color: "328cd2",
        uniqsnd: !0
    }, {
        name: "15_sifle",
        color: "328cd2",
        uniqsnd: !1
    }, {
        name: "16_djindr",
        color: "32b441",
        uniqsnd: !0
    }, {
        name: "17_djinga",
        color: "32b441",
        uniqsnd: !0
    }, {
        name: "18_djinta",
        color: "32b441",
        uniqsnd: !0
    }, {
        name: "19_jeevan",
        color: "32b441",
        uniqsnd: !1
    }, {
        name: "20_yaha",
        color: "32b441",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Tez",
        src: "v7-b1-kofitez-hb.mp4",
        code: "1,5,6,16,17,18",
        sound: "bonus_kofitez",
        aspire: "aspire_kofitez"
    }, {
        name: "Saamane",
        src: "v7-b2-sapna-hb.mp4",
        code: "1,3,10,14,20",
        sound: "bonus_sapna",
        aspire: "aspire_sapna"
    }, {
        name: "Kabhee-Kabhee",
        src: "v7-b3-kabikabi-hb.mp4",
        code: "5,7,9,10,19",
        sound: "bonus_kabikabi",
        aspire: "aspire_kabikabi"
    }], this.unlockerarray = [];
    for (var n = 0, a = this.animearray.length; n < a; n++) {
        var i = this.animearray[n].name;
        this.animearray[n].soundA = i + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? i + "_a" : i + "_b", this.animearray[n].anime = i + "-sprite.png", this.animearray[n].animeData = i + ".json"
    }
};
