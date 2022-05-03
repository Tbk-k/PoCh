import React, { useState } from 'react';

export const MainContext = React.createContext({
  isCurtainTime: '',
});

const MainProvider = ({ children }) => {
  const [isCurtainTime, setCurtainState] = useState(false);
  return <MainContext.Provider value={{ isCurtainTime, setCurtainState }}>{children}</MainContext.Provider>;
};

export default MainProvider;
