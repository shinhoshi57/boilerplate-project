import {Entity, Column,PrimaryGeneratedColumn} from "typeorm"

@Entity() 
export class Aliment{

    @PrimaryGeneratedColumn() 
    id: Number;
    @Column() 
    name:String;
    @Column() 
    type:String;
}