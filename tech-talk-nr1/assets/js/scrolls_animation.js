

// BIBLIOTHEQUE JQUERY
$(function(){

    // SIBLES
    let html_body = $('html, body');
    let projet_0 = $('#projet_0');
    let projet_0_v2 = $('#projet_0_v2');
    let projet_1 = $('#projet_1');
    let projet_1_v2 = $('#projet_1_v2');
    let presentation = $('#presentation');
    let exemple_de_code = $('#exemple_de_code');
    let radio = $('#radio');



    // BTS
    let a_scroll_up = $(".a_scroll_up");

    let a_projet_0 = $(".a_projet_0");
    let a_projet_0_v2 = $(".a_projet_0_v2");

    let a_projet_1 = $(".a_projet_1");
    let a_projet_1_v2 = $(".a_projet_1_v2");

    let a_presentation = $(".a_presentation");

    let a_exemple_de_code = $(".a_exemple_de_code");

    let a_radio = $(".a_radio");



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
    
    a_exemple_de_code.click(function(){
        html_body.animate({
            scrollTop: exemple_de_code.offset().top
        }, 2000);
    })
    
    a_radio.click(function(){
        html_body.animate({
            scrollTop: radio.offset().top
        }, 2000);
    })

})