import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import RootLayout from "./screens/Root";
import OTPVerifyScreen from "./screens/OTPVerify";
import ProductScreen from "./screens/Product";
import PricingScreen from "./screens/Pricing";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomeScreen /> },
      { path: '/login', element: <LoginScreen /> },
      { path: '/confirm_otp', element: <OTPVerifyScreen /> },
      { path: '/products', element: <ProductScreen /> },
      { path: '/pricing', element: <PricingScreen /> },
      
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
