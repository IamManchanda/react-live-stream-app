import React from 'react';
import { createPortal } from 'react-dom';

const DeleteModal = ({ title, content, actionsMarkup, handleDismiss }) => {
  return createPortal(
    <div className="reveal-overlay display-block"
      onClick={ handleDismiss }>
      <div className="small reveal display-block radius bordered shadow">
        <div className="delete-streams-content"
          onClick={ (event) => event.stopPropagation() }>
          <h2>{ title }</h2>
          <p className="lead">{ content }</p>
          { actionsMarkup }
        </div>
        <button className="close-button" aria-label="Close Delete Modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>,
    document.getElementById('delete-modal'),
  );
};

DeleteModal.defaultProps = {
  title: '',
  content: '',
  actionsMarkup: null,
  handleDismiss: () => {},
};

export default DeleteModal;
