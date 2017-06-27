import { mongodbConfig } from './mongo.connection';

var connection = new mongodbConfig();

export function getDb (): mongodbConfig{
    return connection;
}

export function closeConnection() {
    return connection.closeConnection();
}