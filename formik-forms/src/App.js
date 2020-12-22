import './App.css';
import UserForm from './UserForm';
import { UserFormWithFormik } from './UserFormWithFormik';

function App() {
  return (
    <div>
      <h1>Forms</h1>
      <hr/>
      <UserForm/>
      <hr/>
      <UserFormWithFormik/>
    </div>
  );
}

export default App;
