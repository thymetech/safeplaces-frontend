import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import { modalWrapper, modalInner, closeButton } from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';
import { useCloseOnEscape } from 'hooks/useCloseOnEscape';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
const Modal = ({
  children,
  closeAction = () => null,
  showCloseAction = true,
}) => {
  useCloseOnEscape(() => closeAction && closeAction());
  const modalRoot = document.getElementById('modal-root');

  return createPortal(
    <FocusTrap>
      <div className={modalWrapper}>
        <button
          type="button"
          onClick={() => closeAction()}
          className={closeButton}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <div className={modalInner}>{children}</div>
      </div>
    </FocusTrap>,
    modalRoot,
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
