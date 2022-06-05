import {Sequelize } from 'sequelize';

import 'dotenv/config'

//this is for connect to the database

export default new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    {
       host:process.env.DB_HOST,
       dialect:"mysql",
       pool:{
           max:30
       }
    },
)