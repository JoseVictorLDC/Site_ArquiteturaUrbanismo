$(document).ready(function () {

    // Ao alterar o estado de qualquer checkbox
    $(":checkbox").change(function () {
        // Obter todas as categorias selecionadas
        var categoriasSelecionadas = $(":checkbox:checked").map(function () {
            return this.value;
        }).get();

        // Mostrar/ocultar itens com base nas categorias selecionadas
        $(".item").hide();
        categoriasSelecionadas.forEach(function (categoria) {
            $("." + categoria).show();
        });
    });
});