const validation = (userData) =>{

let errors = {};

if (!userData.username) {
    errors.username = 'Este campo no puede estar vacío';
} else if (userData.username.length > 35) {
    errors.username = 'El email no puede superar los 35 caracteres';
} else if (!/^[\w.-]+@\w+(\.\w{2,3})+$/.test(userData.username)) {
    errors.username = 'El email es inválido';
}

if (!userData.password) {
    errors.password = 'Este campo no puede estar vacío';
} else if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
} else if (!/\d/.test(userData.password)) {
    errors.password = 'La contraseña debe contener al menos un número';
}

return errors;
};



export default validation;