import { GET_ALL_PERSON } from '@/gql/getAllPerson';
import styles from '@/styles/Home.module.css'
import { useQuery } from '@apollo/client';
import { FormEventHandler } from 'react';

export default function Home() {
  const {error, loading, data} = useQuery(GET_ALL_PERSON);
  const submit:  FormEventHandler<HTMLFormElement> = (event) => {
    alert('submitted');
  }

  return (
      <div>
        <form className={styles.mainSearch} onSubmit={submit}>
          <input name='person' className={styles.heroInput}></input>
          <input type='submit' className={styles.heroSubmit}></input>
        </form>

        { 
          !loading ? 
            error ? <div>`Error! ${error.message}`</div> :    
            <div className={styles.personContainer}>
              <pre>
                {data}
              </pre>        
            </div>
          : <div>loading</div>}
      </div>
  )
}
