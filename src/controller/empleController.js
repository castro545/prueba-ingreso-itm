import Empleado from "../models/empleModel";

const getTask = async (req, res) => {
  try {
    let notas = await Empleado.find();
    return res.status(200).json({
      data: notas
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messague: error,
      jjaja: 'fasdf'
    });
  }
};
const addTask = async (req, res) => {
  console.log(req.body);
  try {
    const addEmpleado = new Empleado({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cargo: req.body.cargo,
      compañia: req.body.compañia,
    });
    addEmpleado.save();
    return res.status(200).json({
      messague: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      messague: "fail",
    });
  }
};

const putTask = async (req, res) => {
  //console.log(req,body);
  const id = req.params.id;
  try {
    await Empleado.findByIdAndUpdate({
      _id: id
    }, {
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      cargo: req.body.cargo,
      compañia: req.body.compañia,
    })
    return res.status(200).json({
      messague: "ok",
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
};

const delTask = async (req, res) => {
  try {
    await Empleado.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.status(200).json({
      messague: 'Eliminado',
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

}


export default {
  getTask,
  addTask,
  putTask,
  delTask,
};
