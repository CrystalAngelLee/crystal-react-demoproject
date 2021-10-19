import Counter from './scense/counter'
import CustomCounter from './scense/customCounter'


function App() {
  return (
    <div className="App">
      <div>简易计数器</div>
      <Counter/>
      <div>指定增减数值计数器</div>
      <CustomCounter/>
    </div>
  );
}

export default App;
