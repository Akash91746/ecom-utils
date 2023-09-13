import { Button, Card, CardContent, CardHeader, Divider, List } from "@mui/material";
import CartProduct from "./CartProduct";

const CartContainer = () => {
    return <Card>
        <CardHeader
            title="MyCart(1)"
            titleTypographyProps={{ variant: 'h6' }}
        />
        <Divider />
        <CardContent component={List}>
            <CartProduct
                elevation={0}
            />
        </CardContent>

        <Divider />
        <CardContent sx={{ textAlign: 'end' }}>
            <Button variant="contained" color="secondary" size="large">
                Place Order
            </Button>
        </CardContent>
    </Card>
}

export default CartContainer;