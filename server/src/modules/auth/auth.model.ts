import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { IAuth } from '../../typing/IAuth';


@Table
export class AuthModel extends Model<IAuth, IAuth> {
  @Column({
    type: DataType.STRING,
    autoIncrement: false,
    primaryKey: true,
    allowNull: false
  })
  declare id: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  declare refreshToken: string;
}