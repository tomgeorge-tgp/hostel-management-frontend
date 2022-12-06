import {Outlet} from "react-router-dom";

function Layout(){
    console.log("Layout");
    return(
        <main className="App">
            <Outlet/>
        </main>
    )
}

export default Layout;