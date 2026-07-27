import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import "./BackButton.css";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="back-button"
      onClick={() => {
        navigate(-1);
      }}
    >
      <ArrowLeft />
    </div>
  );
}
