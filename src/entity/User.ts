import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    mobile: number;

    @Column()
    email: string;
    
    @Column()
    birthday: string;
    
    @Column()
    gender: string;

    @Column({name: "img_url"})
    imgurl: string;

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;

}
