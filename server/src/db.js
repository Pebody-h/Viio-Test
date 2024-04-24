import { Sequelize } from 'sequelize'
import { modelUser } from './models/user.js'
import 'dotenv/config'

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {logging: false, native: false})

modelUser(sequelize)

export const { User } = sequelize.models
export const conn = sequelize