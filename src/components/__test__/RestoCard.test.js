import { render,screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import MOCK_DATA from "../mocks/restoDataMocks.json"
import "@testing-library/jest-dom"

it("Should render restocard  component ",() => {

    render(<RestoCard resData={MOCK_DATA}/>)

    const checkText = screen.getByText('Pizza Hut');
    expect(checkText).toBeInTheDocument();
})