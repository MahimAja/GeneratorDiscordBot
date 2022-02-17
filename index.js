var _0x2190 = [
    "discord.js",
    "commands",
    "Collection",
    "readdirSync",
    "./commands/",
    "filter",
    ".js",
    "name",
    "set",
    "ready",
    "./events/ready.js",
    "ZfYvP",
    "AFLpX",
    "message",
    "./events/message.js",
    "pbPRx",
    "login"
];
var _0x52ce = function (_0x3ede1f, _0x13a7b9) {
    _0x3ede1f = _0x3ede1f - 0x0;
    var _0xaa3056 = _0x2190[_0x3ede1f];
    return _0xaa3056;
};
const discord = require(_0x52ce("0x0"));
const client = new discord["Client"]();
const fs = require("fs");
const config = require("./config.json");
client[_0x52ce("0x1")] = new discord[(_0x52ce("0x2"))]();
let files = fs[_0x52ce("0x3")](_0x52ce("0x4"))[_0x52ce("0x5")](_0x59a7cb => _0x59a7cb["endsWith"](_0x52ce("0x6")));
for (let commands of files) {
    let _0x47e7db = require(_0x52ce("0x4") + commands);
    if (_0x47e7db[_0x52ce("0x7")]) {
        client["commands"][_0x52ce("0x8")](_0x47e7db[_0x52ce("0x7")], _0x47e7db);
    }
}
client["on"](_0x52ce("0x9"), async () => {
    var _0x1c0ff1 = {
        "ZfYvP": function (_0x4e45c4, _0xea8053) {
            return _0x4e45c4(_0xea8053);
        },
        "AFLpX": _0x52ce("0xa")
    };
    _0x1c0ff1[_0x52ce("0xb")](require, _0x1c0ff1[_0x52ce("0xc")])(client);
});
client["on"](_0x52ce("0xd"), async _0xeb61f5 => {
    var _0x4cca12 = {
        "IHAXU": function (_0x5f51a4, _0x50fdfb) {
            return _0x5f51a4(_0x50fdfb);
        },
        "pbPRx": _0x52ce("0xe")
    };
    _0x4cca12["IHAXU"](require, _0x4cca12[_0x52ce("0xf")])(_0xeb61f5, client);
});
client[_0x52ce("0x10")](config["token"]);