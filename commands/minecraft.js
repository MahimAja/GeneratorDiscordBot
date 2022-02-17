var _0x4e3b = [
    "discord.js",
    "exports",
    "minecraft",
    "RANDOM",
    "Sent\x20you\x20an\x20Account\x20in\x20DMs!",
    "author",
    "channel",
    "send",
    "This\x20Command\x20has\x20a\x20Cooldown\x20of\x205\x20Seconds.",
    "readFileSync",
    "epccM",
    "setColor",
    "TzNVm",
    "setFooter",
    "displayAvatarURL",
    "png",
    "toString",
    "pLuTt",
    "ZFWwy",
    "split",
    "floor",
    "random",
    "length",
    "catch",
    "sXaKv",
    "add",
    "jaqOc",
    "delete"
];
var _0xd300 = function(_0x10536b, _0x5f1775) {
    _0x10536b = _0x10536b - 0x0;
    var _0x340161 = _0x4e3b[_0x10536b];
    return _0x340161;
};
const discord = require(_0xd300("0x0"));
const fs = require("fs");
const cool = new Set();
module[_0xd300("0x1")] = {
    "name": _0xd300("0x2"),
    "run": async(_0x350374, _0x27cdac, _0x14fe27) => {
        var _0x7c85bc = {
            "epccM": "<:minecraft:915682470949716058>\x20Here\x20is\x20your\x20used/unused\x20Minecraft\x20Account!",
            "TzNVm": _0xd300("0x3"),
            "pLuTt": function(_0x1c3d92, _0x1aef5d) {
                return _0x1c3d92 === _0x1aef5d;
            },
            "ZFWwy": "None\x20left\x20in\x20Stock!",
            "sXaKv": function(_0x2fb989, _0x1eac36) {
                return _0x2fb989 !== _0x1eac36;
            },
            "RjRlh": "Failed\x20to\x20send\x20you\x20an\x20Account.",
            "MtnwA": _0xd300("0x4"),
            "jaqOc": function(_0x484b6f, _0x337460, _0x232e1f) {
                return _0x484b6f(_0x337460, _0x232e1f);
            }
        };
        if (cool["has"](_0x350374[_0xd300("0x5")]["id"]))
            return _0x350374[_0xd300("0x6")][_0xd300("0x7")](_0xd300("0x8"));
        let _0x28dba1 = fs[_0xd300("0x9")]("./minecraft-codes.txt");
        let _0x4d549c = new discord["MessageEmbed"]()["setDescription"](_0x7c85bc[_0xd300("0xa")])[_0xd300("0xb")](_0x7c85bc[_0xd300("0xc")])[_0xd300("0xd")](_0x14fe27["user"]["username"], _0x14fe27["user"][_0xd300("0xe")]({
            "format": _0xd300("0xf"),
            "size": 0x800
        }));
        let _0x41f0ae = _0x28dba1[_0xd300("0x10")]();
        if (_0x7c85bc[_0xd300("0x11")](_0x41f0ae, ""))
            return _0x350374[_0xd300("0x6")]["send"](_0x7c85bc[_0xd300("0x12")]);
        let _0x7bd56b = _0x41f0ae[_0xd300("0x13")]("\x0a");
        let _0x465d2c = _0x7bd56b[Math[_0xd300("0x14")](Math[_0xd300("0x15")]() * _0x7bd56b[_0xd300("0x16")])];
        let _0x1573a4 = 0x0;
        _0x350374["author"][_0xd300("0x7")](_0x465d2c, _0x4d549c)[_0xd300("0x17")](() => {
            _0x1573a4 = 0x1;
        });
        if (_0x7c85bc[_0xd300("0x18")](_0x1573a4, 0x0))
            return _0x350374[_0xd300("0x6")]["send"](_0x7c85bc["RjRlh"]);
        _0x350374["channel"]["send"](_0x7c85bc["MtnwA"]);
        cool[_0xd300("0x19")](_0x350374["author"]["id"]);
        _0x7c85bc[_0xd300("0x1a")](setTimeout, () => {
            cool[_0xd300("0x1b")](_0x350374[_0xd300("0x5")]["id"]);
        }, 0x1388);
    }
};