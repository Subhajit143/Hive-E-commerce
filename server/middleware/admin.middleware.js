
// this req.user is directly accessible from auth-middleware.js
export const adminMiddleware=async(req,res,next) => {
    try {
        console.log("Req.user= ",req.userGet);
    const AdminRole=req.userGet.isAdmin;
    if (!AdminRole){ 
        console.log("Access denied");
        
        return res.send(404).json({message:"Access denied"});
    }
    
    next(); 
    } catch (error) {
        console.log("Error from Admin middleware: " + error);
        
    } 
}