/* ============ firebase-config.js — conexión con tu proyecto de Firebase ============
 * Pega aquí la configuración de tu app web de Firebase (Consola de Firebase >
 * Configuración del proyecto > Tus apps > SDK setup and configuration > Config).
 * Los pasos completos están en docs/FIREBASE.md.
 *
 * Estos datos NO son secretos: Firebase los diseña para ir en la web. Lo que
 * protege las partidas son las reglas de Firestore (firestore.rules).
 *
 * Si se pone a null, el juego funciona en modo local (sólo en el navegador).
 */
// Copia propia (zhanyiru.github.io): proyecto pokemon-4c930, plan Spark, autenticación
// normal de Firebase, SIN Identity Platform. ¡No pulsar nunca "Actualizar a Identity
// Platform" en su consola! (El original usa pokesurvivor-free.)
G.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDQ41cI9ioC5Ky5DsXQogSBYAlXcNwOPIo',
  authDomain: 'pokemon-4c930.firebaseapp.com',
  projectId: 'pokemon-4c930',
  storageBucket: 'pokemon-4c930.firebasestorage.app',
  messagingSenderId: '597916135099',
  appId: '1:597916135099:web:6b0f7542c4535abd74439e',
  databaseURL: 'https://pokemon-4c930-default-rtdb.asia-southeast1.firebasedatabase.app'
};

/* Copia propia (GitHub Pages): los dominios donde se publica. Sólo se usan cuando
 * G.FIREBASE_CONFIG de arriba es de TU proyecto de Firebase (no pokesurvivor-free).
 * Cambia TU-USUARIO por tu nombre de usuario de GitHub. */
G.FIREBASE_HOSTS = ['zhanyiru.github.io'];

/* Ejemplo de cómo debe quedar:
G.FIREBASE_CONFIG = {
  apiKey: 'AIza...',
  authDomain: 'tu-proyecto.firebaseapp.com',
  projectId: 'tu-proyecto',
  storageBucket: 'tu-proyecto.firebasestorage.app',
  messagingSenderId: '1234567890',
  appId: '1:1234567890:web:abc123'
};
*/
