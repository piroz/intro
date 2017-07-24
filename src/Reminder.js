/**
 * Reminder
 * 
 * @export
 * @class Reminder
 */
export class Reminder {
    /**
     * Creates an instance of Reminder.
     * @memberof Reminder
     */
    constructor() {
        this._key = "introFlag";
        this._flag = sessionStorage.getItem(this._key);
    }

    /**
     * flag getter
     * 
     * @memberof Reminder
     */
    get flag() {
        return this._flag;
    }

    /**
     * flag setter
     * 
     * @memberof Reminder
     */
    set flag(flg) {
        this._flag = flg ? true : false;
        sessionStorage.setItem(this._key, this._flag);
    }
}