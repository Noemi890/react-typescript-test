import { HairColor } from "./Enums"

export interface User {
  name: string,
  age: number,
  email: string,
  hairColor: HairColor
}

export interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}