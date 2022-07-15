import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const MessageOrder = ({ purchaseID }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success"> Gracias por tu compra! Tu id de transaccion es: {purchaseID}
            </Alert>
        </Stack>
    )
}



export default MessageOrder;
