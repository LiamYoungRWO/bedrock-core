import React from 'react';
import { Header } from 'semantic';
import { Link } from 'react-router-dom';

import Logo from 'components/Logo';

export default ({ title }) => {
  return (
    <React.Fragment>
      <Link to="/">
        <Logo style={{ height: '75px', margin: 'auto', display: 'block' }} />
      </Link>
      <Header as="h3" textAlign="center" style={{ textTransform: 'uppercase' }}>
        {title}
      </Header>
    </React.Fragment>
  );
};
