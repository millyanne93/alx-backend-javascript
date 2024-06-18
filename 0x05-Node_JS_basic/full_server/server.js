import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

// Use the route mapping function to set up routes
mapRoutes(app);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the app for external use
export default app;
module.exports = app;
