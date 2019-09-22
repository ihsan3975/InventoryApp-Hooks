import axios from 'axios'
import {dispatcher} from '../GlobalState'

export const getProducts = async (query) => {
    dispatcher.setIsLoaded(false)
    const {sort, sortBy, limit, page, key} = query

    axios.get(`/products?sort=${sort}&sortBy=${sortBy}&limit=${limit}&page=${page}&key=%${key}%`)
    .then(res => {
        dispatcher.dispatchProduct({
            type: 'GET_PRODUCTS',
            payload: res.data
        })
    })
    .then(() => dispatcher.setIsLoaded(true))
}