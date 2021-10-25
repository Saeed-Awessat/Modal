import React from "react";
import PropTypes from 'prop-types';
import {Separator} from '@teambit/design.ui.separator';
import {XButton} from '@teambit/evangelist.elements.x-button';
import {IconButton} from '@teambit/design.ui.icon-button';
import {ThemeContext} from '@teambit/design.theme.theme-context';


const Modal = props => {
    if (!props.isShow) return null;

    return (
        <ThemeContext>
            <div className={'modal'} onClick={() => props.shouldCloseOnOverlayClick ? props.onCancel() : null}>
                <div className={'modal-content'} onClick={e => e.stopPropagation()}>
                    <div className={'modal-close-icon'}>
                        <XButton onClick={() => props.onCancel()}/>
                    </div>
                    {
                        props.title && props.title.length > 0 &&
                        <div className={'modal-header'}>
                            <h2 className={'modal-title'}>{props.title}</h2>
                            <Separator isPresentational/>
                        </div>
                    }
                    <div className={'modal-body'}>{props.children}</div>
                    {
                        props.confirmButtonText && props.confirmButtonText.length > 0 &&
                        <>
                            <Separator isPresentational/>
                            <div className={'modal-footer'}>
                                <IconButton priority={'cta'} active={'true'}
                                            onClick={props.onConfirm}>{props.confirmButtonText}
                                </IconButton>
                            </div>
                        </>
                    }
                </div>
            </div>
        </ThemeContext>
    );
};

Modal.propTypes = {
    isShow: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    shouldCloseOnOverlayClick: PropTypes.bool,
    title: PropTypes.string,
    confirmButtonText: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Modal;


