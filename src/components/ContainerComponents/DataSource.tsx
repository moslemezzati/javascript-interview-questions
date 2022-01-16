import React, { JSXElementConstructor, useEffect, useState } from "react";

interface Props {
  getDataFunc: () => Promise<object> | object, 
  component: JSXElementConstructor<any>,
  componentProps?: object
}

export default function DataSource ({getDataFunc, component: Component, componentProps}: Props): JSX.Element {
  const [state, setState] = useState<object>();
  
  useEffect(() => {
    (async () => {
      const response = await getDataFunc();
      setState(response);
    })();
  }, [getDataFunc]);
  
  return (
  <>
    {state ? <Component {...{...componentProps, ...state}} /> : <div>Loading...</div>}
  </>
  )
}; 