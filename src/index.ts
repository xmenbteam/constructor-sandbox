type Family = "woodwind" | "brass" | "string" | "percussion";
type Cred = { [key: string]: string };

abstract class Instrument {
  readonly _family: Family;
  #_player: string;
  #_password: string;

  get player() {
    return `${this.#_player} owns this instrument!`;
  }

  set player(value: string) {
    this.#_player = value;
  }

  get password() {
    return this.#_password;
  }

  changePlayerName(cred: Cred) {
    if (cred.role === "admin") {
      console.log(this.#_player, cred.newPlayer);

      this.player = cred.newPlayer;
    } else throw new Error("Not admin!");
  }

  returnPassword(cred: Cred) {
    if (cred.Role === "admin" || cred.name === this.#_player)
      return this.password;
    else throw new Error("You don't have permission!");
  }

  abstract play(): string;

  constructor(player: string, family: Family, password: string) {
    this._family = family;
    this.#_player = player;
    this.#_password = password;
  }
}

export class Clarinet extends Instrument {
  play(): string {
    return "Blow!";
  }

  constructor(player: string, family: Family, password: string) {
    super(player, family, password);
  }
}

const clarinet = new Clarinet("Sam", "woodwind", "password");

const credentials = {
  role: "admin",
  newPlayer: "Dave",
};

console.log(clarinet);
