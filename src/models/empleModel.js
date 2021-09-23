import mongoose,{Schema} from "mongoose";

const EmpleadoSchema = new Schema(
  {
    cedula: { type: Number, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cargo: { type: String, required: true },
    compañia: [{ type: Schema.Types.ObjectId, ref:'nombre' }]
  },

  {
    timestamps: true,
  }
);

const Empleado = mongoose.model('Empleado',EmpleadoSchema);
//export default model("Empleado", EmpleadoSchema);
