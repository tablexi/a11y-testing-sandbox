import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the page header", () => {
  render(<App />);
  const pageHeader = screen.getByText(/Accessibility Testing Sandbox/i);
  expect(pageHeader).toBeInTheDocument();
});
