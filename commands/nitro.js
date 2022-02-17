var _0x55b4 = [
    "discord.js",
    "exports",
    "nitro",
    "Failed\x20to\x20send\x20you\x20a\x20Code.",
    "channel",
    "send",
    "WpDms",
    "readFileSync",
    "FSCeY",
    "MessageEmbed",
    "IoHZC",
    "setColor",
    "IcqXt",
    "user",
    "username",
    "uKveS",
    "taXEe",
    "DHtly",
    "floor",
    "aCDdg",
    "random",
    "length",
    "author",
    "catch",
    "JXazE",
    "nyHjZ",
    "Sent\x20you\x20a\x20Nitro\x20Code\x20in\x20DMs!"
];
var _0x8aa1 = function(_0x10cbd1, _0xa61ac3) {
    _0x10cbd1 = _0x10cbd1 - 0x0;
    var _0x1af1dc = _0x55b4[_0x10cbd1];
    return _0x1af1dc;
};
const discord = require(_0x8aa1("0x0"));
const fs = require("fs");
const cool = new Set();
module[_0x8aa1("0x1")] = {
    "name": _0x8aa1("0x2"),
    "run": async(_0x4212f4, _0x11e976, _0x2a11da) => {
        var _0x3fb060 = {
            "WpDms": "This\x20Command\x20has\x20a\x20Cooldown\x20of\x205\x20Seconds.",
            "FSCeY": "./nitro-codes.txt",
            "IoHZC": "<a:NitroBoost:915683465599533116>\x20Here\x20is\x20your\x20used/unused\x20Nitro\x20Code!",
            "IcqXt": "RANDOM",
            "uKveS": "png",
            "taXEe": function(_0x159467, _0x23fc35) {
                return _0x159467 === _0x23fc35;
            },
            "DHtly": "None\x20left\x20in\x20Stock!",
            "aCDdg": function(_0x4db18a, _0x53c675) {
                return _0x4db18a * _0x53c675;
            },
            "JXazE": function(_0x4ab94d, _0x26e653) {
                return _0x4ab94d !== _0x26e653;
            },
            "nyHjZ": _0x8aa1("0x3"),
            "oqmCW": function(_0x65fa84, _0x5a9db0, _0x41c4d0) {
                return _0x65fa84(_0x5a9db0, _0x41c4d0);
            }
        };
        if (cool["has"](_0x4212f4["author"]["id"]))
            return _0x4212f4[_0x8aa1("0x4")][_0x8aa1("0x5")](_0x3fb060[_0x8aa1("0x6")]);
        let _0x4b4648 = fs[_0x8aa1("0x7")](_0x3fb060[_0x8aa1("0x8")]);
        let _0x89ec4d = new discord[(_0x8aa1("0x9"))]()["setDescription"](_0x3fb060[_0x8aa1("0xa")])[_0x8aa1("0xb")](_0x3fb060[_0x8aa1("0xc")])["setFooter"](_0x2a11da[_0x8aa1("0xd")][_0x8aa1("0xe")], _0x2a11da[_0x8aa1("0xd")]["displayAvatarURL"]({
            "format": _0x3fb060[_0x8aa1("0xf")],
            "size": 0x800
        }));
        let _0x29834c = _0x4b4648["toString"]();
        if (_0x3fb060[_0x8aa1("0x10")](_0x29834c, ""))
            return _0x4212f4[_0x8aa1("0x4")]["send"](_0x3fb060[_0x8aa1("0x11")]);
        let _0x238f09 = _0x29834c["split"]("\x0a");
        let _0x340331 = _0x238f09[Math[_0x8aa1("0x12")](_0x3fb060[_0x8aa1("0x13")](Math[_0x8aa1("0x14")](), _0x238f09[_0x8aa1("0x15")]))];
        let _0x35898d = 0x0;
        _0x4212f4[_0x8aa1("0x16")][_0x8aa1("0x5")](_0x340331, _0x89ec4d)[_0x8aa1("0x17")](() => {
            _0x35898d = 0x1;
        });
        if (_0x3fb060[_0x8aa1("0x18")](_0x35898d, 0x0))
            return _0x4212f4[_0x8aa1("0x4")]["send"](_0x3fb060[_0x8aa1("0x19")]);
        _0x4212f4[_0x8aa1("0x4")][_0x8aa1("0x5")](_0x8aa1("0x1a"));
        cool["add"](_0x4212f4[_0x8aa1("0x16")]["id"]);
        _0x3fb060["oqmCW"](setTimeout, () => {
            cool["delete"](_0x4212f4["author"]["id"]);
        }, 0x1388);
    }
};