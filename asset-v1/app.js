/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Beta", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 5333, this.bpm = 90, this.totalframe = 260, this.nbpolo = 10, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !1, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#696969", this.col0 = "#696969", this.col1 = "#696969", this.col2 = "#696969", this.col3 = "#404040", this.col4 = "#696969", this.animearray = [{
        name: "1_lead",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "2_deux",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "3_kosh",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "4_shpok",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "5_tom",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "6_nouana",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "7_scratch",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "8_trill",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "9_bass",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "10_uh",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "11_nugu",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "12_guit",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "13_tromp",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "14_pouin",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "15_tung",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "16_aoun",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "17_hum",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "18_get",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "19_tellme",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "20_make",
        color: "828282",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "Heaven",
        src: "v1-b1-choir-hb.mp4",
        code: "1,2,3,11,15,16,20",
        sound: "bonus-choir",
        aspire: "aspire"
    }, {
        name: "Sinking",
        src: "v1-b2-sailor-hb.mp4",
        code: "2,3,5,8,10,12",
        sound: "bonus-sailor",
        aspire: "aspire-sailor"
    }, {
        name: "Snowy Drive",
        src: "v1-b3-santa-hb.mp4",
        code: "1,3,9,13,15,17,19",
        sound: "bonus-santa",
        aspire: "aspire-santa"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};