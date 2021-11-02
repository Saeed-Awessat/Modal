import React from 'react';
import styles from './GenericModalLayout.module.css';
import PropTypes from "prop-types";
import {ThemeContext} from "@teambit/design.theme.theme-context";


const GenericModalLayout = ({header, children, footer}) => {

    return (
        <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
            {
                header &&
                <div className={styles['modal-header']}>{header}</div>
            }
            {
                children &&
                <div className={styles['modal-body']}>{children}</div>
            }
            {
                footer &&
                <div className={styles['modal-footer']}>{footer}</div>
            }
        </div>
    )
};


GenericModalLayout.propTypes = {
    header: PropTypes.node,
    children: PropTypes.node,
    footer: PropTypes.node,
};


export default GenericModalLayout;