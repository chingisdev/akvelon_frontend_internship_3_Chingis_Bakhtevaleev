import Registration from "./Registration";

function App() {
  function handleRegistration(params) {
    console.log(params);
  }

  return (
      <Registration handleRegister={handleRegistration}/>
  );
}

export default App;
