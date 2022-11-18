function login(){
    username = document.getElementById('usuario').value;
    password = document.getElementById('senha').value;
    

    if(username == 'rodrigo' && password == '12345'){
        console.log("USUÁRIO AUTENTICADO");
    } else {
        console.log("USUÁRIO NÃO AUTENTICADO")
    }
}

