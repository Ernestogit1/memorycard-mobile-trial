// import { getDatabase } from './database';


// export const monitorTokenDatabase = () => {
//   console.log('🔄 Starting token database monitoring...');
  
//   // Initial check
//   checkTokenExists();
  
//   // Set up interval to check every 5 seconds
//   const intervalId = setInterval(checkTokenExists, 5000);
  
//   // Return function to stop monitoring if needed
//   return () => {
//     console.log('🛑 Stopping token database monitoring');
//     clearInterval(intervalId);
//   };
// };

// const checkTokenExists = async () => {
//   try {
//     const db = await getDatabase();
//     const timestamp = new Date().toLocaleTimeString();
    
//     // Get the token
//     const result = await db.getAllAsync(
//       'SELECT id, token FROM tokenTable ORDER BY id DESC;'
//     );

//     if (result && result.length > 0) {
//       console.log(`🕒 [${timestamp}] ✅ Token(s) found: ${result.length} entries`);
//       result.forEach((row, index) => {
//         console.log(`   Token #${index+1} (ID: ${row.id}): ${row.token.substring(0, 10)}...`);
//       });
//     } else {
//       console.log(`🕒 [${timestamp}] ⚠️ No tokens found in database`);
//     }
//   } catch (error) {
//     console.error(`🕒 [${timestamp}] ❌ Error checking token:`, error);
//   }
// };


// export const storeToken = async (token) => {
//   console.log('💾 Attempting to store token...');
//   try {
//     const db = await getDatabase();
    
//     // Log partial token for security
//     console.log(`🔑 Token to store: ${token ? token.substring(0, 10) + '...' : 'null or undefined'}`);
    
//     // Store the token
//     await db.execAsync('INSERT INTO tokenTable (token) VALUES (?);', [token]);

//     // Verify token was saved
//     const verification = await db.getAllAsync('SELECT token FROM tokenTable ORDER BY id DESC LIMIT 1;');
//     if (verification && verification.length > 0) {
//       console.log('✅ Token stored successfully!');
//     } else {
//       console.log('❌ Failed to verify token storage');
//     }
//   } catch (error) {
//     console.error('❌ Error storing token:', error);
//   }
// };

// export const getToken = async () => {
//   console.log('🔍 Attempting to retrieve token...');
//   try {
//     const db = await getDatabase();

//     // Get the token
//     const result = await db.getAllAsync(
//       'SELECT token FROM tokenTable ORDER BY id DESC LIMIT 1;'
//     );

//     if (result && result.length > 0 && result[0].token) {
//       console.log(`✅ Token found: ${result[0].token.substring(0, 10)}...`);
//       return result[0].token;
//     } else {
//       console.log('⚠️ No token found in database');
//       return null;
//     }
//   } catch (error) {
//     console.error('❌ Error retrieving token:', error);
//     return null;
//   }
// };

// export const removeToken = async () => {
//   console.log('🗑️ Attempting to remove token...');
//   try {
//     const db = await getDatabase();
//     await db.execAsync('DELETE FROM tokenTable;');
    
//     // Verify deletion
//     const verification = await db.getAllAsync('SELECT token FROM tokenTable;');
//     console.log(`✅ Token removal complete. Remaining tokens: ${verification.length}`);
//   } catch (error) {
//     console.error('❌ Error removing token:', error);
//   }
// };