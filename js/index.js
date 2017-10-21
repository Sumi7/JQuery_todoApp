var todoApp = (function(){

    var todo = [];

    //cacheDOM
    var $el = $('#app');
    var $input = $el.find('input');
    var $button = $el.find('button');
    var $ul = $el.find('ul');
    var listItem = $el.find('#todo-item').html();
    var $del = $el.find('.del')

    // bindEvents
    $button.on('click', addTodo);
    $ul.on('click', '.del', deleteTodo);
    $ul.on('mouseenter mouseleave', '.del', hoverChange);
    //render call

    render();

    //function declarations
    function hoverChange(e){        
        var $elem = $(e.target).closest('li');
        $elem.toggleClass('delete')
    }
    function addTodo(){
        todo.push($input.val());
        $input.val('');
        render();
    }
    function deleteTodo(e){
        var $elem = $(e.target).closest('li');
        var $rem = $ul.find('li').index($elem);
        todo.splice($rem, 1);
        render();
    }
    function render(){
        var data = {
            todo: todo
        }
        $ul.html(Mustache.to_html(listItem, data));
    }

})();
