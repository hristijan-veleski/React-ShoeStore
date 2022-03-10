import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ChangePasswordForm from "../components/Forms/ChangePasswordForm";
import LoadingSpinner from "../ui/LoadingSpinner";

const ChangePasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const onChangePasswordRequestHandler = (password) => {
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBvzyMrom_u2p7nWjUubVSvPXk8NHgQT5U",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          password: password,
          returnSecureToken: false,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          navigate("/");
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
            //ovde error modal
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <ChangePasswordForm
        isLoading={isLoading}
        onChangePasswordRequest={onChangePasswordRequestHandler}
      />
      <LoadingSpinner />
    </div>
  );
};

export default ChangePasswordPage;
