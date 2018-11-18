import React from 'react';
import Form from '../form/form';
import './modal.scss';

const Modal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Start your free trial</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Form />
          </div>
          <div className="modal-footer" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
