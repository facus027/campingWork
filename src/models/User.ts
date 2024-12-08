import { Table, Column, Model, DataType, Default, HasMany } from 'sequelize-typescript'
import Work from './Work'

interface IUser {
    name:string,
    lastName: string,
}

@Table({
    tableName:'users'
})

class User extends Model <IUser,IUser > {
  
    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    name: string

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    lastName: string
    
        //Relacion
    @HasMany(() => Work)
    work!: Work[];
    
}

export default User