import { Request, Response } from 'express';
import { Position } from '../models/Position';
import { Employee } from '../models/Employee';

export class PositionController {
   static async store(req: Request, res: Response){

    const { employee_id } = req.params;
    const { position, salary } = req.body;

    const employee: any =  await Employee.findByPk(employee_id);

    if (employee === null)
      return res.status(404).json({error : "Employee not found"});
          
    //Procura uma position, se não encontrar a cria
    Position.findOrCreate({
      where: { position },
      //Resto dos dados (Caso for criar)
      defaults: { salary },
      
    }).then( ([position, created]) => {      
      employee.addPosition(position);
      return res.json(position);
    }).catch(error => {
      console.log(error)
    });
    
  }

  static index(req: Request, res: Response){

    Position.findAll({
      attributes: {exclude: ['createdAt', 'updatedAt']}
    }).then(position => {
      return res.json(position)
    }).catch(error => {
      console.log(error);
    })
  }

  static show(req: Request, res: Response){

    Position.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          association: 'employees',
          attributes: ['name'],
          through: { attributes: [] },
        },
        {
          association: 'services',
          attributes: ['service', 'value']
        }
      ]
    }).then(position => {
      return res.json(position);
    }).catch(error => {
      console.log(error);
    });
  }

  
}