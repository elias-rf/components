import data from "./data";
import { Random } from "./random";

function Faker(seed: number) {
  const rnd = Random(seed);
  const fk = {
    nome: () => {
      const name = data.femaleName.concat(data.maleName);
      return (
        name[rnd.range(0, name.length - 1)] +
        " " +
        data.lastName[rnd.range(0, data.lastName.length - 1)]
      );
    },
    email: () => {
      const name = data.femaleName.concat(data.maleName);
      return (
        name[rnd.range(0, name.length - 1)].toLowerCase() +
        data.lastName[rnd.range(0, data.lastName.length - 1)].toLowerCase() +
        "@" +
        data.email[rnd.range(0, data.email.length - 1)]
      );
    },
  };
  return fk;
}

export default Faker;
