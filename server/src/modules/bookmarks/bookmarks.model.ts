import { BelongsTo, Column, DataType, ForeignKey, Index, Model, Table } from 'sequelize-typescript';
import { IBookmark } from '../../typing/IBookmark';
import { AuthModel } from '../auth/auth.model';

@Table
export class BookmarksModel extends Model<IBookmark, IBookmark> {

  @Index({
    name: 'personIdBookmarkId',
    unique: true
  })
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    primaryKey: true
  })
  declare placeId: number;

  @Index({
    name: 'personIdBookmarkId',
    unique: true
  })
  @ForeignKey(() => AuthModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true
  })
  declare personId: string;

  @BelongsTo(() => AuthModel)
  person: AuthModel;
}