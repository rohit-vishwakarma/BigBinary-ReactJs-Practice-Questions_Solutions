import "./App.css";

import {
  Mimick,
  UseLocalStorageHook,
  UseInternalHook,
  FetchAndDisplayData1,
  FetchAndDisplayData2,
  DisplayTabularData1,
  DisplayTabularData2,
  DisplayTabularData3,
  StatesUpdateOnUnmountedComponent,
  FixCursorPosition
} from "./components/index";

function App() {
  return (
    <div className="App">
      {/* <Mimick/> */}
      {/* <UseLocalStorageHook/> */}
      {/* <UseInternalHook/> */}
      {/* <FetchAndDisplayData1/> */}
      {/* <FetchAndDisplayData2/> */}
      {/* <DisplayTabularData1/> */}
      {/* <DisplayTabularData2 /> */}
      {/* <DisplayTabularData3/> */}
      {/* <StatesUpdateOnUnmountedComponent/> */}
      <FixCursorPosition/>
    </div>
  );
}

export default App;
