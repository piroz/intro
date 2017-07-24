import "./index.scss";

class Main {
    constructor() {
        this.flag = sessionStorage.getItem("introFlag");

        if (window["intro_messages"] === undefined || !intro_messages instanceof Array) {
            window.intro_messages = ['Loading...'];
        }

        this.splitMessage();
        this.setupEvents();
        this.timer = null;
    }

    setupEvents() {
        document.addEventListener("DOMContentLoaded", (ev) => {
            if (!this.flag) {
                this.start();
            }
        });

        window.addEventListener("load", (ev) => {
            this.restoreVisibility();
            if (!this.flag) {
                this.showSkip();
            }
        });
    }

    remenber() {
        sessionStorage.setItem("introFlag", true);
    }

    splitMessage() {
        this.chars = [];

        for (let i = 0, m = intro_messages.length; i < m; i++) {
            let message = intro_messages[i];
            let identity = "intro-message-item_row" + i;
            
            message.split("").map((item) => {
                let span = document.createElement("span");
                span.classList.add("intro-message-item-char");
                let text = document.createTextNode(item);
                span.appendChild(text);

                this.chars.push({
                    identity: identity,
                    elem: span
                });
            });
        }
    }

    showSkip() {
        let loader = document.getElementById("intro_loader");
        let anchor = document.createElement("a");
        let text = document.createTextNode("skip");
        
        anchor.appendChild(text);
        anchor.classList.add("skip");
        anchor.addEventListener("click", () => {
            this.show();
        });
        loader.appendChild(anchor);
    }

    next() {
        return this.chars.shift();
    }

    start() {
        let loader = document.createElement("div");
        loader.id = "intro_loader";

        document.querySelector("body").appendChild(loader);

        this.timer = setInterval(() => {
           let char = this.next();
           let p, target;
           
           if (undefined === char) {
               this.show();
               return;
           }

           target = document.querySelector('#' + char.identity);

           if (null === target) {
            p = document.createElement("p");
            p.classList.add("intro-message-item");
            p.id = char.identity;
            loader.appendChild(p);
           } else {
            p = target;
           }

           p.appendChild(char.elem);

           char.elem.classList.add("intro-message-item-char-active");
           
        }, 100);
    }

    forceStop() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    show() {
        this.remenber();

        document.querySelector("#intro_loader").classList.add("intro-fade-disappear");
        
        setTimeout(() => {
            document.querySelector("#intro_loader").classList.add("intro-fade-disappear-active");

            this.forceStop();

            setTimeout(() => {
                document.querySelector("#intro_loader") && document.querySelector("#intro_loader").remove();
            }, 1000);
        }, 500);
    }

    restoreVisibility() {
        let style = document.createElement("style");
        style.setAttribute("type", "text/css");
        document.getElementsByTagName("head").item(0).appendChild(style);

        style.sheet.insertRule(`
body > * {
	visibility: visible;
}`, 0);
    }
}

let main = new Main();