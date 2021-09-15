// hurmbarger
$(document).ready(function(){
  $('#menubar').click(function(){
    $(this).toggleClass('barOpen');
    $('header').toggleClass('open')
  });
});
// end here

// =============slick===============
$(document).on('ready', function(){

$(".firstslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay:true,
 
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }        
    },

    {
      breakpoint:1024,
      settings:{
        slidesToShow:2,
        slidesToScroll:1,
      }
    }
]
  
});

$(".secondslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  arrow:true,

 prevArrow:'#img1',
  nextArrow: '#img2',
  
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:3,
        slidesToScroll:1,
      }        
    },

    {
      breakpoint:1024,
      settings:{
        slidesToShow:3,
        slidesToScroll:1,
      }
    }
]
});

$(".thirdslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  // autoplay:true,
  // arrow:true,
  // prevArrow:'#img1',
  // nextArrow: '#img2',
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:3,
        slidesToScroll:3,
      }        
    },

    {
      breakpoint:1024,
      settings:{
        slidesToShow:6,
        slidesToScroll:4,
      }
    }
]
});

$(".fouthslick").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay:true,
  arrow:true,
  prevArrow:'.img11',
  nextArrow: '.img22',
  responsive:[        
    {
      breakpoint:480,
      settings:{
        slidesToShow:1,
        slidesToScroll:1,
      }        
    },

    {
      breakpoint:1024,
      settings:{  
        slidesToShow:1,
        slidesToScroll:1,
      }
    }
]
});

const btns = document.querySelectorAll('.accordion__btn');
const answers = document.querySelectorAll('.accordion__answer__container');
const icons= document.querySelectorAll('.fa');



for(let i=0;i < btns.length;i++) {
  
  btns[i].addEventListener('click', function () {
    for(let j=0;j < btns.length;j++) {
      if(j !== i){
        answers[j].classList.remove('active__accordion');
        icons[j].classList.add('fa-plus');
        icons[j].classList.remove('fa-minus');  } 
    }
    answers[i].classList.toggle('active__accordion');
    icons[i].classList.toggle('fa-plus');
    icons[i].classList.toggle('fa-minus');
    });
}




});









$('.read').on('click', function(){
$('.div2').toggleClass('div2-open');
console.log("hello")

})


