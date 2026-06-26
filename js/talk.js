new TypeIt("#SiyuandLara", {
        loop: true,
        cursorSpeed: 1000,
        speed: 150
    })
    .type("Yuyu and Lara")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("The first gift I prepared for you...")
    .pause(3000)
    .go();

new TypeIt('#talkToLara', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 1
}).go();
