/**
 * mesasges
 * 
 * @export
 * @class Messages
 */
export class Messages {
    /**
     * Creates an instance of Messages.
     * @memberof Messages
     */
    constructor() {
        if (window["intro_messages"] === undefined || !intro_messages instanceof Array) {
            window.intro_messages = ['Loading...'];
        }

        this.splitToCharactors();
    }

    /**
     * splitToCharactors
     * 
     * @memberof Messages
     */
    splitToCharactors() {
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

    /**
     * get next charactor
     * 
     * @returns Strings
     * @memberof Messages
     */
    next() {
        return this.chars.shift();
    }
}