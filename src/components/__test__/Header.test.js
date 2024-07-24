import { Provider } from "react-redux"
import Heading from "../Heading"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import {render,screen} from "@testing-library/react"
import "@testing-library/jest-dom"



it("Should check cart is load",() =>{ 
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Heading/>
    </Provider>
    </BrowserRouter>
    )

    const cart = screen.getByAltText("cart-img")
    expect(cart).toBeInTheDocument()

})

it("Should login is provide or not",() =>{ 
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Heading/>
    </Provider>
    </BrowserRouter>
    )

    const login = screen.getByRole('button',{name:'Login'})
    expect(login).toBeInTheDocument()

})