import React from 'react';
import KeycloakJS from 'keycloak-js';
import { useConfig } from '../hooks/useConfig';
import { useEffect, useState } from 'react';




export const DynamicKeycloakConfig = ({ children}) => {
  const config = useConfig('/config/sso.json');
  const [keycloak, setKeycloak] = useState(new KeycloakJS());

  useEffect(() => {
    if(config) {
      console.log('here')
      console.log(config)
      const kc = new KeycloakJS(JSON.stringify(config));
      console.log('end')
      console.log(JSON.stringify(config))
      setKeycloak(kc);
    }
  }, [config]);
  return <React.Fragment>{children(keycloak)}</React.Fragment>
}

export default DynamicKeycloakConfig;