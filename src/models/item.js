import mongoose, {Schema} from "mongoose";

const itemSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);
export default Item;