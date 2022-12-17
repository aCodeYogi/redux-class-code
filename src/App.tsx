import { Route, Routes } from "react-router-dom";
import OrderDetailPage from "./OrderDetailPage";
import OrderListPage from "./OrderListPage";
import ProductListPage from "./ProductListPage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ProductListPage />}></Route>
        <Route path="/orders" element={<OrderListPage />}></Route>
        <Route path="/orders/:orderId" element={<OrderDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
