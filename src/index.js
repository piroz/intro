import "./index.scss";
import {Timer} from "./Timer";
import {Reminder} from "./Reminder";
import {Messages} from "./Messages";
import {Loader} from "./Loader";

/**
 * Main
 * 
 * @class Main
 */
class Main {
    /**
     * Creates an instance of Main.
     * @memberof Main
     */
    constructor() {
        this.reminder = new Reminder;
        this.timer = new Timer;
        this.messages = new Messages;
        this.loader = new Loader(this.reminder, this.timer, this.messages);
    }
}

let main = new Main();