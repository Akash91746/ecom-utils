import { Box, Button, Card, CardProps, IconButton, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import CartProductQuantityActions from "./CartProductQuantityActions";
import ProductPrice from "../../common/components/ProductPrice";

const CartProduct: React.FC<CardProps> = (props) => {
    return <Card {...props}>
        <Stack direction='row' spacing={2}>
            <Stack spacing={2} alignItems='center' >
                <Box
                    component={'img'}
                    width='125px'
                    height='150px'
                    src="https://firebasestorage.googleapis.com/v0/b/phone-case-30aa1.appspot.com/o/products%2F646c55ba91ef01a58b5543c6%2Fdragon-ball-z-google-pixel-3-mobile-cover-1684821748823.jpeg?alt=media&token=9a3ae4db-5727-4588-a624-5bb9a54e17a9"
                />

                <CartProductQuantityActions />
            </Stack>
            <Stack>
                <Typography variant="h6" fontWeight={400}>
                    Product Title
                </Typography>
                <Typography variant="caption">
                    Description
                </Typography>

                <Stack height='100%' justifyContent='space-between'>
                    <ProductPrice />

                    <Button variant="outlined">
                        Remove
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    </Card>
}


export default CartProduct;