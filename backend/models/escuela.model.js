import { Schema,model } from "mungoose";
const Esqueleto_Tabla = new Schema({
    alumno:String,
    matricula:String,
    materias: {
        materia_1: String,
        materia_2: String,
        materia_3: String
    },
    calificacion_PM: {
        calculo: Number,
        lenguas: Number,
        computo: Number
    },
    asistencia: {
        as_mat1: Number,
        as_mat2: Number,
        as_mat3: Number
    },
    promedio:Number,
    grado:String,
});
export const Tabla = new model("Tabla de comentarios", Esqueleto_Tabla);