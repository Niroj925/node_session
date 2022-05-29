//chalk package is installed for different color
import chalk from 'chalk';
import winston from 'winston';
console.log(chalk.bgGreen('Namaste, Nepal'));

//to maintain log we use winston 
//by using winsotn package we can save the log
//what is done our project that is saved in log file
const logger=winston.createLogger({
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({
            filename:'console.log',
        })
    ]
});
logger.info({
    level:'warning',
    message:'something going to dangerous'
});
