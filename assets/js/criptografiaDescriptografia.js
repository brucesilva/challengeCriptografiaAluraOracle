 let msgPronta = "";
 let msg = "";

 
 function retornaFrase(){
   msg =  document.getElementById("msgParaCriptografar").value;  
   return msg;
 }


 function msgCriptografada(){  
    var text = document.getElementById("text"); 
    var msgInput = retornaFrase();
   
    msgInicial = msgInput;
    msg = msgInput;
    
   if(msgInput === ""){
        alert("Favor digite uma mensagem");
         
    }else{
        var msgCriptografada;
    
        // aqui desmontar a frase em caracteres
        msgCriptografada = msg.split("");
          
        for(var i=0; i< msgCriptografada.length; i++){
             
            if(msgCriptografada[i] == 'e'){
             
               msgCriptografada[i] = "enter";
            }
    
            if(msgCriptografada[i] == 'i'){
                msgCriptografada[i] = "imes";
             }
    
             if(msgCriptografada[i] == 'a'){
                msgCriptografada[i] = "ai";
             }
             if(msgCriptografada[i] == 'o'){
                msgCriptografada[i] = "ober";
             }
             if(msgCriptografada[i] == 'u'){
                msgCriptografada[i] = "ufat";
             }
    
             msgInput = msgCriptografada.join("");
            
    }
        document.querySelector("#btnTextoCopiado").style.display = "none";
        document.querySelector("#escondeMsg").style.display = "none";
        document.querySelector("#btnCopiar").style.display = "block";
        document.getElementById("msgParaCriptografar").value = ""; 
        text.innerHTML = msgInput; 

      //   aqui a msg já está criptografada
        msgPronta = msgInput;
       
    } 
 }

 function copiaTexto(){

   navigator.clipboard.writeText(msgPronta).
         then(() =>{})
         document.querySelector("#btnCopiar").style.display = "none";  
         document.querySelector("#btnTextoCopiado").style.display = "block";          
}
 
function descriptografar(){
   
   var msg = retornaFrase();
   var msgCriptografada;
   var msgDescriptografada;
   var text = document.getElementById("text");

   if(msgPronta === ""){
      alert("Não existe msg para ser descriptografada ainda");
      
   }else if(msg === ""){
      alert("Copie e cole a msg que foi criptografada");
   
   }else{
        
     
      msgDescriptografada = msg.replace(/enter/g, "e").replace(/imes/g, "i").
      replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
   
      text.innerHTML = msgDescriptografada;
         
       }
  
}

var campoParaDigitacao = document.querySelector("#textoAutomatico");
var text = "lura + Oracle - One Oracle Next Education T5";

var interval = 200;

function showText(campoParaDigitacao, text, interval){
    var char = text.split("").reverse();
    
    
    var typer = setInterval(function(){

        if(!char.length){
            return clearInterval(typer)
        }

        var next = char.pop();

        campoParaDigitacao.innerHTML += next;

    },interval)
}
showText(campoParaDigitacao, text, interval);