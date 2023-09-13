import { Button, Card, Stack, Typography } from "@mui/material";

const DeliveryLocaltionSelector = () => {
    return <Card
        component={Stack}
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        p={2}
    >
        <Typography variant="body1">
            Select Delivery Location
        </Typography>

        <Button color="secondary" variant="outlined">
            Select
        </Button>
    </Card>
}


export default DeliveryLocaltionSelector;