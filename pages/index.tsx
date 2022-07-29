import Head from 'next/head';
import { useQuery } from '@apollo/client';

import QUERY_PEOPLE from './queryPeople.graphql';

import PersonComponent from './components/person';

import styles from '../styles/Home.module.css';

export default function Home() {
  const { data, loading, error } = useQuery(QUERY_PEOPLE);

  // check for errors
  if (error) {
    return <p>:( an error happened</p>;
  }

  // if all good return data
  return (
    <div className={styles.container}>
      <Head>
        <title>Persons GraphQL</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <p className='font-bold text-2xl h-20'>Persons</p>
      {loading && <p>loading...</p>}
      <div className='grid grid-cols-3 gap-1' style={{ width: '80%' }}>
        {data?.allPeople?.people
          ?.slice(0, process.env.showItems)
          .map((person, index) => (
            <div key={index} className='col-span-1'>
              <PersonComponent
                fullName={person.name}
                birthYear={person.birthYear}
                gender={person.gender}
                eyeColor={person.eyeColor}
                hairColor={person.hairColor}
                name={person.homeworld.population}
                population={person.homeworld.diameter}
                diameter={person.homeworld.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
