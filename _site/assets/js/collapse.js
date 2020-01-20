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
    var key = event.target.getAttribute("key");
    var value = event.target.getAttribute("content");
    console.log(key);
    var name = key + "-" + value;
    console.log(name);

    $chevron = $('#' + name + "-chev")
    console.log(name + "-chev")
    $chevron.toggleClass("down")
    //getting the next element
    $content = $('#' + name);
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () { });
});

