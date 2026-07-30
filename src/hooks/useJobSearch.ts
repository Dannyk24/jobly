import { useNavigate } from "react-router";
import { useState } from "react";
import type { KeyboardEvent } from "react";

export function useJobSearch() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  function search() {
    const query = inputText.trim().toLowerCase();
    if (query === "") {
      return;
    }
    navigate(`/search?query=${encodeURIComponent(query)}`);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      search();
    }
  }

  return {
    inputText,
    setInputText,
    search,
    handleKeyDown,
  };
}
