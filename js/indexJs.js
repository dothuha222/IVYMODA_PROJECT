
// List product
const listProductOpen = document.querySelector('.list__item3-icon');
const listProduct = document.querySelector('.list__product');

listProductOpen.addEventListener('click', function(){
    listProduct.classList.toggle('active');
})

// Cart list
const chooseColor1List = document.querySelectorAll('.color__item1');
const chooseColor2List = document.querySelectorAll('.color__item2');
const chooseColor3List = document.querySelectorAll('.color__item3');
// console.log(chooseColor1List, chooseColor2List, chooseColor3List);

const chooseImg1 = document.querySelectorAll('.choose__color1');
const chooseImg2 = document.querySelectorAll('.choose__color2');
const chooseImg3 = document.querySelectorAll('.choose__color3');
const chooseImg4 = document.querySelectorAll('.choose__color4');
const chooseImg5 = document.querySelectorAll('.choose__color5');
const chooseImg6 = document.querySelectorAll('.choose__color6');

// Xử lý sự kiện click:
chooseColor1List.forEach(function(e,index){
    e.addEventListener('click', function(){
        e.classList.add('checked');
        chooseColor2List[index].classList.remove('checked');
        chooseColor3List[index].classList.remove('checked');

        chooseImg1[index].style.display = "block";
        chooseImg2[index].style.display = "none";
        chooseImg3[index].style.display = "none";
        chooseImg4[index].style.display = "none";
        chooseImg5[index].style.display = "none";
        chooseImg6[index].style.display = "none";
    })
})

chooseColor2List.forEach(function(e,index){
    e.addEventListener('click',function(){
        e.classList.add('checked');
        chooseColor1List[index].classList.remove('checked');
        chooseColor3List[index].classList.remove('checked');

        chooseImg1[index].style.display = "none";
        chooseImg2[index].style.display = "none";
        chooseImg3[index].style.display = "block";
        chooseImg4[index].style.display = "none";
        chooseImg5[index].style.display = "none";
        chooseImg6[index].style.display = "none";
    })
})

chooseColor3List.forEach(function(e,index){
    e.addEventListener('click',function(){
        e.classList.add('checked');
        chooseColor1List[index].classList.remove('checked');
        chooseColor2List[index].classList.remove('checked');

        chooseImg1[index].style.display = "none";
        chooseImg2[index].style.display = "none";
        chooseImg3[index].style.display = "none";
        chooseImg4[index].style.display = "none";
        chooseImg5[index].style.display = "block";
        chooseImg6[index].style.display = "none";
    })
})

// Xử lý hover
const cardImgList = document.querySelectorAll('.card__img');
// console.log(cardImgList)

cardImgList.forEach(function(e,index) {
    e.addEventListener('mouseover',function(){
        if(chooseColor1List[index].matches('.checked')){
            chooseImg1[index].style.display = "none";
            chooseImg2[index].style.display = "block";
            chooseImg3[index].style.display = "none";
            chooseImg4[index].style.display = "none";
            chooseImg5[index].style.display = "none";
            chooseImg6[index].style.display = "none";
        }
        if(chooseColor2List[index].matches('.checked')){
            chooseImg1[index].style.display = "none";
            chooseImg2[index].style.display = "none";
            chooseImg3[index].style.display = "none";
            chooseImg4[index].style.display = "block";
            chooseImg5[index].style.display = "none";
            chooseImg6[index].style.display = "none";
        }
        if(chooseColor3List[index].matches('.checked')){
            chooseImg1[index].style.display = "none";
            chooseImg2[index].style.display = "none";
            chooseImg3[index].style.display = "none";
            chooseImg4[index].style.display = "none";
            chooseImg5[index].style.display = "none";
            chooseImg6[index].style.display = "block";
        }
        console.log(e,index);
    })

    e.addEventListener('mouseleave', function(){
        if(chooseColor1List[index].matches('.checked')){
            chooseImg1[index].style.display = "block";
            chooseImg2[index].style.display = "none";
            chooseImg3[index].style.display = "none";
            chooseImg4[index].style.display = "none";
            chooseImg5[index].style.display = "none";
            chooseImg6[index].style.display = "none";
            console.log(e);
        }
        if(chooseColor2List[index].matches('.checked')){
            chooseImg1[index].style.display = "none";
            chooseImg2[index].style.display = "none";
            chooseImg3[index].style.display = "block";
            chooseImg4[index].style.display = "none";
            chooseImg5[index].style.display = "none";
            chooseImg6[index].style.display = "none";
        }
        if(chooseColor3List[index].matches('.checked')){
            chooseImg1[index].style.display = "none";
            chooseImg2[index].style.display = "none";
            chooseImg3[index].style.display = "none";
            chooseImg4[index].style.display = "none";
            chooseImg5[index].style.display = "block";
            chooseImg6[index].style.display = "none";
        }
    })
})

// Responsive

// Nav mobile left
const navBarBtn = document.querySelector('.nav__icon-btn');
const navOverlay = document.querySelector('.nav__overlay');
const navMobileLeft = document.querySelector('.nav__mobile-left');
const navCloseLeft = document.querySelector('.nav__mobile-left-close');

navBarBtn.addEventListener('click',function(){
    navOverlay.style.display = 'block';
    navMobileLeft.style.transform = 'translateX(0)';
    navMobileLeft.style.opacity = '1';
})

navCloseLeft.addEventListener('click',function(){
    navOverlay.style.display = 'none';
    navMobileLeft.style.transform = 'translateX(-100%)';
    navMobileLeft.style.opacity = '0';
})



// Nav mobile right
const cartIcon = document.querySelector('.nav__pc-cart > i:nth-child(2)');
const navMobileRight = document.querySelector('.nav__mobile-right');
const navCloseRight = document.querySelector('.nav__mobile-right-close');

cartIcon.addEventListener('click', function(){
    navMobileRight.style.transform = 'translatex(0)';
    navMobileRight.style.opacity = '1';
    navOverlay.style.display = 'block';
})

navCloseRight.addEventListener('click', function(){
    navOverlay.style.display = 'none';
    navMobileRight.style.opacity = '0';
    navMobileRight.style.transform = 'translateX(100%)';
})

// Nav overlay
navOverlay.addEventListener('click',function(){
    navOverlay.style.display = 'none';

    navMobileLeft.style.transform = 'translateX(-100%)';
    navMobileLeft.style.opacity = '0';

    navMobileRight.style.transform = 'translateX(100%)';
    navMobileRight.style.opacity = '0';
})