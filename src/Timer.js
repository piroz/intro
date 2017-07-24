/**
 * Timer
 * 
 * @export
 * @class Timer
 */
export class Timer {
    /**
     * Creates an instance of Timer.
     * @memberof Timer
     */
    constructor() {
        this.timer = null;
    }

    /**
     * start intarval Task
     * 
     * @param {any} interval 
     * @param {any} callback 
     * @memberof Timer
     */
    start(interval, callback) {
        this.timer = setInterval(() => {
            callback();
        }, interval);
    }

    /**
     * stop interval task
     * 
     * @memberof Timer
     */
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}