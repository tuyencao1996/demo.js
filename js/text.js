function textBtn(){

    const eleBtn = document.querySelector('.text-js-btn')
    const eleImg = document.querySelector('.img-js-text-img')

    
    
    const eleSrcImg = [
        '../img/photo_secnery_img2.avif',
        '../img/photo_img1 secenery.avif',
        '../img/photo-img3-secenery.avif'
    ]
    
    eleBtn.addEventListener('click', ()=>{
        eleImg.style.display = 'block'
        
        setInterval(() => {
            
            textBtn = Math.floor (Math.random()* 3)

                eleImg.src = eleSrcImg[textBtn]
    
                    console.log(textBtn)
            }, 1000);

    })
}
textBtn()
// }