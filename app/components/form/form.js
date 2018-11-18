import React from 'react';
import './form.scss';

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="input-text"
          required
        />
        <span className="floating-label">Your name</span>
      </div>
      <div className="form-group">
        <input
          type="email"
          className="input-text"
          required
        />
        <span className="floating-label">Your email address</span>
      </div>
      <div className="form-group">
        <input
          type="tel"
          className="input-text"
          noValidate
          required
        />
        <span className="floating-label">Your phone number</span>
      </div>
      <div className="form-group">
        <input
          type="password"
          className="input-text"
          required
        />
        <span className="floating-label">Password (at least 6 characters)</span>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="termsCheck" />
        <label className="form-check-label form-text text-muted" htmlFor="termsCheck">
          I accept the terms and conditions
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">Try it out</button>
    </form>
  );
};

export default Form;
