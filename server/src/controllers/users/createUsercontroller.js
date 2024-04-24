import { User } from "../../db.js"; 
import { encryptPassword } from "../../middlewares/passwordCrypt.js";


export const createUserController = async ({ firstName, lastName, email, password }) => {
  const existingUser = await User.findOne({where: {email}})
  if (existingUser) {
    throw new Error('Email ya registrado')
  }

  const passwordHashed = await encryptPassword(password)
  const newUser = await User.create({
    firstName, 
    lastName, 
    email, 
    password: passwordHashed
  })

  return newUser
}