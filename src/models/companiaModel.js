import mongoose,{Schema} from "mongoose";
import Sucursal from "./SucursalModel";

const CompañiaShema = new Schema(
  {
    nombre: String,
    sucursal: [{ type: Schema.Types.ObjectId, ref:'nombre' }]
  },
  {
    timestamps: true,
  }
);

const Compañia = mongoose.model('Compañia',CompañiaShema);
//export default mongoose("Compañia", CompañiaShema );