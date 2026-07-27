import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import "./BackButton.css";

export function BackButton() {
  const navigate = useNavigate();
  function handleBack() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <div
      className="back-button"
      onClick={() => {
        handleBack();
      }}
    >
      <ArrowLeft />
    </div>
  );
}
