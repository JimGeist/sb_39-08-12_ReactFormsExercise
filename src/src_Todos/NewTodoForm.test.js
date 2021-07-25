import React from "react";
import { render, screen } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// Smoke Test -- does NewTodoForm render?
it("renders the NewTodoForm component without crashing", () => {
    render(<NewTodoForm />);
});

// NewTodoForm snapshot tests
it("NewTodoForm component matches snapshot", () => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("has a 'New todo:' label and an 'Add New Todo' button", function () {
    const { getByLabelText, getByText } = render(<NewTodoForm />);

    // expect 'New todo:' label
    expect(getByLabelText("New todo:")).toBeInTheDocument();

    // expect 'Add New Todo' button
    expect(getByText("Add New Todo")).toBeInTheDocument();

});