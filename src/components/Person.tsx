
import {FC, ChangeEvent, useState} from 'react';

export enum HairColor {
  Blonde= 'your hair is blonde, good for you!',
  Brown= 'Cool hair color!',
  Pink= 'Wow! That is so cool!'
}

interface Props {
  name: string,
  age: number,
  email: string,
  hairColor: HairColor
}

export const Person: FC<Props> = ({name, age, email, hairColor}) => {

  const [country, setCountry] = useState<string | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value)
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input placeholder='Write down your country..' onChange={onChange}/>

      {country}
      {hairColor}
    </div>
  );
}
