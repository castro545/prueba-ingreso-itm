import Compañia from "../models/companiaModel";

const getCompa = async (req, res) => {
  try {
    let compa = await Compañia.find();
    return res.status(200).json({
      data: compa
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      messague: error,
      jjaja: 'fasdf'
    });
  }
};
const addCompa = async (req, res) => {
  console.log(req.body);
  try {
    const addCompan = new Compañia({
        nombre: req.body.nombre,
        sucursal: req.body.sucursal,
    });
    addCompan.save();
    return res.status(200).json({
      messague: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      messague: "fail",
    });
  }
};

const putCompa = async (req, res) => {
  //console.log(req,body);
  const id = req.params.id;
  try {
    await Compañia.findByIdAndUpdate({
      _id: id
    }, {
      nombre: req.body.nombre,
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

const delCompa = async (req, res) => {
  try {
    await Compañia.findByIdAndDelete({
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
  getCompa,
  addCompa,
  putCompa,
  delCompa,
};
