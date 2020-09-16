$(document).ready(function() {

  // Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
  // Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
  // Il numero ottenuto appare al centro del quadrato.
 $("#generate").click(
   function() {
     $(".box").each(
       function () {
         var box = $(this);
         $.ajax(
       {
       "url": "https://flynn.boolean.careers/exercises/api/random/int",
       "method": "GET",
       "success": function (data, stato) {
       var rispostaServer = data.response;
        box.find("span").text(rispostaServer);
        if (rispostaServer < 5) {
          box.removeClass("bg_green");
          box.addClass("bg_yellow");
        } else {
          box.removeClass("bg_yellow");
          box.addClass("bg_green");
        }

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
