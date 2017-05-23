var movies = [
    { "name": "Get Out", "myRating": "10", "deleteRow": "delete"},
    { "name": "Ex Machina", "myRating": "10", "deleteRow": "delete"},
    { "name": "Elle", "myRating": "10", "deleteRow": "delete"},
    { "name": "The Princess Bride", "myRating": "10", "deleteRow": "delete"}
  ];

function displayMovies() {
  "use strict";
  var tbody = $('#movies tbody');
  var props = ["name", "myRating", "deleteRow"];
  $.each(movies, function (i, movie) {
    var tr = $('<tr>');
    $.each(props, function (i, prop) {
      $('<td>').html(movie[prop]).appendTo(tr);
    });
    tbody.append(tr);
  });
}

$(document).ready(function () {
  "use strict";
  displayMovies();
    /* here is where i will try to add form to array */
  $("#myForm").submit(function (event) {
    var values = {};
    $.each($('#myForm').serializeArray(), function (i, field) {
      values[field.name] = field.value;
    });
    movies.push(values);
    console.log(movies);
    var tbody = $('#movies tbody');
    tbody.empty();
    displayMovies();
    event.preventDefault();
  });
});

/* here is where i will try to hide and seek */

$(document).ready(function () {
  "use strict";
  $("#form").hide();
  $("#hidenseek").click(function () {
    $("#table").hide();
  });
  $("#hidenseek").click(function () {
    $("#form").show();
  });
});

$(document).ready(function () {
  "use strict";
  $("#submit").click(function () {
    $("#form").hide();
  });
  $("#submit").click(function () {
    $("#table").show();
  });
});


/* here is where i will try to store things locally  AGAIN */
function rewriteFromStorage() {
  "use strict";
  $("#table").empty();
  for (var i = 0; i < localStorage.length; i++)    //******* length
    {
        var key = localStorage.key(i);              //******* key()
        if(key.indexOf(prefix) == 0) {
            var value = localStorage.getItem(key);  //******* getItem()
            //var value = localStorage[key]; also works
            var shortkey = key.replace(prefix, "");
            $("#table").append(
                $("<div class='metaConfigTable'>").html(shortkey + "=" + value)
                   .append($("<input type='button' value='Delete'>")
                           .attr('key', key)
                           .click(function() {      //****** removeItem()
                                localStorage.removeItem($(this).attr('key'));
                                rewriteFromStorage();
                            })
                          )
            );
        }
    }
}

rewriteFromStorage();

var prefix = "localStorageDemo-";
$("#submit").click(function () {
  var key = $("#newmovie").attr('value');
  var value = $("#newrating").attr('value');
  localStorage.setItem(prefix + key, value);      //******* setItem()
    //localStorage[prefix+key] = value; also works
  rewriteFromStorage();
});




