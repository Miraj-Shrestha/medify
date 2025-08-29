import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar({ open, setOpen, message }) {

    const handleClosed = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClosed}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert onClose={handleClosed} icon={false} sx={{bgcolor:'primary.green', color:'#fff'}}>
                {message}
            </Alert>
        </Snackbar>
    )
}