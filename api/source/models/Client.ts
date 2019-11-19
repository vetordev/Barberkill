import { Model, DataTypes, Sequelize } from 'sequelize';

export class Client extends Model{

    static start(connection: Sequelize): void {
        
        this.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING(12),
            cpf: DataTypes.STRING(11),
            telephone: DataTypes.STRING,
            cellphone: DataTypes.STRING,
        },
        {
            sequelize: connection,
            modelName: 'Client'
        });

    }
    static associate(models: any){
        this.hasMany(models.Schedule, {
            foreignKey: 'client_id', as: 'schedules'
        });
    }
}


