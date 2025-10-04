import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "@pages/main";
import { NotFound } from "@pages/not-found";

export const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
