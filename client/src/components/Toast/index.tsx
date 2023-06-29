import React, { FC, useCallback, useState } from 'react';

import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

interface Props {
    message: string,
    type: 'success' | 'error'
    autoHide?: number
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
    props,
    ref,
) => <MuiAlert elevation={1} ref={ref} variant="filled" {...props} />);

export const Toast: FC<Props> = ({ message, type, autoHide = 5000 }) => {
    const [show, setShow] = useState(true);
    const handleClose = useCallback(() => {
        setShow(false);
    }, []);
    return (
        <Snackbar open={show} autoHideDuration={autoHide} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};
