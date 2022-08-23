import './App.css';

import {Mimick, UseLocalStorageHook, UseInternalHook} from './components/index'

function App() {
  return (
    <div className="App">
      {/* <Mimick/> */}
      {/* <UseLocalStorageHook/> */}
      <UseInternalHook/>
    </div>
  );
}

export default App;
