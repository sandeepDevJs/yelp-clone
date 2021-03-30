const app = require("./index")


const PORT = process.env.PORT || 3005

app.listen(PORT, () => console.log(`server connected to port ${PORT}!`) )