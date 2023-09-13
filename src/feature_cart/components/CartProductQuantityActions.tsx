import { Remove, Add } from "@mui/icons-material";
import { Stack, IconButton, TextField } from "@mui/material";

const CartProductQuantityActions = () => {
    return <Stack direction='row'>
        <IconButton size={'small'} >
            <Remove />
        </IconButton>

        <TextField inputMode='numeric'
            variant="outlined"
            InputProps={{
                sx: {
                    width: '32px',
                    height: '32px',
                }
            }}
            inputProps={{
                sx: { p: 1, textAlign: 'center' }
            }}
            disabled
            value={2}
        />

        <IconButton size={'small'} >
            <Add />
        </IconButton>
    </Stack>;
}

export default CartProductQuantityActions;