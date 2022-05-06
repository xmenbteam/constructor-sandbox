"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Instrument__player, _Instrument__password;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clarinet = void 0;
class Instrument {
    constructor(player, family, password) {
        _Instrument__player.set(this, void 0);
        _Instrument__password.set(this, void 0);
        this._family = family;
        __classPrivateFieldSet(this, _Instrument__player, player, "f");
        __classPrivateFieldSet(this, _Instrument__password, password, "f");
    }
    get player() {
        return `${__classPrivateFieldGet(this, _Instrument__player, "f")} owns this instrument!`;
    }
    set player(value) {
        __classPrivateFieldSet(this, _Instrument__player, value, "f");
    }
    get password() {
        return __classPrivateFieldGet(this, _Instrument__password, "f");
    }
    changePlayerName(cred) {
        if (cred.role === "admin") {
            console.log(__classPrivateFieldGet(this, _Instrument__player, "f"), cred.newPlayer);
            this.player = cred.newPlayer;
        }
        else
            throw new Error("Not admin!");
    }
    returnPassword(cred) {
        if (cred.Role === "admin" || cred.name === __classPrivateFieldGet(this, _Instrument__player, "f"))
            return this.password;
        else
            throw new Error("You don't have permission!");
    }
}
_Instrument__player = new WeakMap(), _Instrument__password = new WeakMap();
class Clarinet extends Instrument {
    play() {
        return "Blow!";
    }
    constructor(player, family, password) {
        super(player, family, password);
    }
}
exports.Clarinet = Clarinet;
const clarinet = new Clarinet("Sam", "woodwind", "password");
const credentials = {
    role: "admin",
    newPlayer: "Dave",
};
console.log(clarinet);
