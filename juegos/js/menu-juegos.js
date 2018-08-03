$(document).ready(function(e) {
  function show (id) {
    id = id.substr(1)
    $('#sidebar a').removeClass('active');
    $('#'+id+'-btn').addClass('active');
    $('.content-categoria').addClass('hidden');
    $('#'+id).removeClass('hidden').addClass('active-categoria');
  }

  $('#sidebar a').on('click', function(e) {
    show($(this).attr('href'));
  })

  var hash = window.location.hash;
  if (hash) {
    show(hash);
  } else {
    show('#movimiento');
  }
})
