import React, { Suspense } from "react";
import { Loading, ProjectStar } from "./pages";

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <ProjectStar />
      </Suspense>
    </div>
  );
};

export default App;
