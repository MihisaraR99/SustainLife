import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

/* Add ToastContainer Notification */
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

/* Home Page */
import Home from "./components/home";
/* Restaurants Page */
import RegRestaurantForm from "./pages/restaurant/RegRestaurantForm";
import AddProductsForm from "./pages/restaurant/AddProductsForm";
import FoodItemDetails from "./pages/restaurant/FoodItemDetails";
import UpdateProducts from "./pages/restaurant/UpdateProducts";
import RestaurantHomeNew from "./pages/restaurant/RestaurantHomeNew";
import FoodItemDetailsNew from "./pages/restaurant/FoodItemDetailsNew";
import AdminPro from "./pages/restaurant/AdminPro";
import AdminRes from "./pages/restaurant/AdminRes";
import Login from "./pages/user/Login";

/* Payment Page */
import Payment from "./pages/restaurant/Payment";


function App() {

  return(
    <Router>

      {/* <ToastContainer/> */}

      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/RestaurantForm' element={<RegRestaurantForm/>}/>
        <Route path='/ProductForm' element={<AddProductsForm/>}/>
        <Route path='/FoodItemDetails' element={<FoodItemDetails/>}/>
        <Route path='/UpdateProduct/:id' element={<UpdateProducts/>}/>
        <Route path='/RestaurantHomenew' element={<RestaurantHomeNew/>}/>
        <Route path='/FoodItemDetailsNew' element={<FoodItemDetailsNew/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/AdminPro' element={<AdminPro/>}/>
        <Route path='/AdminRes' element={<AdminRes/>}/>
        <Route path='/Login' element={<Login/>}/>
      

        </Routes> 
    </Router>
  );
    
}

export default App;
