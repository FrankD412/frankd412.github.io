/*
$("a.collapsible").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {});
});
*/

$("a.collapsible").click(function () {
    $header = $(this);
    var id = event.target.id;
    var value = event.target.value;
    console.log(id);
    var name = id + "-" + value;
    console.log(name);

    
    //getting the next element
    $content = $('#' + name);
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () { });
});
