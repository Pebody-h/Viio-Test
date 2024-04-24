import { User } from "../../db.js";
import { comparePassword } from "../../middlewares/passwordCrypt.js";
import { createToken } from "../../middlewares/token.js";


export const loginController = async ({email, password}) => {
  const user = await User.findOne({where: {email}})
  if(!user)return null
  else {
    const matchPassword = await comparePassword(password, user.password)
    if(matchPassword) {
      const dataUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
      const token = createToken(dataUser)
      return {
        dataUser,
        token
      }
    } else return null
  }
}