import { useNavigate } from "react-router";
import { useState } from "react";
import type { KeyboardEvent } from "react";

export function useJobSearch() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  function search(query: string) {
    const searchQuery = query.trim().toLowerCase();
    if (searchQuery === "") {
      return;
    }
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      search(inputText);
    }
  }

  return {
    inputText,
    setInputText,
    search,
    handleKeyDown,
  };
}
