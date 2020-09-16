$(document).ready(function() {

  // Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
  // Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
  // Il numero ottenuto appare al centro del quadrato.
 $("#generate").click(
   function() {
     $(".box span").each(
       function () {
         var box = $(this);
         $.ajax(
       {
       "url": "https://flynn.boolean.careers/exercises/api/random/int",
       "method": "GET",
       "success": function (data, stato) {
       var rispostaServer = data.response;
        box.text(rispostaServer);

       },
       "error": function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore);
       }
       });

       }
     )

   });

});

    // var source = document.getElementById("entry-template").innerHTML;
    // var template = Handlebars.compile(source);
    // var context = {
    //   "success": rispostaServer,
    // };
    // var html = template(context);
    // $("#box-wrapper").append(html);
