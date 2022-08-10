// Category left (Product list)
$(document).ready(function(){
    // All category__left--item
    let iconActiveList = $('.title__icon-active');
    let iconAddList = $('.title__icon.add');
    console.log(iconAddList);
    let iconSubList = $('.title__icon.sub');
    let decriptionList = $('.category__left-item > .description');
   
    iconActiveList.each(function(index,e){
        $(e).click(function(){
            $(iconAddList[index]).toggle();
            $(iconSubList[index]).toggle();
            $(decriptionList[index]).slideToggle(240);
        })
    })
    
    // Nang cao item 
    let decriptionListNangCao = $('.description--nangcao--title');
    let decriptionNangCaoChildren = $('.description.decription--nangcao-children');
    let nangcaoBtn = $('.description--nangcao--title > .ncbtn');

    decriptionListNangCao.each(function(index,e){
        $(e).click(function(){
            $(nangcaoBtn[index]).toggleClass('ncbtn-check');
            $(iconAddList[index+5]).toggle();
            $(iconSubList[index+5]).toggle();
            $(decriptionNangCaoChildren[index]).slideToggle(240);
        })
    })

    let ncChildList = $('.decription--nc');
    let ncBtnChildList = $('.decription--nc > .ncbtn');
    ncChildList.each(function(index,e){
        $(e).click(function(){
            $(ncBtnChildList[index]).toggleClass('ncbtn-check');
        })
    })
    
    // Size item
    let sizeList = $('.description--size > .size');
    sizeList.each(function(index,e){
        $(e).click(function(){
            $(e).toggleClass('border-size');
        })
    })

    // Color item

    let colorList = $('.description--color--item > .color');
    colorList.each(function(index,e){
        $(e).click(function(){
            $(e).toggleClass('ncbtn ncbtn-check');
        })
    })

    //Price item
    let priceInput = $('.description--price > input');
    let currentPrice = $('.description--price > .cur-price');
    console.log(currentPrice);
    priceInput.change(function(){
        let phanchia = Math.floor(priceInput.val() / 10);
        let phandu = Math.floor(priceInput.val() % 10);
        if(phanchia == 0 && phandu == 0) currentPrice.text(0);
        else{
            currentPrice.text(phanchia == 0 ? phandu + '00.000đ' : phanchia + '.' + phandu + '00.000đ');
        }
    })

    // Chiet khau item
    let ckBtn1 = $('.ckbtn.ckbtn1');
    let ckBtn2 = $('.ckbtn.ckbtn2');
    let ckBtn3 = $('.ckbtn.ckbtn3');
    let ckBtn4 = $('.ckbtn.ckbtn4');
    let ckBtn5 = $('.ckbtn.ckbtn5');

    ckBtn1.click(function(){
        ckBtn1.addClass('btn-check');
        ckBtn2.removeClass('btn-check');
        ckBtn3.removeClass('btn-check');
        ckBtn4.removeClass('btn-check');
        ckBtn5.removeClass('btn-check');       
    })

    ckBtn2.click(function(){
        ckBtn2.addClass('btn-check');
        ckBtn1.removeClass('btn-check');
        ckBtn3.removeClass('btn-check');
        ckBtn4.removeClass('btn-check');
        ckBtn5.removeClass('btn-check');       
    })

    ckBtn3.click(function(){
        ckBtn3.addClass('btn-check');
        ckBtn1.removeClass('btn-check');
        ckBtn2.removeClass('btn-check');
        ckBtn4.removeClass('btn-check');
        ckBtn5.removeClass('btn-check');       
    })

    ckBtn4.click(function(){
        ckBtn4.addClass('btn-check');
        ckBtn1.removeClass('btn-check');
        ckBtn2.removeClass('btn-check');
        ckBtn3.removeClass('btn-check');
        ckBtn5.removeClass('btn-check');       
    })

    ckBtn5.click(function(){
        ckBtn5.addClass('btn-check');
        ckBtn2.removeClass('btn-check');
        ckBtn3.removeClass('btn-check');
        ckBtn4.removeClass('btn-check');
        ckBtn1.removeClass('btn-check');       
    })

    // List product responsive
       
    let sanPhamIcons = $('.san-pham-icon');
    let listProductMobile = $('.list__product-mobile');
    let sanPhamIcon1 = $('.san-pham-icon > i:nth-child(1)');
    let sanPhamIcon2 = $('.san-pham-icon > i:nth-child(2)');

    sanPhamIcons.click(function(){
        listProductMobile.slideToggle(250);
        sanPhamIcon1.toggle();
        sanPhamIcon2.toggle();
    })

    // Filter btn responsive
    let filterMobile = $('.filter__tablet-mobile');
    filterMobile.click(function(){
        $('.category__left-list').slideToggle(200);
        $('.category__left-btn').slideToggle(200);
        
        $('.filter__btn > i:first-child').toggle();
        $('.filter__btn > i:last-child').toggle();
    })

})