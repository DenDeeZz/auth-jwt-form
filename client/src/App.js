import React from "react";
import { reduxForm, Field } from "redux-form";
import './index.css';

const CForm = ({ handleSubmit }) => (
  <div>
  <form onSubmit={handleSubmit} action="/api">
  <div className="mat-in">
    <Field type="text" component="input" name="username" value="" id="username" />
    <span className="bar"></span>
    <label>Username</label>
  </div>
  <div className="mat-in">
    <Field type="password" component="input" name="password" value="" />
    <span className="bar"></span>
    <label>Password</label>
  </div>
  <button type="submit" name="submit" id="login">Login</button>
</form>
  {/* REMOVE IN FUTURE. JUST FOR STATUS VIEW */}
  <span className="--status">{localStorage.getItem('token_access')}</span>
  </div>
);

export default reduxForm({
  form: "foo",
  onSubmit: values => {
    fetch('/auth/', {method: "post", body: JSON.stringify(values)})
      .then((res) => res.json())
      .then((response) => {

    if(response.clientData.access === true) {
        console.log('Access allowed');
        console.log(response.clientData.token);
        localStorage.setItem('token_access', response.clientData.token);
    } else {
        localStorage.setItem('token_access', 'NO-ACCESS');
        console.log('Access denied');
    }

      //REFRESHING LOCAL STORAGE STATUS
        window.location.reload();
      //
    });
  }
})(CForm);
