import { createContext,useState,useContext } from "react";

const AuthContext = createContext({});

export function AuthProvider({children}){
    const [auth,setAuth]=useState({});

    return(<>

        <AuthContext.Provider value={{auth,setAuth}}>
             {children} 
          </AuthContext.Provider> 
    </>
     )}

export default AuthContext;


export function useAuth(){
    return useContext(AuthContext)
}















// export const AuthProvider=({children})=>{
//     const [auth,setAuth]=useState({});

//     return(
//         <AuthContext.Provider value={{auth,setAuth}}>
//             {children}
//         </AuthContext.Provider> 
//         )}

// // export default AuthContext;

// // export const useAuth = ()=>{
// //     return useContext(AuthContext)
// // }