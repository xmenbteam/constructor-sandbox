type Family = "woodwind" | "brass" | "string" | "percussion";
type Cred = { [key: string]: string };

abstract class Instrument {
  readonly #family: Family;
  #player: string;
  #password: string;

  get player() {
    return `${this.#player} owns this instrument!`;
  }

  set player(value: string) {
    this.#player = value;
  }

  get password() {
    return this.#password;
  }
  //   set family(value: Family) {
  //     this.#family = value;
  //   }

  get family() {
    return this.#family;
  }

  changePlayerName(cred: Cred) {
    if (cred.role === "admin") {
      this.player = cred.newPlayer;
    } else throw new Error("Not admin!");
  }

  returnPassword(cred: Cred) {
    if (cred.role === "admin" || cred.name === this.#player)
      return this.password;
    else throw new Error("You don't have permission!");
  }

  changePassword(cred: Cred, oldPassword: string, newPassword: string) {
    if (
      (cred.role === "admin" || cred.name === this.#player) &&
      oldPassword === this.#password
    ) {
      this.#password = newPassword;
    } else throw new Error("Nope");
  }

  abstract play(): string;

  constructor(player: string, family: Family, password: string) {
    this.#family = family;
    this.#player = player;
    this.#password = password;
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

const oldPassword = "password";
const newPassword = "newPassword";

console.log(clarinet.returnPassword(credentials));

clarinet.changePassword(credentials, oldPassword, newPassword);

console.log(clarinet.returnPassword(credentials));

// console.log(clarinet);
