import mongoose,{Schema} from "mongoose";

const SucursalSchema = new Schema(
    {
        nombre: String,
    },
    {
        timestamps: true,
    }
);

const Sucursal = mongoose.model('Sucursal',SucursalSchema);
//export default model("Sucursal", SucursalSchema);
