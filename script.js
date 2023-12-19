$(".to-pack-button").click(function() {
  let question = $(".to-pack-input").val();
  $(".packing-list").append("<li>"+" Im going to pack " + question+" "+ "</li>");
    console.log(question);
});

