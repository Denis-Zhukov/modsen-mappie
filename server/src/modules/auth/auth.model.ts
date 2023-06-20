import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { IAuth } from '../../typing/IAuth';
import { BookmarksModel } from '../bookmarks/bookmarks.model';


@Table
export class AuthModel extends Model<IAuth, IAuth> {
  @Column({
    type: DataType.STRING,
    autoIncrement: false,
    primaryKey: true,
    allowNull: false
  })
  declare id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  declare refreshToken: string;

  @HasMany(() => BookmarksModel)
  declare bookmarks: BookmarksModel[];
}