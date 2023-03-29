import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import LoginForm from "../authentication/LoginForm";
import RegisterForm from "../authentication/RegisterForm";
import Modals from "./Modals";

const ModalManager = () => {
  const [componentMounted, setComponentMounted] = useState(false);
  const [urlParams, setUrlParams] = useSearchParams();
  const authMode = urlParams.get("authMode");
  useEffect(() => {
    setComponentMounted(true);
  }, []);

  if (componentMounted && authMode) {
    switch (authMode) {
      case "login":
        return (
          <Modals>
            <LoginForm />
          </Modals>
        );
      case "register":
        return (
          <Modals>
            <RegisterForm />
          </Modals>
        );
      default:
        break;
    }
  }
  return null;
};

export default ModalManager;
