import React, { useState } from "react";
import ContextTheme from "./context/contextTheme";
import Game from "./game";

const App = () => {
  const themeHook = useState("light");
  return (
    <ContextTheme.Provider value={themeHook}>
      <div>
        <Game />
      </div>
    </ContextTheme.Provider>
  );
};

export default App;
