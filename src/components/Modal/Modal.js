import React from "react";
import PropTypes from 'prop-types';
import styles from './modalStyles.module.css';
import {ThemeContext} from "@teambit/design.theme.theme-context";
import {XButton} from "@teambit/evangelist.elements.x-button";


const Modal = ({isShow, showXButton, children, shouldCloseOnOverlayClick, onCancel, backdrop}) => {
    console.log(styles);

    return (
        <ThemeContext>
            <div
                className={isShow ? styles['modal'] : `${styles['modal']} ${styles['display-none']}`}
                style={{backgroundColor: backdrop}}
                onClick={() => shouldCloseOnOverlayClick ? onCancel() : null}
            >
                {
                    showXButton && <div className={styles['modal-close-icon']}>
                        <XButton onClick={() => onCancel()}/>
                    </div>
                }
                {children}
            </div>
        </ThemeContext>
    );
};

Modal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    showXButton: PropTypes.bool,
    backdrop: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    children: PropTypes.node,
};

Modal.defaultProps = {
    showXButton: false,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    shouldCloseOnOverlayClick: false,
    children: 'Your content goes here...',
};

export default Modal;
