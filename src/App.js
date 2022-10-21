
import PersonCard from './PersonCard'
import './App.css';

const data = [
    {firstName: 'Jane', lastName: 'Doe', age: 45, hairColor: 'Black'},
    {firstName: 'John', lastName: 'Smith', age: 88, hairColor: 'Brown'},
    {firstName: 'Millard', lastName: 'Fillmore', age: 50, hairColor: 'Brown'},
    {firstName: 'Smith', lastName: 'Maria', age: 62, hairColor: 'Brown'},
]

function App() {
  return (
    <div className="App">
        {data.map(d =>{
            return(
                <PersonCard {... d}/>
                )

        })}

    </div>
  );
}

export default App;
