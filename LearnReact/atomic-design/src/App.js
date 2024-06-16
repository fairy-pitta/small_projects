
import './App.css';
import { PrimaryButton } from './components/atoms/buttons/PrimaryButton';
import { SecondaryButton } from './components/atoms/buttons/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  image: "../src/images/boris-smokrovic-RLLR0oRz16Y-unsplash.jpg",
  name: "shuna",
  email: "example.com",
  tel: "1111122222",
  company: "hi pte ltd",
  hi: "website"

}
function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>

      <br>
      </br>

      <SearchInput></SearchInput>
      
      <UserCard />
      <user></user>

    </div>
  );
}

export default App;
