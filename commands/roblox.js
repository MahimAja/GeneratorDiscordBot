var _0x4e0b = [
    "exports",
    "roblox",
    "./roblox-codes.txt",
    "None\x20left\x20in\x20Stock!",
    "has",
    "channel",
    "send",
    "bSneF",
    "readFileSync",
    "wVucg",
    "setDescription",
    "xSiOk",
    "setColor",
    "setFooter",
    "user",
    "username",
    "tSRHP",
    "toString",
    "ygJQY",
    "split",
    "floor",
    "TuJqk",
    "random",
    "length",
    "author",
    "catch",
    "KkjFU",
    "add",
    "delete"
];
var _0x4b90 = function(_0x5b4dcf, _0x4d2c49) {
    _0x5b4dcf = _0x5b4dcf - 0x0;
    var _0x574879 = _0x4e0b[_0x5b4dcf];
    return _0x574879;
};
const discord = require("discord.js");
const fs = require("fs");
const cool = new Set();
module[_0x4b90("0x0")] = {
    "name": _0x4b90("0x1"),
    "run": async(_0x465e57, _0x378faf, _0x4ceabb) => {
        var _0x47fe62 = {
            "bSneF": "This\x20Command\x20has\x20a\x20Cooldown\x20of\x205\x20Seconds.",
            "wVucg": _0x4b90("0x2"),
            "xSiOk": "<:ROBLOX:915678874568884304>\x20Here\x20is\x20your\x20used/unused\x20Robux\x20Code!",
            "tSRHP": "png",
            "iCueT": function(_0x48bd27, _0x30a196) {
                return _0x48bd27 === _0x30a196;
            },
            "ygJQY": _0x4b90("0x3"),
            "TuJqk": function(_0x155860, _0x11742c) {
                return _0x155860 * _0x11742c;
            },
            "dOsMM": function(_0x436d9c, _0x341738) {
                return _0x436d9c !== _0x341738;
            },
            "KkjFU": "Failed\x20to\x20send\x20you\x20a\x20Code.",
            "AgqMR": "Sent\x20you\x20a\x20Code\x20in\x20DMs!",
            "ytsbD": function(_0x41c074, _0x49f370, _0x2119c3) {
                return _0x41c074(_0x49f370, _0x2119c3);
            }
        };
        if (cool[_0x4b90("0x4")](_0x465e57["author"]["id"]))
            return _0x465e57[_0x4b90("0x5")][_0x4b90("0x6")](_0x47fe62[_0x4b90("0x7")]);
        let _0x15460a = fs[_0x4b90("0x8")](_0x47fe62[_0x4b90("0x9")]);
        let _0x4aaf18 = new discord["MessageEmbed"]()[_0x4b90("0xa")](_0x47fe62[_0x4b90("0xb")])[_0x4b90("0xc")]("RANDOM")[_0x4b90("0xd")](_0x4ceabb[_0x4b90("0xe")][_0x4b90("0xf")], _0x4ceabb["user"]["displayAvatarURL"]({
            "format": _0x47fe62[_0x4b90("0x10")],
            "size": 0x800
        }));
        let _0xa374eb = _0x15460a[_0x4b90("0x11")]();
        if (_0x47fe62["iCueT"](_0xa374eb, ""))
            return _0x465e57[_0x4b90("0x5")][_0x4b90("0x6")](_0x47fe62[_0x4b90("0x12")]);
        let _0x548b3d = _0xa374eb[_0x4b90("0x13")]("\x0a");
        let _0x5bc89b = _0x548b3d[Math[_0x4b90("0x14")](_0x47fe62[_0x4b90("0x15")](Math[_0x4b90("0x16")](), _0x548b3d[_0x4b90("0x17")]))];
        let _0x46adad = 0x0;
        _0x465e57[_0x4b90("0x18")][_0x4b90("0x6")](_0x5bc89b, _0x4aaf18)[_0x4b90("0x19")](() => {
            _0x46adad = 0x1;
        });
        if (_0x47fe62["dOsMM"](_0x46adad, 0x0))
            return _0x465e57[_0x4b90("0x5")][_0x4b90("0x6")](_0x47fe62[_0x4b90("0x1a")]);
        _0x465e57[_0x4b90("0x5")]["send"](_0x47fe62["AgqMR"]);
        cool[_0x4b90("0x1b")](_0x465e57["author"]["id"]);
        _0x47fe62["ytsbD"](setTimeout, () => {
            cool[_0x4b90("0x1c")](_0x465e57[_0x4b90("0x18")]["id"]);
        }, 0x1388);
    }
};