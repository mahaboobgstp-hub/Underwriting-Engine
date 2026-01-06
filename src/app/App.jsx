import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import LenderLayout from "../layouts/LenderLayout";

export default function App() {
  return (
    <BrowserRouter>
      <LenderLayout>
        <AppRoutes />
      </LenderLayout>
    </BrowserRouter>
  );
}

