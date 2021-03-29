import axios from "axios";
import urls from "./urls";

class CoreApiManager {
    /**
     * -----------------------------------------------------------------------------------------------------------------
     * @description To hold the current class singleton object
     * -----------------------------------------------------------------------------------------------------------------
     * @type {CoreApiManager}
     */
    static instance=null;

    /**
     * -----------------------------------------------------------------------------------------------------------------
     * @description To provide a singleton object for the class
     * -----------------------------------------------------------------------------------------------------------------
     *
     * @returns {CoreApiManager}
     */
    static getInstance() {
        if(this.instance === null) {
            this.instance = new CoreApiManager();
        }
        return this.instance;
    }

    getAppData(then, errorCatch) {
        axios.get(urls.core.appInit).then(then).catch(errorCatch);
    }
}

export default CoreApiManager;