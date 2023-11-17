

// BIBLIOTHEQUE JQUERY
$(function(){

    // SIBLES
    let html_body = $('html, body');
    let projet_0 = $('#projet_0');
    let projet_0_v2 = $('#projet_0_v2');
    let projet_1 = $('#projet_1');
    let projet_1_v2 = $('#projet_1_v2');
    let presentation = $('#presentation');
    let sortable = $('#sortable');
    let swiperjs = $('#swiperjs');
    let chartjs = $('#chartjs');



    // BTS
    let a_scroll_up = $(".a_scroll_up");

    let a_projet_0 = $(".a_projet_0");
    let a_projet_0_v2 = $(".a_projet_0_v2");

    let a_projet_1 = $(".a_projet_1");
    let a_projet_1_v2 = $(".a_projet_1_v2");

    let a_presentation = $(".a_presentation");

    let a_sortable = $(".a_sortable");

    let a_swiperjs = $(".a_swiperjs");

    let a_chartjs = $(".a_chartjs");



    //FUNCTIONs
    a_scroll_up.click(function(){
        html_body.animate({
            scrollTop: html_body.offset().top
        }, 2000);
    })

    a_presentation.click(function(){
        html_body.animate({
            scrollTop: presentation.offset().top
        }, 2000);
    })
    
    a_projet_0.click(function(){
        html_body.animate({
            scrollTop: projet_0.offset().top
        }, 2000);
    })
    
    a_projet_0_v2.click(function(){
        html_body.animate({
            scrollTop: projet_0_v2.offset().top
        }, 2000);
    })
    
    a_projet_1.click(function(){
        html_body.animate({
            scrollTop: projet_1.offset().top
        }, 2000);
    })
    
    a_projet_1_v2.click(function(){
        html_body.animate({
            scrollTop: projet_1_v2.offset().top
        }, 2000);
    })
    
    a_sortable.click(function(){
        html_body.animate({
            scrollTop: sortable.offset().top
        }, 2000);
    })
    
    a_swiperjs.click(function(){
        html_body.animate({
            scrollTop: swiperjs.offset().top
        }, 2000);
    })
    
    a_chartjs.click(function(){
        html_body.animate({
            scrollTop: chartjs.offset().top
        }, 2000);
    })

})