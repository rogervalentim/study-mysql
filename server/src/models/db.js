import { Sequelize } from "sequelize";

const sequelize = new Sequelize("books", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

sequelize.authenticate()
.then(() => {
    console.log("database connected successfully")
}).catch((error) => {
    console.log(error)
})

export default sequelize;
