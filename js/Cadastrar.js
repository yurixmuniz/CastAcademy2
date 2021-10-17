function Cadastrar(){
    if(document.getElementById("lbNome").innerText == "Aluno"){
        alert("Aluno Cadastrado")
        var nome = document.getElementById("txtNome").value;
        var matricula = document.getElementById("txtDtMatricula").value;
        var login = document.getElementById("txtLogin").value;
        var senha = document.getElementById("txtSenha").value;
        var endereco = document.getElementById("txtEndereco").value;
        var complemento = document.getElementById("txtComplemento").value;
        var cidade = document.getElementById("txtCidade").value;
        var bairro = document.getElementById("txtBairro").value;
        var escolha = document.getElementById("txtEscolha").value;

        console.log(nome);
        console.log(matricula);
        console.log(login);
        console.log(senha);
        console.log(endereco);
        console.log(complemento);
        console.log(cidade);
        console.log(bairro);
        console.log(escolha);

    }
    else{
        alert("Professor Cadastrado")
        var nome = document.getElementById("txtNome").value;
        var matricula = document.getElementById("txtDtContratacao").value;
        var login = document.getElementById("txtLogin").value;
        var senha = document.getElementById("txtSenha").value;
        var endereco = document.getElementById("txtEndereco").value;
        var complemento = document.getElementById("txtComplemento").value;
        var cidade = document.getElementById("txtCidade").value;
        var bairro = document.getElementById("txtBairro").value;
        var escolha = document.getElementById("txtEscolha").value;
        var sobrevc = document.getElementById("txtSobreVc").value

        console.log(nome);
        console.log(matricula);
        console.log(login);
        console.log(senha);
        console.log(endereco);
        console.log(complemento);
        console.log(cidade);
        console.log(bairro);
        console.log(escolha);
        console.log(sobrevc);
    }
}