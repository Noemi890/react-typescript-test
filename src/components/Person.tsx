
import {FC, ChangeEvent, useState} from 'react';
import { User } from './Interfaces';

export const Person: FC<User> = ({name, age, email, hairColor}) => {

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
