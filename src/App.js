import './App.css';

function App() {
  const age = 17;
  const isGreen = false;
  return (
  <div className="App">
    <div className ="content-wrapper">
      <User name="Stckrz" age={32} email="Stckrz@stckrz.com" />
      <Job salary="90000" position="Senior SDE" company="Amazon" />
    <User name="Noodle" age={12} email="noodle@noodle.com" />
      <Job salary="12000" position="junior SDE" company="Amazon" />
      <User name="Kori" age={33} email="kori@kori.com" />
      <Job salary="10000" position="Project Manager" company="Netflix" />
    </div>

    <div className="inline-stuff">
      {age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}
      <h1 style={{color: "red", backgroundColor: "black"}}> THIS HAS COLOR</h1>
    </div>

  </div>
);
}

const User = (props) => {
  return (
    <div className = "content-wrapper">
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
      <br />
    </div>
  )
};
























export default App;
