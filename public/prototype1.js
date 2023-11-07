var j = document.getElementById('main')
var g = document.getElementById('primary')
f = 1


$("body").keypress(function(event) {
        if (event.keyCode == 13 && event.shiftKey) {
          j.insertAdjacentHTML('beforeend', `<div> <textarea type="textarea" name="texta" id="test" value=""></textarea> <div class="btn-group" id="butn"> <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Text Type </button> <div class="dropdown-menu"> <div class="dropdown-item"><input type="radio" name="text${f}" value="title"><label for="title"><b>Title</b></a></label></div> <div class="dropdown-item"><input type="radio" name="text${f}" value="header"><label for="header"><u><b>Header</b></u></a></label></div> <div class="dropdown-item"><input type="radio" name="text${f}" value="secondary"><label for="secondary"><span>&#8226;</span><b>Secondary</b></a></label></div> <div class="dropdown-item"><input type="radio" name="text${f}" value="paragraph" checked><label for="paragraph">Paragraph</a></label></div> </div> </div> </div>`);
          g.insertAdjacentHTML('beforeend', `<input style="" name='number' value="${f}">`)
          f++
          return false;
         }
});
