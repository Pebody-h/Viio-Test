import { createUserController } from "../../controllers/users/createUsercontroller.js"

export const createUserHandler = async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  try {
    const newUser = await createUserController({ firstName, lastName, email, password })
    res.status(200).json(newUser)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}