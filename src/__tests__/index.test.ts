import { Clarinet } from "../";

describe("classes", () => {
  test("Clarinet", () => {
    const clarinet = new Clarinet("Sam", "woodwind", "password");

    const credentials = {
      role: "admin",
      name: "Sam",
    };

    console.log(clarinet.returnPassword(credentials));

    console.log(clarinet.player);
  });
});
