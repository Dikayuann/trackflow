import app from "./app";

const PORT = process.env.PORT || 3000;

app.get("/health", (req,res)=>{
    res.json({
        success:true,
        message:"Server is running"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
