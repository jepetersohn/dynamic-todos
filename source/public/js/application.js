$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents().submit(function(event)) {
    $('.add').on('click', function(event){
      event.preventDefault
    })

    $('.complete').on('click', function(event){
      event.preventDefault
      completeToDo(this);
    })

    $('.delete').on('submit', function(event){
      event.preventDefault
      deleteToDo(this);
    });
  });

  //Create functions to add, remove and complete todos




  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  bindEvents();
});

deleteToDo = function(todo){
  $.ajax({
    type: "DELETE",
    url: "/:id/remove",
    data: {"id": is it this?}
  })
  })
}
