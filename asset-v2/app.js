/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Chivalry", this.version = "2", this.date = "2012", this.folder = "asset-v2/", this.looptime = 4800, this.bpm = 100, this.totalframe = 232, this.nbpolo = 10, this.nbloopbonus = 4, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 38, this.recminloop = 5, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#88001B", this.col0 = "#88001B", this.col1 = "#88001B", this.col2 = "#88001B", this.col3 = "#260008", this.col4 = "#88001B", this.animearray = [{
        name: "beat1_boom",
        color: "008200",
        uniqsnd: !1
    }, {
        name: "beat2_kashi",
        color: "289600",
        uniqsnd: !1
    }, {
        name: "beat3_paomeu",
        color: "50aa00",
        uniqsnd: !0
    }, {
        name: "beat4_ptttpeu",
        color: "78be00",
        uniqsnd: !1
    }, {
        name: "beat5_slupttt",
        color: "a0d200",
        uniqsnd: !0
    }, {
        name: "effet1_poulll",
        color: "ff0000",
        uniqsnd: !1
    }, {
        name: "effet2_tucati",
        color: "ff2800",
        uniqsnd: !0
    }, {
        name: "effet3_tuilopta",
        color: "ff5000",
        uniqsnd: !1
    }, {
        name: "effet4_tululou",
        color: "ff7800",
        uniqsnd: !0
    }, {
        name: "effet5_tumttt",
        color: "ffa000",
        uniqsnd: !1
    }, {
        name: "melo1_nananana",
        color: "1478aa",
        uniqsnd: !1
    }, {
        name: "melo2_pelulu",
        color: "288cbe",
        uniqsnd: !1
    }, {
        name: "melo3_siffle",
        color: "3ca0d2",
        uniqsnd: !1
    }, {
        name: "melo4_tatouti",
        color: "50b4e6",
        uniqsnd: !1
    }, {
        name: "melo5_tvutvutvu",
        color: "64c8fa",
        uniqsnd: !1
    }, {
        name: "coeur1_oaaah",
        color: "870078",
        uniqsnd: !1
    }, {
        name: "coeur2_cougou",
        color: "9b2896",
        uniqsnd: !1
    }, {
        name: "coeur3_porticoeur",
        color: "af50b4",
        uniqsnd: !1
    }, {
        name: "voix1_isit",
        color: "d7286e",
        uniqsnd: !1
    }, {
        name: "voix2_uare",
        color: "ff5096",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Your Best",
        src: "v2-b1-satisfy-hb.mp4",
        code: "1,3,4,6,8,9",
        sound: "bonus-satisfy",
        aspire: "aspire"
    }, {
        name: "Kiss",
        src: "v2-b2-miss-hb.mp4",
        code: "1,2,3,10,15,16",
        sound: "bonus-miss",
        aspire: "aspire"
    }, {
        name: "Not Alone",
        src: "v2-b3-world-hb.mp4",
        code: "1,2,4,13,14,17,18",
        sound: "bonus-world",
        aspire: "aspire"
    }];
    for (var o = 0, n = this.animearray.length; o < n; o++) {
        var i = this.animearray[o].name;
        this.animearray[o].soundA = i + "_a", this.animearray[o].soundB = this.animearray[o].uniqsnd ? i + "_a" : i + "_b", this.animearray[o].anime = i + "-sprite.png", this.animearray[o].animeData = i + ".json"
    }
};
