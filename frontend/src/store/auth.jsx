import { createContext,useContext, useEffect, useState } from "react";


export const AuthContext= createContext();
// Log in funtionality and stored the Token into Local storage
export const AuthProvider= ({children})=>{
    const[token, setToken]= useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
   
    const authorizationToken= `Bearer ${token}`;

    
    const storeTokenInLs = (serverToken) =>{
        setToken(serverToken)
         return localStorage.setItem('token', serverToken);  
    };

  let isLoggedIn = !! token; // this line means is token is present it will be true otherwise isLoggedIn is false
    console.log("isLoggedIn =>",isLoggedIn);
    

    // const isAdmin = user?.isAdmin || false;
    const adminRole=user.isAdmin;
     let isAdmin = !! isLoggedIn && adminRole
    console.log("isAdmin =>",isAdmin);
   

//tackeling Logout functionallity
const LogoutUser = ()=>{
    setToken("");
    localStorage.removeItem("token");
}

//JWT authentication -to get the currently user data 
    const userAuthentication=async()=>{
            try {
                const response = await fetch("http://localhost:5000/api/auth/userGet",{
                    method: "GET",
                    headers: {
                        Authorization: authorizationToken,
                    },
                })
                if(response.ok){
                    const data= await response.json();
                    console.log("User Data:-- ",data.userData);
                    
                    setUser(data.userData);
                    
                }
               
            } catch (error) {
                console.log("Error getting user data");
                
            }
    }


    //To fetch the services data from the database

   

    useEffect(()=>{
        // fetch user data when the component mounts or the token changes
        userAuthentication();
        adminRole
    },[])


return( 
<AuthContext.Provider value={{ isLoggedIn, isAdmin, storeTokenInLs ,LogoutUser,user,authorizationToken, }} >
    {children}
</AuthContext.Provider>
)
}

export const useAuth=()=>{
   const authContextValue=  useContext(AuthContext);
   if(!authContextValue){
    console.log("useAuth used outside of the provider");
    
   }
   return authContextValue
}