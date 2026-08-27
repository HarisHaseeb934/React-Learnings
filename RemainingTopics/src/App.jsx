import { lazy, Suspense, useState } from "react";
import { AutoSaveForm } from "./UseEffectEvent/AutoSaveForm";
import { Counter } from "./UseEffectEvent/Counter";
import { Animation } from "./UseLayoutEffect/Animation";
import { DivHeight } from "./UseLayoutEffect/DIvHeight";
import { Profiles } from "./ErrorBoundary/Profiles";

const DataFetching = lazy(() => import("./SuspenseLazyLoading/DataFetching"));

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShow((prev) => !prev)}>Show Me</button>
      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <DataFetching />
        </Suspense>
      )} */}

      <Profiles/>
    </>
  );
};

export default App;
