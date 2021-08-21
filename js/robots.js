
//SCREEN R1
const Xbars = () => {
    const tl = new TimelineMax({onComplete: Xbars});
    const random = () => {
        return 0.07 + Math.random() * 2.9;
    }
    const color = () => {
        const colors = ['green', 'yellow', 'red'];
        return colors[Math.floor(Math.random() * 3)];
    }
    const bars = document.querySelectorAll('#voice-bars > *');
    tl.set( bars, {y: -30});
    tl.staggerTo( bars, .2, { scaleY: random,
                              duration: .19,
                              repeat: 1, 
                              yoyo: true, 
                              stagger: {
                                grid: [1,4],
                                from: "random",
                                axis: "x",
                                ease: Bounce.easeIn,
                                amount: .079
                            },
                              transformOrigin: "50% 50%", 
                              fill: color}, .07);
    return tl;
}

//EYES R1
const Xeyes = () => {
    const tl = new TimelineMax({repeat: -1, repeatDelay: 2.5, repeatRefresh: true});
    const color = () => {
        const colors = ['red', "#48b3e6"];
        return colors[Math.floor(Math.random() * 2)];
    }
    const eyes = document.querySelectorAll('#eye-left, #eye-right');
    tl
        .set(eyes, {transformOrigin: '50% 50%'})
        .to(eyes, .1, {scaleX: 0, fill:'#231f20'})
        .to(eyes, .1, {scaleX: 1, fill: color});
    return tl;
}
//LEGS R1
const Xlegs = (legs) => {
    const tl = new TimelineMax();
    const height = () => {
        return -5 + Math.random() * -90;
    }
    tl.staggerTo(legs, .4, {y: height, 
                            repeat: -1, 
                            yoyo: true,
                            repeatRefresh: true,
                            from: "random",
                            ease: Bounce.easeIn}, .4);
    return tl;
}

//ARMS R2
const Yarms = (arms) => {
    const tl = new TimelineMax();
    const height = () => {
        return 30;
    }
    tl.staggerTo(arms, .8, {y: height, 
                            repeat: -1, 
                            yoyo: true,
                            repeatRefresh: true,
                            from: "random",
                            ease: Power0.easeNone}, .4);
    return tl;
}

//BOUNCE R2
const Ybounce = (bounce) => {
    const tl = new TimelineMax({repeatDelay: 1, repeat: -1});
    const height = () => {
        return -20;
    }
    tl.staggerTo(bounce, 1, {y: height, 
                            repeat: 1, 
                            yoyo: true,
                            duration: .8,
                            ease: 'power2.out'}, .2);
    return tl;
}

//SHADOW R2
const Yshadow = (shadow) => {
    const tl = new TimelineMax({repeatDelay: 1, repeat: -1});
    tl.staggerTo(shadow, 1, {
                            scale: 1.5,
                            transformOrigin: "50% 50%", 
                            repeat: 1, 
                            yoyo: true,
                            duration: 1.5,
                            ease: 'power2.out'}, .3);
    return tl;
}

//EYES R2
const Yeyes = () => {
    const tl = new TimelineMax({repeat: -1, repeatDelay: 2.5, repeatRefresh: true});
    const eyes1 = document.querySelectorAll('#left_1_, #right_1_');
    tl
        .set(eyes1, {transformOrigin: '50% 50%'})
        .to(eyes1, .1, {scaleY: 0, fill:'#231f20'})
        .to(eyes1, .1, {scaleY: 1, fill: '#2C3332'});
    return tl;
}
//LIGHTS R2
const Ylights = () => {
    const tl = new TimelineMax({repeat: -1, repeatDelay: 2.5, repeatRefresh: true});
    const color = () => {
        const colors = ['#F0C419', "#E64C3C", "#4EBA64"];
        return colors[Math.floor(Math.random() * 3)];
    }
    const lights = document.querySelectorAll('#red, #green ,#yellow ');
    tl.to(lights, .1, {scaleX: 1, fill: color});
    return tl;
}

//TIMELINE
const master = new TimelineMax();
master.add('start');
//R1
master.add(Xbars(),'start');
master.add(Xlegs(document.querySelectorAll('#leg-left, #leg-right')),'start');
master.add(Xeyes(), 'start');
//R2
master.add(Yarms(document.querySelectorAll('#arms')),'start');
master.add(Yshadow(document.querySelectorAll('#shadow_2_')),'start');
master.add(Ybounce(document.querySelectorAll('#bodyandhead')),'start');
master.add(Yeyes(), 'start');
master.add(Ylights(), 'start');
