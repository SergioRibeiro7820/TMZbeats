$ (
function() {
    $ ('.js-ocultar').hide();

    $('.imagem').mouseover( function(){
        $ (this).children().stop().fadeTo('fast', 0.5);
    })

    .mouseleave( function(){
        $ (this).children().stop().fadeTo('slow', 1);
});
}
);

function exibecategoria(id) {
    $(
        function() {
            $('.grupo-capas').hide();
            $('#grupo' + id).fadeIn();
        }
    );
}