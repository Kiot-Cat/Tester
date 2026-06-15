import { Tabla } from "../models/escuela.model.jsp";

Tabla.create(
    { //Alumno 1
        alumno:"José",
        matricula:"abc001",
        materias:{
            materia_1:"calculo",
            materia_2:"lenguas",
            materia_3:"computo"
        },
        calificacion_PM:{
            calculo:9,
            lenguas:7,
            computo:10
        },
        asistencia:{
            as_mat1:2,
            as_mat2:4,
            as_mat3:5
        },
        promedio:8.6,
        grado:"A201"
    },
    { //Alumno 2
        alumno:"Kevin",
        matricula:"abc002",
        materias:{
            materia_1:"calculo",
            materia_2:"lenguas",
            materia_3:"computo"
        },
        calificacion_PM:{
            calculo:8,
            lenguas:9,
            computo:10
        },
        asistencia:{
            as_mat1:1,
            as_mat2:1,
            as_mat3:0
        },
        promedio:9,
        grado:"A201"
    },
    { //Alumno 3
        alumno:"Manuel",
        matricula:"abc003",
        materias:{
            materia_1:"calculo",
            materia_2:"lenguas",
            materia_3:"computo"
        },
        calificacion_PM:{
            calculo:10,
            lenguas:9,
            computo:8
        },
        asistencia:{
            as_mat1:0,
            as_mat2:0,
            as_mat3:2
        },
        promedio:9,
        grado:"A201"
    }
    { //Alumno 4
        alumno:"Hiram",
        matricula:"abc004",
        materias:{
            materia_1:"calculo",
            materia_2:"lenguas",
            materia_3:"computo"
        },
        calificacion_PM:{
            calculo:8,
            lenguas:8,
            computo:8
        },
        asistencia:{
            as_mat1:1,
            as_mat2:1,
            as_mat3:2
        },
        promedio:8,
        grado:"A201"
    },
    { //Alumno 5
        alumno: "Leonardo",
        matricula: "abc005",
        materias: {
            materia_1: "calculo",
            materia_2: "lenguas",
            materia_3: "computo"
        },
        calificacion_PM: {
            calculo: 9,
            lenguas: 8,
            computo: 10
        },
        asistencia: {
            as_mat1: 2,
            as_mat2: 1,
            as_mat3: 0
        },
        promedio: 9,
        grado: "A201"
    },
    { //Alumno 6
        alumno: "Mayte",
        matricula: "abc006",
        materias: {
            materia_1: "calculo",
            materia_2: "lenguas",
            materia_3: "computo"
        },
        calificacion_PM: {
            calculo: 10,
            lenguas: 9,
            computo: 9
        },
        asistencia: {
            as_mat1: 0,
            as_mat2: 0,
            as_mat3: 1
        },
        promedio: 9.3,
        grado: "A201"
    },
    { //Alumno 7
        alumno: "Alan",
        matricula: "abc007",
        materias: {
            materia_1: "calculo",
            materia_2: "lenguas",
            materia_3: "computo"
        },
        calificacion_PM: {
            calculo: 7,
            lenguas: 8,
            computo: 7
        },
        asistencia: {
            as_mat1: 3,
            as_mat2: 2,
            as_mat3: 2
        },
        promedio: 7.3,
        grado: "A201"
    },
    { //Alumno 8
        alumno: "Alejandro",
        matricula: "abc008",
        materias: {
            materia_1: "calculo",
            materia_2: "lenguas",
            materia_3: "computo"
        },
        calificacion_PM: {
            calculo: 8,
            lenguas: 9,
            computo: 8
        },
        asistencia: {
            as_mat1: 1,
            as_mat2: 1,
            as_mat3: 1
        },
        promedio: 8.3,
        grado: "A201"
    },
    { //Alumno 9
        alumno: "Gael",
        matricula: "abc009",
        materias: {
            materia_1: "calculo",
            materia_2: "lenguas",
            materia_3: "computo"
        },
        calificacion_PM: {
            calculo: 9,
            lenguas: 7,
            computo: 8
        },
        asistencia: {
            as_mat1: 2,
            as_mat2: 4,
            as_mat3: 1
        },
        promedio: 8,
        grado: "A201"
    },
    { //Alumno 10
        alumno: "Oziel",
        matricula: "abc010",
        materias: {
            materia_1: "calculo",
            materia_2: "lenguas",
            materia_3: "computo"
        },
        calificacion_PM: {
            calculo: 10,
            lenguas: 10,
            computo: 9
        },
        asistencia: {
            as_mat1: 0,
            as_mat2: 0,
            as_mat3: 0
        },
        promedio: 9.6.
        grado: "A201"
    }
)

export const test ≡ () ≡> console.log("Llamando controlador de app");