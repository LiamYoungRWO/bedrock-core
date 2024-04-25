import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Account from './Account';
import Appearance from './Appearance';
import SignIn from './SignIn';
import Sessions from './Sessions';
import MfaSms from './mfa/Sms';
import MfaAuthenticator from './mfa/Authenticator';
import Authenticator from './Authenticator';

export default class Settings extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact path="/settings" to="/settings/account" />
        <Route exact path="/settings/appearance" component={Appearance} />
        <Route exact path="/settings/account" component={Account} />
        <Route exact path="/settings/sign-in" component={SignIn} />
        <Route exact path="/settings/sessions" component={Sessions} />
        <Route exact path="/settings/mfa-sms" component={MfaSms} />
        <Route exact path="/settings/authenticator" component={Authenticator} />
        <Route
          exact
          path="/settings/mfa-authenticator"
          component={MfaAuthenticator}
        />
        <Redirect exact to="/settings/account" />
      </Switch>
    );
  }
}
