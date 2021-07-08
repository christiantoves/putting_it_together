import PersonCard from './components/BirthdayCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Christain"} lastName={"Toves"} age = {29} hairColor={"black"}/>
      <PersonCard firstName={"Justin"} lastName={"Aguilo"} age = {26} hairColor={"black"}/>
    </div>
  );
}

export default App;
