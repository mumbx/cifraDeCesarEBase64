var radioC = document.getElementById("processo1")

var radioD = document.getElementById("processo2")

var btn = document.getElementById("btn")

var txtArea = document.getElementById("txtArea")

var resultado = document.getElementById("resultado")

var select = document.getElementById("linguagem")

var cifrainput = document.getElementById("cifrainput")

var cifra = document.getElementById("cifra")


radioC.addEventListener('click', function(e){

    btn.innerText = ' 🔒 Codificar'       

})

radioC.click()

radioD.addEventListener('click', function(e){

    btn.innerText = ' 🔑 Decodificar'

})


function codificarBase64(){

    var palavra;
    
    if(txtArea.textLength > 0){

        palavra = btoa(txtArea.value)

        resultado.innerText = palavra        

    }else{

        resultado.innerText = "Digite um texto"
    }   

}

function decodificarBase64(){

    var palavraCodificada;
    
    if(txtArea.textLength > 0){

        palavraCodificada = atob(txtArea.value) 

        resultado.innerText = palavraCodificada

    }else{

        resultado.innerText = "Digite um texto"
    }   

}


function cifraDeCesar (string, incremento){

    let result = "";
    let codigoLetra;

    for ( let i=0; i<string.length;i++){

      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){

        codigoLetra = (((string.charCodeAt(i)-65)+incremento)%26)+65;
      }

      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        codigoLetra = (((string.charCodeAt(i)-97)+incremento)%26)+97;
      }

      else if (string.charCodeAt(i)===32){
        codigoLetra = 32;
      }

      result += String.fromCharCode(codigoLetra);
    }

    return result;
  }

  function decifraDeCesar (string, incremento){

    let result = "";
    let codigoLetra;

    for ( let i=0; i<string.length;i++){

      if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){

        codigoLetra = (((string.charCodeAt(i)-65)-incremento)%26)+65;
      }

      else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
        codigoLetra = (((string.charCodeAt(i)-97)-incremento)%26)+97;
      }

      else if (string.charCodeAt(i)===32){
        codigoLetra = 32;
      }

      result += String.fromCharCode(codigoLetra);
    }

    return result;
  }

  function codificarCC(){

    var palavra = txtArea.value
    var incremento = parseInt(cifra.value) 
    var palavraCodificada = ""; 

    for(var i = 0; i < palavra.length; i++){

        palavraCodificada += cifraDeCesar(palavra[i], incremento)

    }   

   resultado.innerText = palavraCodificada

}

function decodificarCC(){

    var palavra = txtArea.value
    var incremento = parseInt(cifra.value) 
    var palavraDecodificada = ""; 

    for(var i = 0; i < palavra.length; i++){

        palavraDecodificada += decifraDeCesar(palavra[i], incremento)

        console.log(palavra[i])

    }   

   resultado.innerText = palavraDecodificada

}


btn.addEventListener('click', function(e){

    e.preventDefault()

    if(select.value == "B64"){

        if(radioC.checked == true){

            codificarBase64()
    
        }else{
            decodificarBase64()
        }

    }else{

        if(radioC.checked == true){

            codificarCC()

        }else{
           decodificarCC()
        }

    }

    

})

select.addEventListener('change', function(){

    if(select.value == "B64"){

        cifrainput.style.display = "none"

    }else{
        cifrainput.style.display = "block"
        
    }

})


