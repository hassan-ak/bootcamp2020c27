import './App.css';
import UserForm from './UserForm';
import { UserFormWithFormik } from './UserFormWithFormik';
import { UserFormWithFormikContext } from './UserFormWithFormikContext';
import { UserFormWithFormikMaterialUI } from './UserFormWithFormikMaterialUI';
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
      <hr/>
      <UserFormWithFormikContext/>
      <hr/>
      <UserFormWithFormikMaterialUI/>
    </div>
  );
}

export default App;
