import { Routes, Route } from "react-router-dom"
import { Signup } from "../userlogin&auth/Signup"
import { Login } from "../userlogin&auth/Login"
import { Logout } from "../userlogin&auth/Logout"
import { AuthRefresh } from "../userlogin&auth/AuthRefresh"
import { Cart } from "../cart&favourite/Cart"
import { Favourite } from "../cart&favourite/Favourite"
import { Eyeglasses } from "../pages/Eyeglasses"
import { Screen_glasses } from "../pages/Screen_glasses"
import { Kids_glasses } from "../pages/Kids_glasses"
import { Contact_lenses } from "../pages/Contact_lenses"
import { Sunglasses } from "../pages/Sunglasses"
import { Home_eye_test } from "../pages/Home_eye_test"
import { Store_locator } from "../pages/Store_locator"
import { Home } from "../pages/Home"
import { ErrorHandler } from "../loading&error/Errorhandling"
import { Loadinghandling } from "../loading&error/Loadinghandling"
import { EyeFullrim } from "../pages/eyeglassesFilters/EyeFullrim"
import { EyeHalfrim } from "../pages/eyeglassesFilters/EyeHalfrim"
import { EyeMens } from "../pages/eyeglassesFilters/EyeMens"
import { EyeRimless } from "../pages/eyeglassesFilters/EyeRimless"
import { EyeWomens } from "../pages/eyeglassesFilters/EyeWomens"
import { Eyekids } from '../pages/eyeglassesFilters/Eyekids'
import { KidsHalfrim } from "../pages/kidsglassesFilters/KidsHalfrim"
import { KidsRimless } from "../pages/kidsglassesFilters/KidsRimless"
import { KidFullrim } from "../pages/kidsglassesFilters/KidFullrim"
import { ScreenFullrim } from '../pages/screenglassesFilters/ScreenFullrim'
import { ScreenKids } from "../pages/screenglassesFilters/ScreenKids"
import { ScreenMens } from '../pages/screenglassesFilters/ScreenMens'
import { ScreenRimless } from '../pages/screenglassesFilters/ScreenRimless'
import { ScreenWomens } from "../pages/screenglassesFilters/ScreenWomens"
import { Screenhalfrim } from "../pages/screenglassesFilters/Screenhalfrim"
import { Cart_favCoponant } from "../utils/Cart_favCoponant"
import { ProductDetailsE } from "../utils/ProductDetailsE"
import UploadImg from "../headers/UploadImg"
import { PageComponantEyeglasses } from "../utils/PageComponantEyeglasses"
import { PageComponantKidGlasses } from "../utils/PageComponantKidGlasses"
import { PageComponantScreenGlasses } from "../utils/PageComponantScreenGlasses"
import { BuyProdE } from "../utils/compoEyehelper/BuyProdE"
import { ProductDetailsK } from "../utils/compoKidshelper/ProductDetailsK"
import { BuyProdK } from "../utils/compoKidshelper/BuyProdK"
import { ProductDetailsS } from "../utils/compoScreenhelper/ProductDetailsS"
import { BuyProdS } from "../utils/compoScreenhelper/BuyProdS"

function AllRoutes() {
  return (
    <Routes>
      <Route path="/signUp" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/auth_refresh" element={<AuthRefresh />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favourite" element={<Favourite />} />
      <Route path="/eye_glasses" element={<Eyeglasses />} />
      <Route path="/screen_glasses" element={<Screen_glasses />} />
      <Route path="/kids_glasses" element={<Kids_glasses />} />
      <Route path="/contact_lenses" element={<Contact_lenses />} />
      <Route path="/sun_glasses" element={<Sunglasses />} />
      <Route path="/home_eye_test" element={<Home_eye_test />} />
      <Route path="/store_locator" element={<Store_locator />} />
      <Route path="/error" element={<ErrorHandler />} />
      <Route path="/loading" element={<Loadinghandling />} />
      <Route path="/eye_glasses/eye_full_rim" element={<EyeFullrim />} />
      <Route path="/eye_glasses/eye_half_rim" element={<EyeHalfrim />} />
      <Route path="/eye_glasses/eye_kids" element={<Eyekids />} />
      <Route path="/eye_glasses/eye_mens" element={<EyeMens />} />
      <Route path="/eye_glasses/eye_rim_less" element={<EyeRimless />} />
      <Route path="/eye_glasses/eye_womens" element={<EyeWomens />} />
      <Route path="/kids_glasses/kids_full_rim" element={<KidFullrim />} />
      <Route path="/kids_glasses/kids_half_rim" element={<KidsHalfrim />} />
      <Route path="/kids_glasses/kids_rim_less" element={<KidsRimless />} />
      <Route path="/screen_glasses/screen_full_rim" element={<ScreenFullrim />} />
      <Route path="/screen_glasses/screen_half_rim" element={<Screenhalfrim />} />
      <Route path="/screen_glasses/screen_rim_less" element={<ScreenRimless />} />
      <Route path="/screen_glasses/screen_kids" element={<ScreenKids />} />
      <Route path="/screen_glasses/screen_mens" element={<ScreenMens />} />
      <Route path="/screen_glasses/screen_womens" element={<ScreenWomens />} />
      <Route path="/cart_fav" element={<Cart_favCoponant />} />
      <Route path="/producte_E/:id" element={<ProductDetailsE />} />
      <Route path="/uploadImg" element={<UploadImg />} />
      <Route path="/page_eyeglasses" element={<PageComponantEyeglasses />} />
      <Route path="/page_screenglasses" element={<PageComponantScreenGlasses />} />
      <Route path="/page_kidsGlasses" element={<PageComponantKidGlasses />} />
      <Route path="/buy_product/:id" element={<BuyProdE />} />
      <Route path="/productK/:id" element={<ProductDetailsK />} />
      <Route path="/buy_productK/:id" element={<BuyProdK />} />
      <Route path="/productS/:id" element={<ProductDetailsS />} />
      <Route path="/buy_productsS/:id" element={<BuyProdS />} />
    </Routes>
  )
}

export { AllRoutes }