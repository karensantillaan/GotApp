
$(document).ready(function(){
  $("#comentar").click(function(e){
    var nombre = $("#cnombre").val()
    var coment = $("#ccomentario").val()
    var fecha = new Date()    

    var cc = "<div>"+
      "<h3><b>"+nombre+":</b></h3>"+
      "<p>"+coment+"<br>  <letra style='font-size:16px;'> -"+fecha+"<letra></p>"+
      "</div>";
    $("#comentarios").append(cc)
  })
})
