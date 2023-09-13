import { Button, Card, CardContent, CardHeader, CardProps, Divider, Stack, Typography } from "@mui/material";
import SpaceBetweenBox from "../../common/components/SpaceBetweenBox";
import React from "react";

interface PriceDetailsProps extends CardProps {
    productsInCart: number,
    totalPrice: number,
    discountValue: number,
    discountPercent: number,
    deliveryCharges: number,
    cartSellingPrice: number
}

const PriceDetails: React.FC<PriceDetailsProps> = (
    { productsInCart, discountValue, discountPercent, deliveryCharges, cartSellingPrice, totalPrice, ...others }
) => {
    return <Card {...others}>

        <CardHeader
            title='Price Details'
            titleTypographyProps={{
                variant: 'h6',
                fontWeight: '400'
            }}
        />

        <Divider />

        <CardContent component={Stack} spacing={2}>
            <SpaceBetweenBox>
                <Typography variant="subtitle1">
                    Price({productsInCart})
                </Typography>
                <Typography variant="subtitle1">
                    {`$${totalPrice}`}
                </Typography>
            </SpaceBetweenBox>

            <SpaceBetweenBox>
                <Typography variant='subtitle1'>
                    Discount
                </Typography>
                <Typography variant='subtitle1' color='secondary'>
                    {`-$${discountValue}`}
                </Typography>
            </SpaceBetweenBox>

            <SpaceBetweenBox>
                <Typography variant='subtitle1'>
                    Delivery Charges
                </Typography>
                <Typography variant='subtitle1'>
                    ${deliveryCharges}
                </Typography>
            </SpaceBetweenBox>

            <Divider sx={{ marginTop: 2 }} />

            <SpaceBetweenBox>
                <Typography variant={'h6'}>
                    Total
                </Typography>
                <Typography variant={'h6'}>
                    {`$${cartSellingPrice}`}
                </Typography>
            </SpaceBetweenBox>

            <Divider sx={{ marginTop: 2 }} />

            {
                discountPercent > 4 && <Typography marginTop={1} color='secondary'>
                    {`You have saved ${discountPercent}% on this order`}
                </Typography>
            }

            <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ height: '3rem' }}
            >
                Place Order
            </Button>
        </CardContent>
    </Card>
}


export default PriceDetails;