import React from 'react';
import { CompositeContext } from 'src/context/CompositeContext';

export default function useAppContext() {
  const appContext = React.useContext(CompositeContext);

  return appContext;
}
