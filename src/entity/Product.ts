import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "product_name"})
    productName: string;

    @Column()
    qty: number;

    @Column({name: "max_qty"})
    maxqty: number;

    @Column()
    price: number;

    @Column({name: "total_price"})
    totalPrice: number;

    @Column()
    details: string;

    @Column({name: "img_url"})
    imgurl: string;

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;

}
