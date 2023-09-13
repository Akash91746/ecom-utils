import { Stack, Typography } from "@mui/material";

const ProductPrice = () => {
    return <Stack direction='row' spacing={0.5} alignItems='center'>
        <Typography variant="h6">
            $299
        </Typography>
        <Typography variant="body1" sx={{ textDecoration: 'line-through' }}>
            $499
        </Typography>
        <Typography variant="body2" color='secondary'>
            50% off
        </Typography>
    </Stack>
}


export default ProductPrice;