import { Router } from "express";
import sucursalController from '../controller/sucursalController'
const router = Router()
router.get('/sucur', sucursalController.getSucursal)
router.post('/sucur', sucursalController.addSucursal)
router.put('/sucur/:id', sucursalController.putSucursal)
router.delete('/sucur/:id', sucursalController.delSucursal)
export default router