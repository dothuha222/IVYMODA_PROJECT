
// Xử lý khi click vào choose color

const chooseColorList = document.querySelectorAll('.product__detail--color > .btn--color');
const leftImgList = document.querySelectorAll('.product__detail--content-left-img');
chooseColorList.forEach(function(e,index){
    e.addEventListener('click', function(){
        if(index === 0){
            e.classList.add('btn--color-check');
            chooseColorList[1].classList.remove('btn--color-check');
            chooseColorList[2].classList.remove('btn--color-check');

            leftImgList[index].style.display = 'flex';
            leftImgList[1].style.display = 'none';
            leftImgList[2].style.display = 'none';
            
        }
        else if(index === 1){
            e.classList.add('btn--color-check');
            chooseColorList[0].classList.remove('btn--color-check');
            chooseColorList[2].classList.remove('btn--color-check');

            leftImgList[index].style.display = 'flex';
            leftImgList[0].style.display = 'none';
            leftImgList[2].style.display = 'none';
        }
        else if(index === 2){
            e.classList.add('btn--color-check');
            chooseColorList[0].classList.remove('btn--color-check');
            chooseColorList[1].classList.remove('btn--color-check');

            leftImgList[index].style.display = 'flex';
            leftImgList[0].style.display = 'none';
            leftImgList[1].style.display = 'none';
        }
    })
})


// Xử lý khi click vào ảnh bé ra ảnh to
leftImgList.forEach(function(e,index){
    let bigImg = e.querySelector('.product__detail--content-left-big-img > img');
    let smallImgs = e.querySelectorAll('.product__detail--content-left-smaill-img > img');
    smallImgs.forEach(function(e,index){
        e.addEventListener('click', function(){
            bigImg.src = e.src;
        })
    })
})

// Xử lý khi click vào Size span
const sizeList = document.querySelectorAll('.product__detail--size-list > span');
sizeList.forEach(function(e,index){
    e.addEventListener('click', function(){
        if(index == 0){
            e.classList.add('detail--size-border');
            sizeList[1].classList.remove('detail--size-border');
            sizeList[2].classList.remove('detail--size-border');
            sizeList[3].classList.remove('detail--size-border');
            sizeList[4].classList.remove('detail--size-border');
        }
        if(index == 1){
            e.classList.add('detail--size-border');
            sizeList[0].classList.remove('detail--size-border');
            sizeList[2].classList.remove('detail--size-border');
            sizeList[3].classList.remove('detail--size-border');
            sizeList[4].classList.remove('detail--size-border');
        }
        if(index == 2){
            e.classList.add('detail--size-border');
            sizeList[0].classList.remove('detail--size-border');
            sizeList[1].classList.remove('detail--size-border');
            sizeList[3].classList.remove('detail--size-border');
            sizeList[4].classList.remove('detail--size-border');
        }
        if(index == 3){
            e.classList.add('detail--size-border');
            sizeList[0].classList.remove('detail--size-border');
            sizeList[1].classList.remove('detail--size-border');
            sizeList[2].classList.remove('detail--size-border');
            sizeList[4].classList.remove('detail--size-border');
        }
        if(index == 4){
            e.classList.add('detail--size-border');
            sizeList[0].classList.remove('detail--size-border');
            sizeList[1].classList.remove('detail--size-border');
            sizeList[2].classList.remove('detail--size-border');
            sizeList[3].classList.remove('detail--size-border');
        }
    })
})


// Xử lý phần số lượng(quantity)
const quantityInput = document.querySelector('.product__detail--quantity-input > input');
const increaValInput = document.querySelector('.product__detail--quantity-increase');
const decreaValInput = document.querySelector('.product__detail--quantity-decrease');


increaValInput.onclick = function(){
    quantityInput.value = Number(quantityInput.value) + 1;
    if(quantityInput.value > Number(quantityInput.max)){
        quantityInput.value = quantityInput.max;
    }
}

decreaValInput.onclick = function(){
    quantityInput.value = Number(quantityInput.value) - 1;
    if(quantityInput.value < Number(quantityInput.min)) {
        quantityInput.value = quantityInput.min;
    }
}


// Xử lý phần tab
const tabTitleList = document.querySelectorAll('.product__detail--tab-title');
const tabContentList = document.querySelectorAll('.product__detail--tab-content');


tabTitleList.forEach(function(e,index){
    e.addEventListener('click', function(){
        if(index == 0){
            e.classList.add('tab--title-border');
            tabTitleList[1].classList.remove('tab--title-border');
            tabTitleList[2].classList.remove('tab--title-border');

            tabContentList[index].style.display = 'block';
            tabContentList[1].style.display = 'none';
            tabContentList[2].style.display = 'none';

            tabContentList[1].classList.remove('show__detail-more');
            tabContentList[2].classList.remove('show__detail-more');
        }
        if(index == 1){
            e.classList.add('tab--title-border');
            tabTitleList[0].classList.remove('tab--title-border');
            tabTitleList[2].classList.remove('tab--title-border');

            tabContentList[index].style.display = 'block';
            tabContentList[0].style.display = 'none';
            tabContentList[2].style.display = 'none';

            tabContentList[0].classList.remove('show__detail-more');
            tabContentList[2].classList.remove('show__detail-more');
            
        }
        if(index == 2){
            e.classList.add('tab--title-border');
            tabTitleList[0].classList.remove('tab--title-border');
            tabTitleList[1].classList.remove('tab--title-border');

            tabContentList[index].style.display = 'block';
            tabContentList[0].style.display = 'none';
            tabContentList[1].style.display = 'none';

            tabContentList[0].classList.remove('show__detail-more');
            tabContentList[1].classList.remove('show__detail-more');
        }
    })
})

// Xử lý phần show more
const showMoreBtn = document.querySelector('.show-more > span');
const showImg = document.querySelector('.show-more > span > img:nth-child(1)');
const hideImg = document.querySelector('.show-more > span > img:nth-child(2)');


showMoreBtn.addEventListener('click',function(){
    if(tabTitleList[0].matches('.tab--title-border')){
        tabContentList[0].classList.toggle('show__detail-more');
        showImg.classList.toggle('hide-icon');
        hideImg.classList.toggle('hide-icon');
    }
    else if(tabTitleList[1].matches('.tab--title-border')){
        tabContentList[1].classList.toggle('show__detail-more');
        showImg.classList.toggle('hide-icon');
        hideImg.classList.toggle('hide-icon');
    }
    else if(tabTitleList[2].matches('.tab--title-border')){
        tabContentList[2].classList.toggle('show__detail-more');
        showImg.classList.toggle('hide-icon');
        hideImg.classList.toggle('hide-icon');
    }
})