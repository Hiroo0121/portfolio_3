/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
$(function(){
    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
            $("+.submenu",this).slideToggle();
            return false;
        });
    });
});