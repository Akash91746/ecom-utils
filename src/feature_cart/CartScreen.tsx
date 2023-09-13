import CartContainer from "./components/CartContainer";
import DeliveryLocaltionSelector from "./components/DeliveryLocationSelector";
import PriceDetails from "./components/PriceDetails";
import { Container, Stack } from "@mui/material";

const CartScreen = () => {
    return <Container maxWidth='xl' component={Stack} py={2} spacing={2}>

        <CartContainer />

        <PriceDetails
            productsInCart={5}
            totalPrice={199}
            discountValue={50}
            cartSellingPrice={100}
            deliveryCharges={0}
            discountPercent={50}
        />

        <DeliveryLocaltionSelector />

    </Container>
}


export default CartScreen;