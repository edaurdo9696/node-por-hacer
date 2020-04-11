const descripcion = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};





const argv = require('yargs')

.command('crear', 'Generas un archivo con la tarea', {
    descripcion
})

.command('actualizar', 'actualiza la tarea', {
    descripcion,
    completado
})

.command('borrar', 'borra una tarea', {
    descripcion
})



.help()
    .argv;

module.exports = {
    argv
}