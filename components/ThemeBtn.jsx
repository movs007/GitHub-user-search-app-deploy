"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (
        <div className="flex items-center dark:text-dark-text1">
          <div>light</div>
          <div className="ml-2">
            {" "}
            <FaSun />
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div>dark</div>
          <div className="ml-2">
            {" "}
            <FaMoon />
          </div>
        </div>
      )}
    </button>
  );
};

export default ThemeBtn;
