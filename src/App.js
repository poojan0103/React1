import logo from './logo.svg';
import './App.css';
import { Abiutus } from './Abiutus';
import { Header } from './components/Header';
import { Users } from './components/Users';
import { Footer } from './components/Footer';
import { RegisterBug } from './bug/RegisterBug';
import { ListBug } from './bug/ListBug';
import { AddBug } from './bug/AddBug';
import { StudentRegister } from './components/StudentRegister';
import { Navbar } from './components/Navbar';
import {Route, Routers, Routes} from 'react-router-dom';
import {AboutUs}from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { ContactDeatils } from './components/ContactDeatils';
import { SubBlog } from './components/SubBlog';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { UserApiDemo } from './components/api/UserApiDemo';
import { RecipeAPi } from './components/api/RecipeAPi';
import { Add } from './components/Add';
import { View } from './components/View';
import { GetStoreData } from './components/Storage/GetStoreData';
import { StorageDemo } from './components/Storage/StorageDemo';
import { Json } from './context/Json';
import { Sidebar, SideBar } from './Sidebar';
import ProtectedRoutes from './ProtectedRoute';

function App() {
  
  var address = {
    country:"India",
    city: "Ahmedabad",
    state: "Gujrat",
    area:"Ghatlodiya",
    pin:380061
  }
  
  var userName = "Ram"
  return (
    <div className="App">
      {
      /*<Header uName = {userName}/>
      
      <StudentRegister/>
      <Footer address = {address}/>*/}
      {/*<UserApiDemo/>
      <RecipeAPi/>*/}
      {/*<Navbar/>*/}
      {/*<Add/>
      <View/>
    <Json/>*/}
    <SideBar/>
   
     
      
      
      
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contactdetails' element={<ContactDeatils/>}></Route>
        <Route path='/subblog' element={<SubBlog/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/productdetails' element={<ProductDetail/>}></Route>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        </Route>
        <Route path='/login' element={<StorageDemo/>}></Route>
        
       
       
       
        
        
         
         </Routes>
      

    </div>
    
  );
}

export default App;
