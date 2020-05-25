let item1 = document.querySelector('#item1')
let item2 = document.querySelector('#item2')
let item3 = document.querySelector('#item3')
let item4 = document.querySelector('#item4')
let item5 = document.querySelector('#item5')
let body = document.body
let errou = document.querySelector('#errou')
let acertou = document.querySelector('#acertou')
let progresso = document.querySelector('#progresso')

console.log('hello world')




var sampler = new Tone.Sampler({
    "C3": "acertou.mp3",
    "F3": "errou.mp3"
}, function () {



    item1.onclick = function () {

        

        sampler.triggerAttack('C3')
        item1.classList.add('animate__flash')

        setTimeout(function () {
            item1.classList.remove('animate__flash')
        }, 1000)

        setTimeout(function () {

            window.location = 'win.html'
            
        }, 2000)

        progresso.style.width = "100%"



    }


    item2.onclick = function () {

        sampler.triggerAttack('F3')
        item2.classList.add('animate__shakeX')
        

        setTimeout(function () {
            item2.classList.remove('animate__shakeX')
        }, 1000)



    }



    item3.onclick = function () {

        sampler.triggerAttack('F3')
        item3.classList.add('animate__shakeX')


        setTimeout(function () {
            item3.classList.remove('animate__shakeX')
        }, 1000)




    }



    item4.onclick = function () {

        sampler.triggerAttack('F3')
        item4.classList.add('animate__shakeX')


        setTimeout(function () {
            item4.classList.remove('animate__shakeX')
        }, 1000)



    }



    item5.onclick = function () {

        sampler.triggerAttack('F3')
        item5.classList.add('animate__shakeX')


        setTimeout(function () {
            item5.classList.remove('animate__shakeX')
        }, 1000)




    }


}).toDestination()
