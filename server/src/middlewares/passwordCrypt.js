import bcrypt from "bcryptjs";

export const encryptPassword = async (password) => {
  const encrypt = await bcrypt.hash(password, 10)
  return encrypt
}

export const comparePassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash)
  return match
}