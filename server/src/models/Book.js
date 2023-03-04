import { Sequelize } from "sequelize";
import db from "./db.js";

const Book = db.define('books', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    image: {
        type: Sequelize.STRING,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

// create a table in database
// Book.sync()

export default Book;