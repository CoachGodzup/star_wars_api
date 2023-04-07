import styles from '@/styles/Home.module.css'

export type Person ={
    name: string,
	height: string,
	mass: string,
	hair_color: string,
	skin_color: string,
	eye_color: string,
	birth_year: string,
	gender: string,
	homeworld: string,// https://swapi.dev/api/planets/1/,
	films: string[],
	species: string[],
	vehicles: string[],
	starships: string[],
	created: string,
	edited: string,
	url: string
}

type PersonCardProps = {
    person: Person;
}

export const PersonCard : React.FC<PersonCardProps> = ({ person }) => {
    return <div>
        <p>{ person.name }</p>
        <p>{ person.homeworld }</p>
    </div>
}