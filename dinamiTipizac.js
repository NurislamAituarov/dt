const wrapper = document.querySelector('.sidebar');
const btns = document.querySelectorAll('button');
const ahrev = document.querySelector('a');
const kvd = document.querySelectorAll('.kvadr')

// console.log(wrapper)/////Обертка кнопок
// wrapper.addEventListener('click', function(event){
//     event.target.parentElement.previousElementSibling.style.borderRadius = '20px'    
//     // wrapper.previousElementSibling.style.backgroundColor = 'red'
// })
// const button = document.createElement('button');
// button.classList.add('btn')
// // sidebar.append(button)
// btns[3].replaceWith(button)

// btns.forEach(function(item,i){
//     item.innerHTML = ''
//     item.innerHTML = `${i+1} кнопка`
//     item.style.color = 'black'
// })
// btns[0].addEventListener('click',function(){
//     ahrev.innerHTML = ''
//     ahrev.innerHTML = `<a href="https://www.youtube.com/watch?v=Z7DvBFU_xRI" target="_blank">новая ссылка</a>`
//     btns[1].addEventListener('click', function(){
//         ahrev.innerHTML = `<a href="https://www.youtube.com/" target="_blank">ссылка на ютуб</a>`
//     })
// })

// wrapper.addEventListener('click',function(event){
//     // console.dir(event.target)
//     if(event.target.tagName == 'BUTTON'){
//         event.target.style.cssText = 'border-radius: 50px;color:black;'
//     }else{
//         event.target.style.cssText = 'background-color:red;border-radius: 50px;'
//     }   
// })
// btns[3].innerHTML = '';
// btns[3].innerHTML = `<a href="https://www.youtube.com/" target="_blank">last</a>`
// btns[3].addEventListener('click',function(event){
//     event.preventDefault()
// })
