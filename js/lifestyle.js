const navigationItems = document.querySelectorAll('.navigation-list > .navigation-item');
const tabItems = document.querySelectorAll('.tab__wrap > .tab__item');
console.log(tabItems);

console.log(navigationItems);
navigationItems.forEach(function(e,index){
    e.addEventListener('click',function(){
        if(index == 0){
            e.classList.add('nav-border');
            navigationItems[1].classList.remove('nav-border');
            navigationItems[2].classList.remove('nav-border');
            navigationItems[3].classList.remove('nav-border');

            tabItems[index].style.display = 'block';
            tabItems[1].style.display = 'none';
            tabItems[2].style.display = 'none';
            tabItems[3].style.display = 'none';
        }
        if(index == 1){
            e.classList.add('nav-border');
            navigationItems[0].classList.remove('nav-border');
            navigationItems[2].classList.remove('nav-border');
            navigationItems[3].classList.remove('nav-border');

            tabItems[index].style.display = 'block';
            tabItems[0].style.display = 'none';
            tabItems[2].style.display = 'none';
            tabItems[3].style.display = 'none';
        }
        if(index == 2){
            e.classList.add('nav-border');
            navigationItems[0].classList.remove('nav-border');
            navigationItems[1].classList.remove('nav-border');
            navigationItems[3].classList.remove('nav-border');

            tabItems[index].style.display = 'block';
            tabItems[0].style.display = 'none';
            tabItems[1].style.display = 'none';
            tabItems[3].style.display = 'none';
        }
        if(index == 3){
            e.classList.add('nav-border');
            navigationItems[0].classList.remove('nav-border');
            navigationItems[1].classList.remove('nav-border');
            navigationItems[2].classList.remove('nav-border');

            tabItems[index].style.display = 'block';
            tabItems[0].style.display = 'none';
            tabItems[1].style.display = 'none';
            tabItems[2].style.display = 'none';
        }
    })
})