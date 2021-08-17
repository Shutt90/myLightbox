const arrNum = <?php echo $galleryNum ?>;
for(i=1; i <= arrNum; i++) {
    document.querySelector(`.smaller${i}`).addEventListener("click", function() {
        this.classList.remove("smallImage");
        this.classList.add("bigImage");
        window.classList.add("blur");
    });

    document.body.addEventListener("click", function() {
        document.querySelector(".bigImage")
    })
}

window.onclick = function(event) {
    let target = event.target
    if (!String(target).includes("bigImage")) {
        for(i=1; i <= arrNum; i++) { 
            document.querySelector(`.smaller${i}`).addEventListener("click", function() {
            this.classList.remove("bigImage");
            this.classList.add("apparel-container__img");
            document.querySelector(".apparel-outer").classList.remove("blur");
        
            });

        }
       
    }
}