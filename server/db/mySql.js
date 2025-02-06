import  mysql from "mysql2"


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SUbha@102M",
    database: "hive",
  });
  
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL!");
  });
  
  