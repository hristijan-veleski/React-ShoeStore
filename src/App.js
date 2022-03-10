import React, { Fragment, Suspense } from "react";
import LoginPage from "./pages/LoginPage";
import ShoeModelSelectionPage from "./pages/ShoeModelSelectionPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import NikePage from "./pages/ShoePages/NikePage";
import AdidasPage from "./pages/ShoePages/AdidasPage";
import PumaPage from "./pages/ShoePages/PumaPage";
import ModelDetail from "./components/ShoeModel/ModelDetail";
import Cart from "./components/Cart/Cart";
import LoadingSpinner from "./ui/LoadingSpinner";


//Here try to import using React.lazy method


// const LoginPage = React.lazy(() => import("./pages/LoginPage"));
// const ShoeModelSelectionPage = React.lazy(() =>
//   import("./pages/ShoeModelSelectionPage")
// );

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isModalOpen = useSelector((state) => state.modal.modalIsOpen);

  return (
    <Fragment>
      <Suspense
        fallback={
          <div>
            <LoadingSpinner />
          </div>
        }
      />
      {isModalOpen && <Cart />}
      <Routes>
        {!isLoggedIn && <Route path="/" element={<LoginPage />} />}
        {isLoggedIn && (
          <Route path="/model-selection" element={<ShoeModelSelectionPage />} />
        )}
        {isLoggedIn && (
          <Route path="/model-selection/nike" element={<NikePage />} />
        )}
        {isLoggedIn && (
          <Route path="/model-selection/adidas" element={<AdidasPage />} />
        )}
        {isLoggedIn && (
          <Route path="/model-selection/puma" element={<PumaPage />} />
        )}
        {isLoggedIn && (
          <Route path="/model-selection/:modelId" element={<ModelDetail />} />
        )}
        {isLoggedIn && (
          <Route path="/changePassword" element={<ChangePasswordPage />} />
        )}
        {!isLoggedIn && (
          <Route path="*" element={<Navigate replace to="/" />} />
        )}
        {isLoggedIn && (
          <Route
            path="*"
            element={<Navigate replace to="/model-selection" />}
          />
        )}
      </Routes>
    </Fragment>
  );
};

export default App;
