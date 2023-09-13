import { Route, Routes } from "react-router-dom";
import HomeScreen from "./home/HomeScreen";
import Screens from "./common/utils/Screen";
import CartScreen from "./feature_cart/CartScreen";

const AppRouter = () => {
    return <Routes>
        <Route
            path={Screens.Home}
            element={<HomeScreen />}
        />
        <Route
            path={Screens.Cart}
            element={<CartScreen />}
        />
    </Routes>
}


export default AppRouter;