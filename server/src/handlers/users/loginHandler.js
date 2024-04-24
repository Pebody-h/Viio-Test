import { loginController } from "../../controllers/users/loginController.js"


export const loginHandler = async (req, res) => {
  const {email, password} = req.body
  try {
    const verifyAccount = await loginController({email, password})
    if(verifyAccount) {
      res.status(200).json(verifyAccount)
    } else {
      res.status(401).json({error: 'correo electrónico o contraseña erróneos. intentelo de nuevo.'})
    }
  } catch (error) {
    
  }
}