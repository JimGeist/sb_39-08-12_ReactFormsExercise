import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Smoke Test -- does TodoList render?
it("renders the TodoList component without crashing", () => {
    render(<TodoList />);
});

// TodoList snapshot tests
it("TodoList component matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("has a 'New todo:' label and an 'Add New Todo' button", function () {
    const { getByLabelText, getByText } = render(<TodoList />);

    // expect 'New todo:' label
    expect(getByLabelText("New todo:")).toBeInTheDocument();

    // expect 'Add New Todo' button
    expect(getByText("Add New Todo")).toBeInTheDocument();

});

it("can add a new todo item and delete it", function () {
    const testTodoText = ">> this is a test todo item <<";

    const { queryByTestId, getByLabelText, queryByText } = render(<TodoList />);

    // todo list element does not exist
    expect(queryByTestId("^Todo Item^")).not.toBeInTheDocument();
    expect(queryByText(testTodoText)).not.toBeInTheDocument();

    const todoText = getByLabelText("New todo:");
    const todoAddBtn = queryByText("Add New Todo")

    // fill out the form
    fireEvent.change(todoText, { target: { value: testTodoText } });
    fireEvent.click(todoAddBtn);

    // to do list element now exists
    expect(queryByTestId("^Todo Item^")).toBeInTheDocument();
    expect(queryByText(testTodoText)).toBeInTheDocument();

    const todoDeleteBtn = queryByText("X");
    fireEvent.click(todoDeleteBtn);

    // box no longer exists
    expect(queryByTestId("^Todo Item^")).not.toBeInTheDocument();
    expect(queryByText(testTodoText)).not.toBeInTheDocument();

});
