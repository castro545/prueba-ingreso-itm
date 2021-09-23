import { Router } from "express";
import empleController from '../controller/empleController'
const router = Router()
router.get('/task', empleController.getTask)
router.post('/task', empleController.addTask)
router.put('/task/:id', empleController.putTask)
router.delete('/task/:id', empleController.delTask)
export default router