import React from "react";

import Article from "./Article";
import CompetitionForm from "./Form";

export default function Content() {
  return (
    <section className="content">
      <Article />
      <CompetitionForm />
    </section>
  );
}
