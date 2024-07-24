import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockresListData.json";
import { BrowserRouter, json } from "react-router-dom";
import Body from "../Body";
import { act } from "react";
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
   return Promise.resolve({
    json: () => {
        return Promise.resolve(MOCK_DATA);
    }
   })
})


it("Should give search result",async () =>{
  await act(async () =>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>) )  


   const searchBtn = screen.getByTestId('test-search')
   const searchInput = screen.getByPlaceholderText('search')

   fireEvent.change(searchInput,{target:{value:'burger'}})
   fireEvent.click(searchBtn)
   const restocard = screen.getAllByTestId('test-restocard');
   expect(restocard.length).toBe(3)
})