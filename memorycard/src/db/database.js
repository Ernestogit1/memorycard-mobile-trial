// import * as SQLite from 'expo-sqlite';

// let db = null;
// let isInitialized = false;

// // Combined function that gets/initializes the database
// export const getDatabase = async () => {
//   try {
//     // Open database if not already open
//     if (!db) {
//       console.log("Opening new database connection to tokenDB");
//       db = await SQLite.openDatabaseAsync('tokenDB');
//     }
    
//     // Initialize tables if not already done
//     if (!isInitialized) {
//       console.log("Initializing database tables");
      
//       // Create token table
//       await db.execAsync(
//         'CREATE TABLE IF NOT EXISTS tokenTable (id INTEGER PRIMARY KEY AUTOINCREMENT, token TEXT NOT NULL, created_at INTEGER);'
//       );
      
//       // Create user table
//       await db.execAsync(`
//         CREATE TABLE IF NOT EXISTS userTable (
//           id TEXT PRIMARY KEY,
//           user TEXT,
//           createdAt TEXT
//         );
//       `);
      
//       isInitialized = true;
//       console.log("Database initialization complete");
//     }
    
//     return db;
//   } catch (error) {
//     console.error("Database error:", error);
//     throw error; // Re-throw to allow handling upstream
//   }
// };

// // For backward compatibility
// export const initDB = getDatabase;