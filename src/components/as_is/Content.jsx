import React from "react";

import "./index.css";

import Article from "./Article";
import CompetitionForm from "./Form";

export default function Content() {
  return (
    <div className="content as-is">
      <Article />
      <CompetitionForm />
    </div>
  );
}
