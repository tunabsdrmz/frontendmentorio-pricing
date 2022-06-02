/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing,
 a 25% discount should be applied to all prices.*/


 
 let Pageview = document.getElementById('Pageviews');
 let Dollar = document.getElementById('Dollar-change');
 let Slider = document.querySelector('.slider-slide');
 let toggle = document.querySelector('.custom-checkbox');
 let pageViews = ["10K", "50K", "100K", "500K", "1M"];
 let perMonth = ["8","12","16","24","36"];
 let isYearly = false;

 Slider.addEventListener('input',function(){
    updateValue();
    Pageview.innerHTML = pageViews[Slider.value];
    let value = this.value * 25 ;
    this.style.background = `linear-gradient(to right ,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`
    });
 
 toggle.addEventListener('change', function(){
    if(isYearly == false){
        isYearly = true;
    }
    else{
        isYearly = false;
    }
    updateValue();
 });

 function updateValue(){
     if(isYearly){
         Dollar.innerHTML = perMonth[Slider.value] *.75 ;
     }
     else{
         Dollar.innerHTML = perMonth[Slider.value];
     }
 }