import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Lineitem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "purchase_id"})
    purchaseId: number;

    @Column()
    qty: number;
    
    @Column()
    price: number;

    @Column({name: "total_price"})
    totalPrice: number;

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;

}
