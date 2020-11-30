// Esercizio: creare una to-do list, come quella fatta insieme stamattina, utilizzando Handlebars come templating engine.
// Consiglio: fate uno step alla volta, prima caricate Handlebars da CDN in pagina, poi provate a seguire i primi step della sezione "Usage", modificando le proprietà dell'oggetto context.
$(document).ready(
  function () {

    var list = [
      "Fare la spesa",
      "Allenamento",
      "Pulire il garage",
      "Guardare la partita",
      "Finire le birre",
    ];

    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    console.log(source);
    // console.log(template);
    // stampare la lista
    for (var i = 0; i < list.length; i++) {

      var context = { element: list[i] };
      var html = template(context);
      console.log(html);
      $("#todo-list").append(html)

    }
    // eliminare le cose fatte
    $(document).on('click', '.delete',
        function () {
          $(this).parent().slideUp();
        }
      );


      $('input').keypress(
        function (event) {
          console.log(event.which, event.keyCode);
          if (event.which == 13 || event.keyCode == 13) {
              var newElement = $('[name="add"]').val();
              var context = { element: newElement };
              var html = template(context);
              // console.log(html);
              $("#todo-list").append(html)
          }

        }
      );

  }
);
