function alertaEnvio() {
    var varNome = document.getElementById("txtnome")
    var nome = varNome.value
    var varSobrenome = document.getElementById("txtsobrenome")
    var sobrenome = varSobrenome.value
    var varCpf = document.getElementById("txtcpf")
    var cpf = varCpf.value
    var varData = document.getElementById("dtdata")
    var data = varData.value
    var varSexo = document.getElementsByTagName("sexo")
    var sexo = varSexo.value
    var varTelefone1 = document.getElementById("teltelefone1")
    var telefone1 = varTelefone1.value
    var varTelefone2 = document.getElementById("teltelefone2")
    var telefone2 = varTelefone2.value
    var varEmail = document.getElementById("ememail")
    var email = varEmail.value
    window.confirm("Confirma o envio dos seguintes dados: \n \
    - Nome: "+ nome +" \n \
    - Sobrenome: "+ sobrenome +" \n \
    - CPF: "+ cpf +" \n \
    - Data de Nacimento: "+ data +" \n \
    - Sexo:"+ sexo +" \n \
    - Telefone 1: "+ telefone1 +" \n \
    - Telefone 2: "+ telefone2 +" \n \
    - E-mail: "+ email +"")
    window.alert("Parabéns, " + nome + ". Agora você é um membro da Comunidade Strokes!")
}

const maskcpf = document.querySelector("#txtcpf")
maskcpf.addEventListener("keypress", () => {
    let maskcpflength = maskcpf.value.length
    if (maskcpflength === 3 || maskcpflength === 7) {
        maskcpf.value += "."
    } else if (maskcpflength === 11) {
        maskcpf.value += "-"
    }
})

const telefone1 = document.querySelector("#teltelefone1")
telefone1.addEventListener("keypress", () => {
    let telefonelength = telefone1.value.length
    if (telefonelength === 0) {
        telefone1.value += "("       
    } else if (telefonelength === 3) {
        telefone1.value += ")"
    } else if (telefonelength === 9) {
        telefone1.value += "-"
    }
})

const telefone2 = document.querySelector("#teltelefone2")
telefone2.addEventListener("keypress", () => {
    let telefonelength = telefone2.value.length
    if (telefonelength === 0) {
        telefone2.value += "("       
    } else if (telefonelength === 3) {
        telefone2.value += ")"
    } else if (telefonelength === 9) {
        telefone2.value += "-"
    }
})