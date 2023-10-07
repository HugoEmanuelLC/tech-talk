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



//EXEMPLES DE CODE
$('.a_exemple_de_code').click(function() {
    $('#exemple_de_code').load(componente+'exemple_de_code.html')
})



//RADIO
$('.a_radio').click(function() {
    $('#radio').load(componente+'autres/radio/index.html')
})






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