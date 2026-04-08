import { createServer } from 'http';
import { handler } from './build/handler.js';

createServer(handler).listen(8080, () => {
	console.log('Server listening on port 8080');
});
