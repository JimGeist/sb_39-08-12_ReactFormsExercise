import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

// Smoke Test -- does Box render?
it("renders the Box component without crashing", () => {
    render(<Box />);
});

// Box snapshot tests
it("Box component without props matches snapshot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

it("Box component with width, height, and color background matches snapshot", () => {
    const { asFragment } = render(<Box width={100} height={100} bgColor="black" />);
    expect(asFragment()).toMatchSnapshot();
});
