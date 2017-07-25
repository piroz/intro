import "./loader.scss";

/**
 * Loader
 * 
 * @export
 * @class Loader
 */
export class Loader {

    /**
     * Creates an instance of Loader.
     * @param {any} reminder 
     * @param {any} timer 
     * @param {any} messages 
     * @memberof Loader
     */
    constructor(reminder, timer, messages) {
        this.reminder = reminder;
        this.timer = timer;
        this.messages = messages;

        this.setupEvents();
    }

    /**
     * skip parameter (?nointro=1)
     * 
     * @returns 
     * @memberof Loader
     */
    isSkipIntro()
    {
        return location.search.match(/nointro=1/) !== null;
    }

    /**
     * setup dom onload events
     * 
     * @memberof Loader
     */
    setupEvents() {
        document.addEventListener("DOMContentLoaded", (ev) => {

            if (this.isSkipIntro() || this.reminder.flag) {
                return;
            }

            this.start();
        });

        window.addEventListener("load", (ev) => {
            this.restoreVisibility();

            if (this.isSkipIntro() || this.reminder.flag) {
                return;
            }

            this.showSkip();
        });
    }


    /**
     * start loader animation
     * 
     * @memberof Loader
     */
    start() {
        let loader = document.createElement("div");
        loader.id = "intro_loader";

        document.querySelector("body").appendChild(loader);

        this.timer.start(100, () => {
           let char = this.messages.next();
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
           
        });
    }

    /**
     * show page contents
     * 
     * @memberof Loader
     */
    show() {
        this.reminder.flag = true;

        document.querySelector("#intro_loader").classList.add("intro-fade-disappear");
        
        setTimeout(() => {
            document.querySelector("#intro_loader").classList.add("intro-fade-disappear-active");

            this.timer.stop();

            setTimeout(() => {
                document.querySelector("#intro_loader") && document.querySelector("#intro_loader").remove();
            }, 1000);
        }, 500);
    }

    /**
     * set page contents visibility to `visible`
     * 
     * @memberof Loader
     */
    restoreVisibility() {
        let style = document.createElement("style");
        style.setAttribute("type", "text/css");
        document.getElementsByTagName("head").item(0).appendChild(style);

        style.sheet.insertRule(`
body > * {
	visibility: visible;
}`, 0);
    }

    /**
     * show skip loader button
     * 
     * @memberof Loader
     */
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
}