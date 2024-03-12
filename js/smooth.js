gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
    })

}