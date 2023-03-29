import { Routes, Route } from "react-router-dom";
import Courses from "../pages/Courses";

import Home from "../pages/home/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/signup' element={<Register />} />

      <Route path='/courses' element={<Courses />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
