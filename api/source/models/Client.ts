import { Model, DataTypes, Sequelize } from 'sequelize';

export class Client extends Model{
    static start(connection: Sequelize): void {
        this.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            sequelize: connection,
            modelName: 'Client'
        });
    }
}


