import React, {useState, useReducer, createContext} from 'react'
import axios from 'axios'

import {getProducts} from './actions//productActions'

import productReducers from './reducers/productReducers'

export const GlobalContext = createContext()

export let dispatcher = {}

export const GlobalState = props => {
    const [product, dispatchProduct] = useReducer(productReducers, {product: {}})

    const [isLoaded, setIsLoaded] = useState(false)
    const [isRedirected, setIsRedirected] = useState(false)
    const [isError, setIsError] = useState(false)

    dispatcher = {
        dispatchProduct,
        setIsLoaded,
        setIsRedirected,
        setIsError
    }

    const productActions = {
        getProducts
    }

    return (
        <GlobalContext.Provider
        value={{ product, isLoaded, isRedirected, isError, productActions}}>
            {props.children}
        </GlobalContext.Provider>
    )
}