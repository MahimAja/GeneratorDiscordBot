var _0x484c = [
    "discord.js",
    "exports",
    "nordvpn",
    "This\x20Command\x20has\x20a\x20Cooldown\x20of\x205\x20Seconds.",
    "./nordvpn-codes.txt",
    "<:nordvpn:915684058720264272>\x20Here\x20is\x20your\x20used/unused\x20NordVPN\x20Account!",
    "png",
    "None\x20left\x20in\x20Stock!",
    "Failed\x20to\x20send\x20you\x20an\x20Account.",
    "Sent\x20you\x20an\x20Account\x20in\x20DMs!",
    "has",
    "author",
    "channel",
    "NIzhp",
    "readFileSync",
    "owcrB",
    "MessageEmbed",
    "setDescription",
    "tkKaI",
    "RANDOM",
    "username",
    "user",
    "displayAvatarURL",
    "ULraY",
    "toString",
    "yYApE",
    "split",
    "send",
    "catch",
    "WZlHX",
    "mVJwf",
    "add"
];
var _0x3bd9 = function(_0x7f69b1, _0x4e635c) {
    _0x7f69b1 = _0x7f69b1 - 0x0;
    var _0x143f4f = _0x484c[_0x7f69b1];
    return _0x143f4f;
};
const discord = require(_0x3bd9("0x0"));
const fs = require("fs");
const cool = new Set();
module[_0x3bd9("0x1")] = {
    "name": _0x3bd9("0x2"),
    "run": async(_0x560df2, _0x4ef44b, _0x12cf2a) => {
        var _0x5d15d2 = {
            "NIzhp": _0x3bd9("0x3"),
            "owcrB": _0x3bd9("0x4"),
            "tkKaI": _0x3bd9("0x5"),
            "ULraY": _0x3bd9("0x6"),
            "bFwOP": function(_0x250d25, _0x4f3ede) {
                return _0x250d25 === _0x4f3ede;
            },
            "yYApE": _0x3bd9("0x7"),
            "WZlHX": _0x3bd9("0x8"),
            "mVJwf": _0x3bd9("0x9")
        };
        if (cool[_0x3bd9("0xa")](_0x560df2[_0x3bd9("0xb")]["id"]))
            return _0x560df2[_0x3bd9("0xc")]["send"](_0x5d15d2[_0x3bd9("0xd")]);
        let _0x3bdda5 = fs[_0x3bd9("0xe")](_0x5d15d2[_0x3bd9("0xf")]);
        let _0x24343b = new discord[(_0x3bd9("0x10"))]()[_0x3bd9("0x11")](_0x5d15d2[_0x3bd9("0x12")])["setColor"](_0x3bd9("0x13"))["setFooter"](_0x12cf2a["user"][_0x3bd9("0x14")], _0x12cf2a[_0x3bd9("0x15")][_0x3bd9("0x16")]({
            "format": _0x5d15d2[_0x3bd9("0x17")],
            "size": 0x800
        }));
        let _0x13ad9b = _0x3bdda5[_0x3bd9("0x18")]();
        if (_0x5d15d2["bFwOP"](_0x13ad9b, ""))
            return _0x560df2["channel"]["send"](_0x5d15d2[_0x3bd9("0x19")]);
        let _0x264256 = _0x13ad9b[_0x3bd9("0x1a")]("\x0a");
        let _0x14c862 = _0x264256[Math["floor"](Math["random"]() * _0x264256["length"])];
        let _0x2e0d70 = 0x0;
        _0x560df2[_0x3bd9("0xb")][_0x3bd9("0x1b")](_0x14c862, _0x24343b)[_0x3bd9("0x1c")](() => {
            _0x2e0d70 = 0x1;
        });
        if (_0x2e0d70 !== 0x0)
            return _0x560df2["channel"][_0x3bd9("0x1b")](_0x5d15d2[_0x3bd9("0x1d")]);
        _0x560df2[_0x3bd9("0xc")]["send"](_0x5d15d2[_0x3bd9("0x1e")]);
        cool[_0x3bd9("0x1f")](_0x560df2[_0x3bd9("0xb")]["id"]);
        setTimeout(() => {
            cool["delete"](_0x560df2["author"]["id"]);
        }, 0x1388);
    }
};