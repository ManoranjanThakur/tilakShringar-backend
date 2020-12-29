const express = require('express');
const env = require('dotenv');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors');

//routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData')
const addressRoutes = require("./routes/address");
const orderRoutes = require('./routes/order')




//environment variable
env.config();

//mongodb connection
//mongodb+srv://user:<password>@cluster0.qug1p.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://ankitthakur:Ankit@2326@cluster0.2qbtu.gcp.mongodb.net/ecommerce?retryWrites=true&w=majority`,
 {useNewUrlParser: true,
useUnifiedTopology:true,
useCreateIndex:true
}
).then(()=>{
    console.log('Database connected')
});

app.use(cors())

app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')))

app.use('/api',authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',initialDataRoutes);
app.use('/api', addressRoutes);
app.use('/api',orderRoutes)
//app.use('/api',adminOrderRoutes)



app.listen(process.env.PORT,()=>{
    console.log(`server running at ${process.env.PORT}`);
});