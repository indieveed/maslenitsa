//! glitch-canvas by snorpey, MIT License
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.glitch=b()}(this,function(){function a(a,k,l){if(i(a)&&j(k,"parameters","object")&&j(l,"callback","function")){for(n=h(k),b(v,a),b(w,a),o=d(a,n.quality),p=f(o),q=e(p),t=0,u=n.iterations;u>t;t++)c(p,q,n.seed,n.amount,t,n.iterations);r=new Image,r.onload=function(){x.drawImage(r,0,0),s=x.getImageData(0,0,a.width,a.height),l(s)},r.src=g(p)}}function b(a,b){a.width!==b.width&&(a.width=b.width),a.height!==b.height&&(a.height=b.height)}function c(a,b,c,d,e,f){var g=a.length-b-4,h=parseInt(g/f*e,10),i=parseInt(g/f*(e+1),10),j=i-h,k=parseInt(h+j*c,10);k>g&&(k=g);var l=Math.floor(b+k);a[l]=Math.floor(256*d)}function d(a,b){var c="number"==typeof b&&1>b&&b>0?b:.1;y.putImageData(a,0,0);var d=w.toDataURL("image/jpeg",c);switch(d.length%4){case 3:d+="=";break;case 2:d+="==";break;case 1:d+="==="}return d}function e(a){var b=417;for(t=0,u=a.length;u>t;t++)if(255===a[t]&&218===a[t+1]){b=t+2;break}return b}function f(a){var b,c,d,e=[];for(t=23,u=a.length;u>t;t++){switch(c=B[a.charAt(t)],b=(t-23)%4){case 1:e.push(d<<2|c>>4);break;case 2:e.push((15&d)<<4|c>>2);break;case 3:e.push((3&d)<<6|c)}d=c}return e}function g(a){var b,c,d,e=["data:image/jpeg;base64,"];for(t=0,u=a.length;u>t;t++){switch(c=a[t],b=t%3){case 0:e.push(A[c>>2]);break;case 1:e.push(A[(3&d)<<4|c>>4]);break;case 2:e.push(A[(15&d)<<2|c>>6]),e.push(A[63&c])}d=c}return 0===b?(e.push(A[(3&d)<<4]),e.push("==")):1===b&&(e.push(A[(15&d)<<2]),e.push("=")),e.join("")}function h(a){return{seed:(a.seed||0)/100,quality:(a.quality||0)/100,amount:(a.amount||0)/100,iterations:a.iterations||0}}function i(a){return j(a,"image_data","object")&&j(a.width,"image_data.width","number")&&j(a.height,"image_data.height","number")&&j(a.data,"image_data.data","object")&&j(a.data.length,"image_data.data.length","number")&&k(a.data.length,"image_data.data.length",l,"> 0")?!0:!1}function j(a,b,c){return typeof a===c?!0:(m(a,"typeof "+b,'"'+c+'"','"'+typeof a+'"'),!1)}function k(a,b,c,d){return c(a)===!0?!0:(m(a,b,d,"not"),void 0)}function l(a){return a>0}function m(a,b,c,d){throw new Error("glitch(): Expected "+b+" to be "+c+", but it was "+d+".")}var n,o,p,q,r,s,t,u,v=document.createElement("canvas"),w=document.createElement("canvas"),x=v.getContext("2d"),y=w.getContext("2d"),z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",A=z.split(""),B={};return A.forEach(function(a,b){B[a]=b}),a});

(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var dollString = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACACAYAAADApa2mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZJREFUeNrsnbFu01AUhm2Uzl1JRhArU8bwAKDyACxsSKy8AIi+ACtSNxYegAoegIwRAysiY8PauUNIXa5EruIktnOd85/7/VLlNm2c2Od+/s51E6dcLpeFx5Rl2WjDVvuhdLkfKLDvAg+8FnZxNuk0ILwU/F5BXGfgldz7X743uv/i+ZON61MnGYIhWMy5ZbsxW56c3Ln35qb4f33qboZg55GdJtV1y03dG+dP5OI4w8upFMkQjIPJWrcdudk6yRAMwUSZZAiGYJsJxLQ999w2oYtWmRdDMPNgzXlx0/mwt/kvBEOwNsEhu0iuI1fNtRAMwYVrkr11xxBMNhO8ePewumH4/vfaPFMlV28fFP+ef6P7rba7Wo7O55LnA+K6QXAmGYTKbxjR8SsZrLv30GRIbG9cp/hnCPZOcHzMjrvReMSodN1NiQ7uVtuu0DPUdf0Q7J3gXd1ZTHQdGdbIViGy7RFo33k6BOdK8L5E7xpxXt/c1nev0PbMGgRDcLsRVefs1ESXP0Yd1zA/CrGpzn1DMAQflvC6c9sO/6vVK6kQnGsTZ4WcrmQf61y0FVIpMAU267K9Ch929PX0tNPjnU6ut67faiFxMF20zTTtxlN1wbyqktBF9+Ho8dOXa7+ffftULS9efF27/dXnZ1v/Xp1cCMbBWuSmfhwcTChwiow//qq+VNZLgUneDj7WOy1UXQzBEGzXvX0+zuz1IxxMIFjOveouhmAIztO9XlwMwRCMe5VdDMEQbCOPZ2/uvpnZeB4/xx9wMIFgOfequRiCIdiIe40+L+suhmAIxr3KLoZgCMa9yi6GYAjGvcouhmAIxr3KLoZgCMa9yi6GYOehwBSY4GDca9bFEMwhOm1ur2vV9dpWFmNluyAYB+NeZRdDMASnc1QOCdsZroGJg4kmwbm699guhmAIxr3KLoZgCMa9yi6GYOehwBSY4GDca9bFEMwhultuP4lb/dO4lfcLBONg3Jua5JQuhmAI7jYyCfNgokAw7rU5L4ZgCMa9fXbTo/M5DiY9Eox7bbsYgiEY9yq7GIIhGPcquxiCIXh7FmeTarksrtibB0zYr8PLKQ4mByQY92q5GIIheLsjiG0XQzAE415lF0MwBONeZRdDcO4E415tF0MwDsa9yi6G4FwJxr0+XAzB3gfAqvIQ7CB1BFNg5wX+K8AAdFzcwAptjrcAAAAASUVORK5CYII=";

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = window.innerWidth,
    height = document.body.offsetHeight,
    settings = {
        size: 6,
        fireWidth: 15,
        lifeTime: 3000,
        innerFlameStartColor: {
            r: 250,
            g: 140,
            b: 0
        },
        innerFlameEndColor: {
            r: 50,
            g: 0,
            b: 0
        },
        outerFlameStartColor: {
            r: 200,
            g: 60,
            b: 0
        },
        outerFlameEndColor: {
            r: 80,
            g: 10,
            b: 0
        },
        showLogs: true
    },
    dimW = Math.ceil(width / settings.size),
    dimH = Math.ceil(height / settings.size),
    logWidth = settings.fireWidth + (settings.fireWidth / 4),
    flames = [],
    logs = [];

for (var i = 0; i < 400; i++) {
    flames.push(initFlame());
}

var dollImage = new Image();
dollImage.src = dollString;

initLogs();

canvas.width = width;
canvas.height = height;

function initLogs() {
    logs = [];
    for (var i = 0; i < 300; i++) {
        logs.push({
            x: Math.ceil(((dimW / 2) - logWidth / 2 + Math.random() * logWidth) * 2) / 2,
            y: dimH - Math.ceil(Math.random() * 4)
        });
    }
}

function initFlame(reset) {
    var y = Math.ceil(Math.random() * dimH),
        x = Math.ceil(((dimW / 2) - settings.fireWidth / 2 + Math.random() * settings.fireWidth) * 2) / 2,
        colorStart = settings.innerFlameStartColor,
        colorStop = settings.innerFlameEndColor;

    if (reset) {
        y = dimH;
    }

    if (x <= (dimW / 2) - (settings.fireWidth / 6) || x >= (dimW / 2) + (settings.fireWidth / 6)) {
        colorStart = settings.outerFlameStartColor,
        colorStop = settings.outerFlameEndColor;
    }

    return {
        x: x,
        y: y,
        colorStart: colorStart,
        colorStop: colorStop,
        sinX: Math.round(Math.random() * 1),
        speedX: Math.ceil(Math.random() * 5),
        speedY: 0.5,
        top: Math.round(Math.random() * dimH / 2),
        startTime: new Date().getTime(),
        lifeTime: Math.random() * settings.lifeTime
    };
}

function render() {
    ctx.fillStyle = "rgba(26,0,30,0.2)";
    ctx.fillRect(0, 0, width, height);

    ctx.drawImage(dollImage, width/2 - 60, height - 128 - 10, 120, 128);
    
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < flames.length; i++) {
        var flame = flames[i],
            endStep = (flame.startTime + flame.lifeTime),
            curStep = (flame.startTime + flame.lifeTime) - new Date().getTime();

        flame.y -= flame.speedY;
        y = Math.floor(flame.y);

        flame.x += Math.round(Math.sin(flame.sinX += flame.speedX));
        flame.x = Math.round(flame.x * 2) / 2

        if (flame.y <= flame.top || curStep <= 0) {
            flames[i] = initFlame(true);
        }

        var color = colorChange(flame.colorStart, flame.colorStop, dimH , flame.y);
        color.a = flame.lifeTime * curStep;

        ctx.fillStyle = "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")";

        drawRect(flame.x, y);
    }
    ctx.globalCompositeOperation = "source-over";
    if (settings.showLogs) {
        ctx.fillStyle = "rgb(70,30,0)";
        for (i = 0; i < logs.length; i++) {
            var log = logs[i];
            drawTriangle(log.x, log.y);
        }
    }

    if (Math.random() < 0.05) {
        var my_image_data = ctx.getImageData( 0, 0, width, height );
        var parameters = { amount: 10, seed: 45, iterations: 2, quality: 50 };

        function drawGlitchedImageData(image_data) {
            ctx.putImageData(image_data, 0, 0);
        }

        glitch(my_image_data, parameters, drawGlitchedImageData);
    }



    requestAnimationFrame(render);
}

function drawTriangle(x, y) {
    var size = settings.size;
    ctx.beginPath();
    if (parseInt(x) === x) {
        ctx.moveTo(x * size, y * size);
        ctx.lineTo(x * size + size / 2, y * size + size);
        ctx.lineTo(x * size - size / 2, y * size + size);
    } else {
        ctx.moveTo(x * size - size / 2, y * size);
        ctx.lineTo(x * size + size / 2, y * size);
        ctx.lineTo(x * size, y * size + size);
    }
    ctx.fill();
}

function drawRect(x, y) {
    var size = settings.size;
    ctx.beginPath();
    ctx.rect(x * size, y * size, size, size);
    ctx.fill();
}

render();


function colorChange(startColor, endColor, totalSteps, step) {
    var scale = step / totalSteps,
        r = endColor.r + scale * (startColor.r - endColor.r),
        g = endColor.g + scale * (startColor.g - endColor.g),
        b = endColor.b + scale * (startColor.b - endColor.b);
    return {
        r: Math.floor(Math.min(255, Math.max(0, r))),
        g: Math.floor(Math.min(255, Math.max(0, g))),
        b: Math.floor(Math.min(255, Math.max(0, b)))
    };
}

window.onresize = function () {
    height = canvas.height = document.body.offsetHeight;
    width = canvas.width = document.body.offsetWidth;
    dimW = Math.ceil(width / settings.size);
    dimH = Math.ceil(height / settings.size);
    initLogs();
};

// Settings
// var gui = new dat.GUI();

// gui.add(settings, 'size', 1, 40).onFinishChange(function () {
//     dimW = Math.ceil(width / settings.size);
//     dimH = Math.ceil(height / settings.size);
//     initLogs();
// });
// gui.add(settings, 'lifeTime', 500, 20000);
// gui.add(settings, 'fireWidth', 5, 50);
// gui.addColor(settings, 'innerFlameStartColor');
// gui.addColor(settings, 'innerFlameEndColor');
// gui.addColor(settings, 'outerFlameStartColor');
// gui.addColor(settings, 'outerFlameEndColor');
// gui.add(settings, 'showLogs');