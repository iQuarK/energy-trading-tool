import React from "react";
import { render, screen } from "@testing-library/react";
import CapacityField from "./capacity-field";

describe("Capacity field", () => {
  it("renders the basic capacity field", async () => {
    render(<CapacityField amount={100} />);

    const field = await screen.findByTestId<HTMLInputElement>("capacity");
    const parent = await screen.findByTestId<HTMLInputElement>(
      "capacity-parent"
    );

    expect(field.value).toBe("100");
    expect(parent.textContent).toMatch(/Kw/);
  });

  it("renders the basic capacity field with different units", async () => {
    render(<CapacityField amount={200} units="MW" />);

    const field = await screen.findByTestId<HTMLInputElement>("capacity");
    const parent = await screen.findByTestId<HTMLInputElement>(
      "capacity-parent"
    );

    expect(field.value).toBe("200");
    expect(parent.textContent).toMatch(/MW/);
  });
});
