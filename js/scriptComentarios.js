$(document).ready(function() {
    $("#form-com").submit(function(e){
      e.preventDefault();
      let comentario = $("#comment");
      alert("Comentario publicado!");
    });
    $("#form-com").reset(function(e){
      e.preventDefault();
      $("#comment").html = "";
    });
    
  });
$(document).ready(function() {
    $("#form-resp").submit(function(e){
        e.preventDefault();
        let comentario = $("#comment-resp");
        alert("Comentario publicado!");
      });
      $("#form-resp").reset(function(e){
        e.preventDefault();
        $("#comment-resp").html = "";
      });
})