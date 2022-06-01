import Sequelize from "sequelize";
import 'dotenv/config';


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
    process.env.DB_DATABASE, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host:process.env.DB_HOST,
    dialect:'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    //to set limit 
    pool:{
     max:5,
    }
  });

  export default sequelize;