let item1 = document.querySelector('#item1')
let item2 = document.querySelector('#item2')
let item3 = document.querySelector('#item3')
let item4 = document.querySelector('#item4')
let item5 = document.querySelector('#item5')
let body = document.body
let errou = document.querySelector('#errou')
let acertou = document.querySelector('#acertou')

console.log('hello world')




var sampler = new Tone.Sampler({
    "C3": "acertou.mp3",
    "F3": "errou.mp3"
}, function () {



    item1.onclick = function () {

        

        sampler.triggerAttack('C3')

    }


    item2.onclick = function () {

        sampler.triggerAttack('F3')



    }



    item3.onclick = function () {

        sampler.triggerAttack('F3')




    }



    item4.onclick = function () {

        sampler.triggerAttack('F3')



    }



    item5.onclick = function () {

        sampler.triggerAttack('F3')




    }


}).toDestination()
