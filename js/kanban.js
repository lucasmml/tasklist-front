$(function() {
    refreshKanban();
});

function refreshKanban(){
	$('.list-group-sortable').sortable({
        placeholderClass: 'list-group-item'
    });
    $('.list-group-sortable-exclude').sortable({
        placeholderClass: 'list-group-item',
        items: ':not(.disabled)'
    });
    $('.list-group-sortable-handles').sortable({
        placeholderClass: 'list-group-item',
        handle: 'span'
    });
    $('.list-group-sortable-connected').sortable({
        placeholderClass: 'list-group-item',
        connectWith: '.connected'
    });
}