import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke Test -- does BoxList render?
it("renders the BoxList component without crashing", () => {
    render(<BoxList />);
});

// BoxList snapshot tests
it("BoxList component matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("has a width, height, and color labels and an Add Box button", function () {
    const { getByLabelText, getByText } = render(<BoxList />);

    // expect 'Box Width:', 'Box Height:', and 'Box Color:' labels
    expect(getByLabelText("Box Width:")).toBeInTheDocument();
    expect(getByLabelText("Box Height:")).toBeInTheDocument();
    expect(getByLabelText("Box Color:")).toBeInTheDocument();

    // expect 'Add Box' button
    expect(getByText("Add Box")).toBeInTheDocument();

});

it("can add a new box and delete it", function () {
    const { queryByTestId, getByLabelText, queryByText } = render(<BoxList />);

    // no boxes exist
    expect(queryByTestId("^Color Box^")).not.toBeInTheDocument();

    const boxWidth = getByLabelText("Box Width:");
    const boxHeight = getByLabelText("Box Height:");
    const boxColor = getByLabelText("Box Color:");
    const boxAddBtn = queryByText("Add Box")

    // fill out the form
    fireEvent.change(boxWidth, { target: { value: 100 } });
    fireEvent.change(boxHeight, { target: { value: 100 } });
    fireEvent.change(boxColor, { target: { value: "chartreuse" } });
    fireEvent.click(boxAddBtn);

    // box now exists
    expect(queryByTestId("^Color Box^")).toBeInTheDocument();

    const boxDeleteBtn = queryByText("X");
    fireEvent.click(boxDeleteBtn);

    // box no longer exists
    expect(queryByTestId("^Color Box^")).not.toBeInTheDocument();


});
