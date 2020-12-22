import './App.css';
import UserForm from './UserForm';
import { UserFormWithFormik } from './UserFormWithFormik';
import { UserFormWithFormikValidation } from './UserFormWithFormikValidation';

function App() {
  return (
    <div>
      <h1>Forms</h1>
      <hr/>
      <UserForm/>
      <hr/>
      <UserFormWithFormik/>
      <hr/>
      <UserFormWithFormikValidation/>
    </div>
  );
}

export default App;
