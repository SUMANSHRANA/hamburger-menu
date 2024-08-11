const menu=document.querySelector('.menu')
const nav=document.querySelector('nav')
const close=document.querySelector('.closs-icon')
const head=document.querySelector('.head')
// const top=document.querySelector('.sl')

menu.addEventListener('click',(e)=>{
    e.stopPropagation()
     menu.classList.add('calloff')
     nav.classList.add('called')
    //  head.classList.add('call')

})

close.addEventListener('click',(e)=>{
    e.stopPropagation()
    menu.classList.remove('calloff')
    nav.classList.remove('called')
    // head.classList.remove('call')
})
nav.addEventListener('click',(e)=>{
    e.stopPropagation()
  
    // head.classList.remove('call')
})

// top.addEventListener('click',()=>{
//     top.scrollTo(0,0);
// })

window.addEventListener('click',()=>{
    nav.classList.remove('called')
    menu.classList.remove('calloff')
})