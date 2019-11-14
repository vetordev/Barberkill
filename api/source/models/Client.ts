import { Model, DataTypes } from 'sequelize';

export class Client <T extends Model<T>>{
    /*static init(connection: String){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },
        {
            sequelize: connection,
            modelName: 'Client'
        });
    }*/
     
    constructor(connection: String){
        
    }
}


