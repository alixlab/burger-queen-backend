const express = require('express');
const app = express();
const db = require('./models/index');

const PORT = process.env.PORT || 4567;
app.listen(PORT, console.log(`server started on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/users", require('./routes/user'));
app.use("/products", require('./routes/products'));
app.use("/orders", require('./routes/orders'));

db.sequelize.sync();