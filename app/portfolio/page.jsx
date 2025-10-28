"use client";
import { useEffect } from "react";

export default function PortfolioRedirect() {
  useEffect(() => {
    window.location.href = "https://bit.ly/PortfolioAndreTomazela";
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl font-bold text-gray-800">
        Redirecionando para o portfólio...
      </h1>
      <p className="text-gray-600 mt-2">
        Se não for redirecionado automaticamente,{" "}
        <a
          href="https://bit.ly/PortfolioAndreTomazela"
          className="text-orange-600 underline"
        >
          clique aqui
        </a>
        .
      </p>
    </main>
  );
}
