var hideAll = () => {
    document.querySelectorAll('.inv-list li').forEach(el => {
        el.style.display = 'none';
    })
}

var showAll = () => {
    document.querySelectorAll('.inv-list li').forEach(el => {
        el.style.display = 'block';
    })
}

document.querySelector('.ion-android-menu').addEventListener('click', () => {
    document.querySelector('.mobile-nav-items').style.display = 'block';
    document.querySelector('.ion-close').style.display = 'block';
    document.querySelector('.ion-android-menu').style.display = 'none';
});

document.querySelector('.ion-close').addEventListener('click', () => {
    document.querySelector('.mobile-nav-items').style.display = 'none';
    document.querySelector('.ion-close').style.display = 'none';
    document.querySelector('.ion-android-menu').style.display = 'block';
});


$(document).ready(function($){
    $("a").click(function(e){
        link=$(this).attr("href");
        $.ajax({
            url: link,
        })
        .done(function(html){
            $(".sections").empty().append(html);
        })
        .fail(function(){
            console.log('error');
        })
        .always(function(){
            console.log("complete");
        });
        return false;
    });

    document.querySelector('html').addEventListener('click', (e) => {
        
        //Make Filter
        if(e.target.parentNode.classList[0] == 'make-list'){
            var make = e.target.classList[0].replace('-btn', '');
            var carShow = document.querySelectorAll(`.${make}`);

            hideAll();
            
            carShow.forEach(el => {
                el.style.display = 'block';
            })
        }

        //Color Filter
        if(e.target.parentNode.classList[0] == 'color-list'){
            var color = e.target.classList[0].replace('-btn', '');
            var carShow = document.querySelectorAll(`.${color}`);

            hideAll();
            
            carShow.forEach(el => {
                el.style.display = 'block';
            })
        }

        //Body Filter
        if(e.target.parentNode.classList[0] == 'body-list'){
            var body = e.target.classList[0].replace('-btn', '');
            var carShow = document.querySelectorAll(`.${body}`);

            hideAll();
            
            carShow.forEach(el => {
                el.style.display = 'block';
            })
        }

        //Reset Filter
        if(e.target.parentNode.classList[0] == 'filter-body' && e.target.classList[0] == 'show-cars'){
            showAll();
        }

    })
});

