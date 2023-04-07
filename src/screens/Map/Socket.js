import SocketIo from 'socket.io-client';

import { url } from '../../Constants';

export const getSocketConnection = () => SocketIo.connect(url);
