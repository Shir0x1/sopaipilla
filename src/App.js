import React,{userEffect,useState} from "react";
import { Router,Route,Link,Routes} from "react-router-dom";
import Inicio from"./component/inicio"
import Perfil from"./component/perfil"
/*
componente vista:llamado app
<Route path="/perfil" elemnt={<Perfil/>}></Route>
*/

const App =() =>{
  return(
    <Routes>
      <Route path="/" elemnt={<Inicio/>}></Route>
      <Route path="/perfil" elemnt={<Perfil/>}></Route>
    </Routes>
  )
}
export default App