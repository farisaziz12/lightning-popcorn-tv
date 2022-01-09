import { Lightning } from "@lightningjs/sdk";
export const transition = (target, value, resetDur = 0.3) => {
    if(target.isRunning() && value === target.targetValue) {
        return;
    }
    if(target.isRunning()) {
        target.reset(value, resetDur);
    }
    else {
        target.start(value);
    }
}

export const animation = (animation, target, scope, settings) => {
    if(animation) {
        animation.pause();
    }
    animation = scope.tag(target).animation(settings);
    animation.start();
    return animation;
}

export const extractCommonColor = (texture, gl) => {
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(
        gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D, texture, 0);

    const tmp = new Uint8Array(4);
    let colors = [];
    const offset = Math.floor(texture.w / 6);
    const step = offset;
    for (let i = offset, n = texture.w - offset; i < n; i += step) {
        for (let j = offset, o = texture.h - offset; j < o; j += step) {
            gl.readPixels(j, i, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, tmp);
            colors.push(Lightning.StageUtils.getArgbNumber(tmp))
        }
    }

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.deleteFramebuffer(fb);

    // const filtered = colors.filter(color => {
    //     const hsv = rgbToHsv(Lightning.StageUtils.getRgbComponentsNormalized(color));
    //     return hsv.s > 50 && hsv.v > 50;
    // });

    const filtered = colors.filter(color => {
        return color>4283190348
    })

    const availableColors = filtered.length ? filtered : colors
    let color;
    if(!filtered.length){
        color = colors.sort((a,b)=>{
            return a>b?1:-1
        }).pop()
    }else{
        color = availableColors.sort((a,b) =>
            availableColors.filter(v => v===a).length
            - availableColors.filter(v => v===b).length
        ).pop();
    }

    return color;
}

const rgbToHsv = (arr) => {
    let rabs = arr[0];
    let gabs = arr[1];
    let babs = arr[2];
    let h, s;
    let v = Math.max(rabs, gabs, babs);
    let diff = v - Math.min(rabs, gabs, babs);
    let diffc = c => (v - c) / 6 / diff + 1 / 2;
    let percentRound = num => Math.round(num * 100) / 100;

    if(diff === 0) {
        h = s = 0;
    }
    else {
        s = diff / v;
        let rr = diffc(rabs);
        let gg = diffc(gabs);
        let bb = diffc(babs);

        if(rabs === v) {
            h = bb - gg;
        }
        else if(gabs === v) {
            h = (1 / 3) + rr - bb;
        }
        else if(babs === v) {
            h = (2 / 3) + gg - rr;
        }

        if(h < 0) {
            h += 1;
        }
        else if(h > 1) {
            h -= 1;
        }
    }

    return {
        h: Math.round(h * 360),
        s: percentRound(s * 100),
        v: percentRound(v * 100)
    }
}