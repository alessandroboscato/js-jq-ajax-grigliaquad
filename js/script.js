$(document).ready(function() {

  // Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
  // Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
  // Il numero ottenuto appare al centro del quadrato.
var source = $("#entry-template").html();
var template = Handlebars.compile(source);
var count = 0;

 $("#generate").click(
   function() {
     if (count < 36) {
       $.ajax(
        {
        "url": "https://flynn.boolean.careers/exercises/api/random/int",
        "method": "GET",
        "success": function (data, stato) {
        var responseServer = data.response;
        var condition = false;
        if (responseServer > 5) {
          condition = true;
        }
        var context = {
          "number": responseServer,
          "condition": condition,
          "green": "bg_green"
        };
        var html = template(context);
        $("#box-wrapper").append(html);
        },
        "error": function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }
        });
     } else {
       $("#erase").show();
     }
      count += 1;
    });

    $("#erase").click(
      function() {
        $("#box-wrapper").html("");
        count = 0;
        $("#erase").hide();
      }
    )

//ready
   });
