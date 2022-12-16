function oclock(){
    const secondHand = document.querySelector('.second-hand')
    const minsHand = document.querySelector('.mins-hand')
    const hourHand = document.querySelector('.hour-hand')

    function allclock(){
        const a = new Date();
        const b = a.getDate()
        const d = ((b / 60)* 360) + 90;
        secondHand.style.transform = `rotate(${d}deg)`;

        const ab = new Date();
        const bc = ab.getDate();
        minsHand.style.transform = `rotate(${bc}deg)`;

        const abb = new Date();
        const bbc = abb.getDate();
        hourHand.style.transform = `rotate(${bbc}deg)`
    }

    setInterval(allclock,1000)
}
oclock()