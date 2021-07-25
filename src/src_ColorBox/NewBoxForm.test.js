import React from "react";
import { render, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Smoke Test -- does NewBoxFormList render?
it("renders the NewBoxForm component without crashing", () => {
    render(<NewBoxForm />);
});

// NewBoxFormList snapshot tests
it("NewBoxForm component matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("has a width, height, and color labels and an Add Box button", function () {
    const { getByLabelText, getByText } = render(<NewBoxForm />);

    // expect 'Box Width:', 'Box Height:', and 'Box Color:' labels
    expect(getByLabelText("Box Width:")).toBeInTheDocument();
    expect(getByLabelText("Box Height:")).toBeInTheDocument();
    expect(getByLabelText("Box Color:")).toBeInTheDocument();

    // expect 'Add Box' button
    expect(getByText("Add Box")).toBeInTheDocument();

});