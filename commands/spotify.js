var _0x16b3 = [
    "exports",
    "spotify",
    "This\x20Command\x20has\x20a\x20Cooldown\x20of\x205\x20Seconds.",
    "./spotify-codes.txt",
    "RANDOM",
    "Sent\x20you\x20an\x20Account\x20in\x20DMs!",
    "has",
    "author",
    "send",
    "uUoEx",
    "readFileSync",
    "setDescription",
    "<:spotify:915674523062399006> \x20Here\x20is\x20your\x20used/unused\x20Spotify\x20Account!",
    "setColor",
    "vAtGo",
    "setFooter",
    "user",
    "displayAvatarURL",
    "toString",
    "TJSQd",
    "channel",
    "split",
    "KilGg",
    "random",
    "length",
    "catch",
    "Failed\x20to\x20send\x20you\x20an\x20Account.",
    "add"
];
var _0x3691 = function(_0x91f4a8, _0x1f788e) {
    _0x91f4a8 = _0x91f4a8 - 0x0;
    var _0x1f692f = _0x16b3[_0x91f4a8];
    return _0x1f692f;
};
const discord = require("discord.js");
const fs = require("fs");
const cool = new Set();
module[_0x3691("0x0")] = {
    "name": _0x3691("0x1"),
    "run": async(_0x2589cb, _0x68ddca, _0x3ac59e) => {
        var _0x41c8be = {
            "uUoEx": _0x3691("0x2"),
            "Ydxef": _0x3691("0x3"),
            "vAtGo": _0x3691("0x4"),
            "KYoyr": "png",
            "TJSQd": function(_0x732379, _0x5d0503) {
                return _0x732379 === _0x5d0503;
            },
            "KilGg": function(_0x587ef1, _0x249b44) {
                return _0x587ef1 * _0x249b44;
            },
            "wVFJZ": _0x3691("0x5")
        };
        if (cool[_0x3691("0x6")](_0x2589cb[_0x3691("0x7")]["id"]))
            return _0x2589cb["channel"][_0x3691("0x8")](_0x41c8be[_0x3691("0x9")]);
        let _0xdb9d01 = fs[_0x3691("0xa")](_0x41c8be["Ydxef"]);
        let _0x359ec4 = new discord["MessageEmbed"]()[_0x3691("0xb")](_0x3691("0xc"))[_0x3691("0xd")](_0x41c8be[_0x3691("0xe")])[_0x3691("0xf")](_0x3ac59e[_0x3691("0x10")]["username"], _0x3ac59e[_0x3691("0x10")][_0x3691("0x11")]({
            "format": _0x41c8be["KYoyr"],
            "size": 0x800
        }));
        let _0x2c80b4 = _0xdb9d01[_0x3691("0x12")]();
        if (_0x41c8be[_0x3691("0x13")](_0x2c80b4, ""))
            return _0x2589cb[_0x3691("0x14")][_0x3691("0x8")]("None\x20left\x20in\x20Stock!");
        let _0x2edf78 = _0x2c80b4[_0x3691("0x15")]("\x0a");
        let _0x5c747e = _0x2edf78[Math["floor"](_0x41c8be[_0x3691("0x16")](Math[_0x3691("0x17")](), _0x2edf78[_0x3691("0x18")]))];
        let _0x513019 = 0x0;
        _0x2589cb[_0x3691("0x7")]["send"](_0x5c747e, _0x359ec4)[_0x3691("0x19")](() => {
            _0x513019 = 0x1;
        });
        if (_0x513019 !== 0x0)
            return _0x2589cb[_0x3691("0x14")][_0x3691("0x8")](_0x3691("0x1a"));
        _0x2589cb[_0x3691("0x14")]["send"](_0x41c8be["wVFJZ"]);
        cool[_0x3691("0x1b")](_0x2589cb[_0x3691("0x7")]["id"]);
        setTimeout(() => {
            cool["delete"](_0x2589cb[_0x3691("0x7")]["id"]);
        }, 0x1388);
    }
};