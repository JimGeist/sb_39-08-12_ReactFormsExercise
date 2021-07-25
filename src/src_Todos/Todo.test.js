import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

// Smoke Test -- does Todo render?
it("renders the Todo component without crashing", () => {
    render(<Todo />);
});

// Todo snapshot tests
it("Todo component without props matches snapshot", () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

it("Todo component with test todo item matches snapshot", () => {
    const { asFragment } = render(<Todo id={1627181188638} todo="This is a test todo message" />);
    expect(asFragment()).toMatchSnapshot();
});
