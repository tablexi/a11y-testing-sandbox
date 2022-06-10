import React from "react";

import "./index.css";

import Article from "./Article";
import CompetitionForm from "./Form";

export default function Content() {
  return (
    <main className="content a11y">
      <Article />
      <CompetitionForm />
    </main>
  );
}
