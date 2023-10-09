let componente = './layout/'

//PRESENTATION
$('.a_presentation').click(function() {
    $('#presentation').load(componente+'presentation.html')
})

//PROJET 0
$('.a_projet_0').click(function() {
    $('#projet_0').load(componente+'projet_0/projet_0.html')
})
//PROJET 0 v2
$('.a_projet_0_v2').click(function() {
    $('#projet_0_v2').load(componente+'projet_0/projet_0_v2.html')
})



//PROJET 1
$('.a_projet_1').click(function() {
    $('#projet_1').load(componente+'projet_1/projet_1.html')
})
//PROJET 1 v2
$('.a_projet_1_v2').click(function() {
    $('#projet_1_v2').load(componente+'projet_1/projet_1_v2.html')
})



//SORTABLE
$('.a_sortable').click(function() {
    $('#sortable').load(componente+'autres/Sortable/sortable.html')
})
// $('#sortable').load(componente+'autres/Sortable/sortable.html')


//SWIPERJS
$('.a_swiperjs').click(function() {
    $('#swiperjs').load(componente+'autres/SwiperJs/swiperjs.html')
})
// $('#swiperjs').load(componente+'autres/SwiperJs/swiperjs.html')


//CHARTJS
$('.a_chartjs').click(function() {
    $('#chartjs').load(componente+'autres/ChartJs/chartjs.html')
})
// $('#chartjs').load(componente+'autres/ChartJs/chartjs.html')

//CHARTJS
// $('.a_chartjs').click(function() {
    // $('#gallery_threejs').load(componente+'autres/Gallery/gallery.html')
// })
$('#gallery_threejs').load(componente+'autres/Gallery/gallery.html')





//start presentation intro
document.querySelector('.a_start').addEventListener('click', (e)=>{
    document.querySelector('.start_1').classList.remove('none')
    document.querySelector('.start_2').classList.remove('none')
    document.querySelector('.start_3').classList.remove('none')
        
    document.querySelector('.start_1').classList = 'animate__animated animate__backInDown animate__delay-1s'
    document.querySelector('.start_2').classList = 'animate__animated animate__backInDown animate__delay-2s'
    document.querySelector('.start_3').classList = 'animate__animated animate__backInDown animate__delay-3s'
})
//presentation about library
document.querySelector('.a_start_2').addEventListener('click', (e)=>{
    console.log('click');
    setTimeout(() => {
        document.querySelector('.p_1').classList = 'animate__animated animate__flipInX animate__delay-1s'
        document.querySelector('.p_2').classList = 'animate__animated animate__flipInX animate__delay-2s'
    }, 600);
})