 $('.sponser_slide').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1
            // responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3
            //     }
            // },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
            // ]
        });
 $('.evnt_clientOuter').slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            arrows: true,
            slidesToScroll: 4,
             responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3
                 }
             },
             {
                 breakpoint: 767,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
             },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
             }
             ]
        });
$(document).ready(function(){
	$(".hdng_pnnl a").click(function(){
	$(this).parents(".agenda_rghtPnnl").find(".accordin_pannl").stop().slideToggle();
	$('.accordin_pannl').not($(this).parents(".agenda_rghtPnnl").find(".accordin_pannl")).slideUp();
});
})

$(function(){
  var outerRowPage = 1;
  var outerRowPageNum = 2;
  var outerBxPage = 1;
  var outerBxPageNum = 4;
  var latest_articleAreaPage = 1;
  var latest_articleAreaNum = 3;

  $(".upkoming_outerRow .col-md-6:lt("+ outerRowPageNum +")").show();
  $(".past_event_outerBx .pat_eventPnnl:lt("+ outerBxPageNum +")").show();
  $(".latest_articleArea .col-lg-4:lt("+ latest_articleAreaNum +")").show();

  $(".upkoming_outerRow .basic_btn").click(function(event) {
    var counts;
    outerRowPage +=1;
    counts = outerRowPage * outerRowPageNum;
    if(counts >= $(".upkoming_outerRow .col-md-6").length){
      $(this).hide();
    }
    $(".upkoming_outerRow .col-md-6:lt("+ counts +")").show();
  });
  $(".past_eventArea .basic_btn").click(function(event) {
    var counts;
    outerBxPage +=1;
    counts = outerBxPage * outerBxPageNum;
    if(counts >= $(".past_event_outerBx .pat_eventPnnl").length){
      $(this).hide();
    }
    $(".past_event_outerBx .pat_eventPnnl:lt("+ counts +")").show();
  });
  $(".latest_articleArea .basic_btn").click(function(event) {
    var counts;
    latest_articleAreaPage +=1;
    counts = latest_articleAreaPage * latest_articleAreaNum;
    if(counts >= $(".latest_articleArea .col-lg-4").length){
      $(this).hide();
    }
    $(".latest_articleArea .col-lg-4:lt("+ counts +")").show();
  });
})
