

//This Section is look for Auth.validator.js
const validate=(schema)=>async(req,res,next)=>{
    try {
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        const status=422;
        const message= "Fill the Input Properly"
        const extraDetails = err.errors[0].message;
        const error={status,message,extraDetails}
        console.log(error)
        // res.status(400).json({Issue:message});
        next(error);
    }
};

export { validate} 