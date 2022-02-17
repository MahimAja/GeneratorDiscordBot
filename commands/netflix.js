var _0x578a = [
    "discord.js",
    "RANDOM",
    "png",
    "has",
    "author",
    "channel",
    "send",
    "OeHlo",
    "readFileSync",
    "dauTK",
    "setFooter",
    "user",
    "displayAvatarURL",
    "None\x20left\x20in\x20Stock!",
    "split",
    "floor",
    "ATuyf",
    "random",
    "length",
    "catch",
    "NMiyh",
    "Sent\x20you\x20a\x20Code\x20in\x20DMs!",
    "add",
    "hguOX",
    "delete"
];
var _0xb1f6 = function(_0x1a026c, _0x2492de) {
    _0x1a026c = _0x1a026c - 0x0;
    var _0x2d8f05 = _0x578a[_0x1a026c];
    return _0x2d8f05;
};
const discord = require(_0xb1f6("0x0"));
const fs = require("fs");
const cool = new Set();
module["exports"] = {
    "name": "netflix",
    "run": async(_0x17c709, _0x5413c9, _0x495fb6) => {
        var _0x1ba7eb = {
            "OeHlo": "This\x20Command\x20has\x20a\x20Cooldown\x20of\x205\x20Seconds.",
            "dauTK": _0xb1f6("0x1"),
            "ZptXd": _0xb1f6("0x2"),
            "WdMhu": function(_0x10cd0b, _0x4d6fbb) {
                return _0x10cd0b === _0x4d6fbb;
            },
            "ATuyf": function(_0x31cd4e, _0x45a7cd) {
                return _0x31cd4e * _0x45a7cd;
            },
            "NMiyh": "Failed\x20to\x20send\x20you\x20a\x20Code.",
            "hguOX": function(_0x2d6637, _0x25eef1, _0x472139) {
                return _0x2d6637(_0x25eef1, _0x472139);
            }
        };
        if (cool[_0xb1f6("0x3")](_0x17c709[_0xb1f6("0x4")]["id"]))
            return _0x17c709[_0xb1f6("0x5")][_0xb1f6("0x6")](_0x1ba7eb[_0xb1f6("0x7")]);
        let _0x2c83c3 = fs[_0xb1f6("0x8")]("./netflix-codes.txt");
        let _0x2e9352 = new discord["MessageEmbed"]()["setDescription"]("<a:netflix:915682828170199060>\x20Here\x20is\x20your\x20used/unused\x20Netflix\x20Code!")["setColor"](_0x1ba7eb[_0xb1f6("0x9")])[_0xb1f6("0xa")](_0x495fb6[_0xb1f6("0xb")]["username"], _0x495fb6[_0xb1f6("0xb")][_0xb1f6("0xc")]({
            "format": _0x1ba7eb["ZptXd"],
            "size": 0x800
        }));
        let _0x398299 = _0x2c83c3["toString"]();
        if (_0x1ba7eb["WdMhu"](_0x398299, ""))
            return _0x17c709["channel"]["send"](_0xb1f6("0xd"));
        let _0x2dbfc2 = _0x398299[_0xb1f6("0xe")]("\x0a");
        let _0xadcd4c = _0x2dbfc2[Math[_0xb1f6("0xf")](_0x1ba7eb[_0xb1f6("0x10")](Math[_0xb1f6("0x11")](), _0x2dbfc2[_0xb1f6("0x12")]))];
        let _0x3e448a = 0x0;
        _0x17c709["author"][_0xb1f6("0x6")](_0xadcd4c, _0x2e9352)[_0xb1f6("0x13")](() => {
            _0x3e448a = 0x1;
        });
        if (_0x3e448a !== 0x0)
            return _0x17c709[_0xb1f6("0x5")][_0xb1f6("0x6")](_0x1ba7eb[_0xb1f6("0x14")]);
        _0x17c709[_0xb1f6("0x5")]["send"](_0xb1f6("0x15"));
        cool[_0xb1f6("0x16")](_0x17c709["author"]["id"]);
        _0x1ba7eb[_0xb1f6("0x17")](setTimeout, () => {
            cool[_0xb1f6("0x18")](_0x17c709[_0xb1f6("0x4")]["id"]);
        }, 0x1388);
    }
};