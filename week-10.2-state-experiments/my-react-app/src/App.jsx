

function App() {
     const [bulbOn, setBulbOn] = useState (true);

  return 
    <div>
      <Light bulbOn = {bulbOn} setBulbOn/>
    </div> 
  
}

function Light() {
  return 
    <div>
      <LightBulb bulbOn = {bulbOn} a = {a}/>
      <LightSwitch bulbOn = {bulbOn} setBulbOn = {setBulbOn} />
    </div>
  
}

function LightSwitch({bulbOn}) {
  return 
    <div>
      {bulbOn ? "bulb on" : "Bulb off"} {a}
    </div>
  
}

function LightSwitch({bulbOn,setBulbOn}) {
  function toggle() {
    setButton(currentState => !currrentState )


  }
  return 
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  
}

export default App;