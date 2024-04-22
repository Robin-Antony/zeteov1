import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import ProductDetailSlice from './ProuctDetailSlice'
import UserLoginSlice from './UserLoginSlice'
import UserRegisterSlice from './UserRegisterSlice'
import CoursesSlice from './CoursesSlice'
import CartSlice from './CartSlice'
import SearchSlice from './SearchSlice'


const store = configureStore({
    reducer : {
        cartitem: CartSlice,
        products : ProductSlice,
        product : ProductDetailSlice,
        courses : CoursesSlice,
        userData : UserLoginSlice,
        userRegister: UserRegisterSlice,
        searchResult: SearchSlice,
        
    }
})

export default store