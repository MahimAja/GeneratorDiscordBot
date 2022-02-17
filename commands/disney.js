var _0x3576 = [
    "exports",
    "disney",
    "png",
    "None\x20left\x20in\x20Stock!",
    "Failed\x20to\x20send\x20you\x20an\x20Account.",
    "Sent\x20you\x20an\x20Account\x20in\x20DMs!",
    "channel",
    "send",
    "readFileSync",
    "setColor",
    "jwZXm",
    "setFooter",
    "user",
    "username",
    "displayAvatarURL",
    "toString",
    "VstNF",
    "mTxGn",
    "floor",
    "random",
    "length",
    "catch",
    "QQDYK",
    "author",
    "delete"
];
var _0xabf6 = function(_0x2c181e, _0x5a62c7) {
    _0x2c181e = _0x2c181e - 0x0;
    var _0x1c5410 = _0x3576[_0x2c181e];
    return _0x1c5410;
};
const discord = require("discord.js");
const fs = require("fs");
const cool = new Set();
module[_0xabf6("0x0")] = {
    "name": _0xabf6("0x1"),
    "run": async(_0x5a58d1, _0x529f7f, _0x27e424) => {
        var _0x32fbbc = {
            "OZWJU": "./disney-codes.txt",
            "jwZXm": "RANDOM",
            "PZJvs": _0xabf6("0x2"),
            "VstNF": function(_0x542791, _0x5e7c7f) {
                return _0x542791 === _0x5e7c7f;
            },
            "mTxGn": _0xabf6("0x3"),
            "TQBvv": function(_0x4bf948, _0x2595cb) {
                return _0x4bf948 !== _0x2595cb;
            },
            "SbQgB": _0xabf6("0x4"),
            "QQDYK": _0xabf6("0x5")
        };
        if (cool["has"](_0x5a58d1["author"]["id"]))
            return _0x5a58d1[_0xabf6("0x6")][_0xabf6("0x7")]("This\x20Command\x20has\x20a\x20Cooldown\x20of\x205\x20Seconds.");
        let _0x381757 = fs[_0xabf6("0x8")](_0x32fbbc["OZWJU"]);
        let _0x54b441 = new discord["MessageEmbed"]()["setDescription"]("<:disney:942072969776222208>\x20Here\x20is\x20your\x20used/unused\x20Disney\x20Account!")[_0xabf6("0x9")](_0x32fbbc[_0xabf6("0xa")])[_0xabf6("0xb")](_0x27e424[_0xabf6("0xc")][_0xabf6("0xd")], _0x27e424[_0xabf6("0xc")][_0xabf6("0xe")]({
            "format": _0x32fbbc["PZJvs"],
            "size": 0x800
        }));
        let _0x3c49d9 = _0x381757[_0xabf6("0xf")]();
        if (_0x32fbbc[_0xabf6("0x10")](_0x3c49d9, ""))
            return _0x5a58d1[_0xabf6("0x6")][_0xabf6("0x7")](_0x32fbbc[_0xabf6("0x11")]);
        let _0x4b25a3 = _0x3c49d9["split"]("\x0a");
        let _0x2af12f = _0x4b25a3[Math[_0xabf6("0x12")](Math[_0xabf6("0x13")]() * _0x4b25a3[_0xabf6("0x14")])];
        let _0x1387c9 = 0x0;
        _0x5a58d1["author"]["send"](_0x2af12f, _0x54b441)[_0xabf6("0x15")](() => {
            _0x1387c9 = 0x1;
        });
        if (_0x32fbbc["TQBvv"](_0x1387c9, 0x0))
            return _0x5a58d1[_0xabf6("0x6")][_0xabf6("0x7")](_0x32fbbc["SbQgB"]);
        _0x5a58d1[_0xabf6("0x6")][_0xabf6("0x7")](_0x32fbbc[_0xabf6("0x16")]);
        cool["add"](_0x5a58d1[_0xabf6("0x17")]["id"]);
        setTimeout(() => {
            cool[_0xabf6("0x18")](_0x5a58d1[_0xabf6("0x17")]["id"]);
        }, 0x1388);
    }
};