import mongoose, {Schema} from "mongoose";
import { ProductVolume } from "../libs/enums/product.enum";
import { ProductSize } from "../libs/enums/product.enum";
import { ProductStatus } from "../libs/enums/product.enum";


const productSchema = new Schema(
{
    productStatus: {
        type: String,
        enum: ProductStatus,
        default: ProductStatus.PAUSE,
    },

    productCollection: {
        type: String,
        enum: ProductStatus,
        required: true,
    },

    productName: {
        type: String,
        required: true,
    },

    productPrice: {
        type: Number,
        required:true,
    },

    productLeftCount: {
        type: Number,
        required: true,
    },

    productSize: {
        type: String,
        enum: ProductSize,
        default: ProductSize.NORMAL,
    },

    productVolume: {
        type: String,
        enum: ProductVolume,
        default: ProductVolume.ONE,
    },

    productDesc: {
        type: String,
        required:true,
    },

    productImages: {
        type: [String],
        default: [],
    },

    productViews: {
        type: Number,
        default: 0,
    },
},
{timestamps: true}  // updatedAt, createdAT
);

productSchema.index({productName: 1, productSize: 1, productVolume: 1},);
export default mongoose.model('Product', productSchema);