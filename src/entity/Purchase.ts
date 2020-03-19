import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Purchase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "user_id"})
    userId: number;

    @Column({name: "total_price"})
    totalPrice: number;

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;

}
