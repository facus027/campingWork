import { Table, Column, Model, DataType, Default, ForeignKey, BelongsTo } from 'sequelize-typescript'
import User from './User';

interface IWork{
    title: string,
    description: string,
    status: string,
    priority: string,
    dueDate: Date,
    userId:number
}

@Table({
    tableName:'works'
})

class Work extends Model<IWork, IWork>{

    @Column({
        type: DataType.STRING(100)
    })
    title: string

    @Column({
        type: DataType.STRING(100)
    })
    description: string
    
    @Default('pendiente')
    @Column({
        type: DataType.ENUM('pendiente', 'en progreso', 'completado')
    })
    status: string

    @Column({
        type: DataType.ENUM('baja','media','alta'),
    })
    priority: string

    @Column({
        type: DataType.DATE(),
        defaultValue: DataType.NOW,
    })
    date: Date

        //Relacion
    @ForeignKey(() => User)
    @Column({
      type: DataType.INTEGER,
      allowNull: true,
    })
    userId!: number;
  
    @BelongsTo(() => User)
    user!: User;
}

export default Work