import './App.css';
import StaffRegistration from './pages/staffReg';
import DoctorRegistration from './pages/doctorReg';
import LoginPage from './pages/login';
import PatientRegistration from './pages/patientReg';
import SignUpAs from './pages/signupas';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <SignUpAs/> */}
      <PatientRegistration/>
      {/* <DoctorRegistration/> */}
      {/* <StaffRegistration/> */}
    </div>
  );
}

export default App;
