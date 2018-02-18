"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_ts_1 = require("@cotto/utils.ts");
function create(type, fn = utils_ts_1.identity) {
    const creator = (payload, meta) => (Object.assign({ type, payload: fn(payload) }, meta));
    creator.type = type;
    return creator;
}
exports.create = create;
function match(creator) {
    return (command) => {
        return command != null && command.type === creator.type;
    };
}
exports.match = match;
function isCommand(command) {
    return Object(command) === command && typeof command.type === 'string';
}
exports.isCommand = isCommand;
//# sourceMappingURL=index.js.map