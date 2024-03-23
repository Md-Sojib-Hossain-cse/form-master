import './App.css'
import GrandFather from './Components/GrandFather/GrandFather'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('signUp info' , data);
  // }
  // const handleProfileUpdateSubmit = data => {
  //   console.log('update info' , data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm 
      formTitle={'signUp'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up from</h1>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitButton={"Update"} handleSubmit={handleProfileUpdateSubmit}>
        <div>
          <h2>Updated From</h2>
        </div>
      </ReusableForm> */}
      <GrandFather></GrandFather>
    </>
  )
}

export default App
