import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const MessageOrder = ({ purchaseID }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">Thanks for your purchase! Your transaction id is: {purchaseID}
            </Alert>
        </Stack>
    )
}



export default MessageOrder;
