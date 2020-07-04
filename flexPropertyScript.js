(() => {
    document.getElementById("data").insertAdjacentHTML('beforeend', "<div class='loader'></div>");
})();
setTimeout(() => {
    document.getElementById("data").innerHTML = "";
    (() => {
        let i = 0;
        let anim = setInterval(() => {
            if (i % 2 == 0)
                document.getElementById("data").insertAdjacentHTML('beforeend', `<div class="box" style="order:${i};"></div><div class="box content-box" style="order: ${(+i + 1)};"></div > `);
            else
                document.getElementById("data").insertAdjacentHTML('beforeend', `<div class="box" style="order: ${(+i + 1)};"></div><div class="box content-box" style="order:${i};"></div > `);
            i++;
            if (i == 44) clearInterval(anim);
        }, 10)

    })();
}, (Math.random() * 5).toFixed() + "000");   