import Sucursal from "../models/sucursalModel";

const getSucursal = async (req, res) => {
  try {
    let sucur = await Sucursal.find();
    return res.status(200).json({
      data: sucur,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messague: error,

    });
  }
};
const addSucursal = async (req, res) => {
  console.log(req.body);
  try {
    const addSucurs = new Sucursal({
      nombre: req.body.nombre,
    });
    addSucurs.save();
    return res.status(200).json({
      messague: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      messague: "fail",
    });
  }
};

const putSucursal = async (req, res) => {
  //console.log(req,body);
  const id = req.params.id;
  try {
    await Sucursal.findByIdAndUpdate({
      _id: id
    }, {
      sucursal: req.body.sucursal,

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

const delSucursal = async (req, res) => {
  try {
    await Sucursal.findByIdAndDelete({
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
  getSucursal,
  addSucursal,
  putSucursal,
  delSucursal,
};
