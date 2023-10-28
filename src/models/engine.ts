import Link from "../interfaces/Link";
import generateRandomString from "../utils/generateRandomString";
export default class Engine {
    list: Link[] = [];
    root: string = "";

    constructor(root: string) {
        (root) ? this.root = root : this.root = "www.sh.rt/";
    }

    shortify = (longURL:string):string => {
        const link:Link|undefined = this.list.find(l => l.longURL === longURL);
        if (link) {
            return link.shortURL
        } else {
            const shortURL = this.root + generateRandomString(6);
            this.list.push({"shortURL": shortURL,  "longURL": longURL,"viewCounter": 0});
            return(shortURL);
        }
    }
    translate = (URL:string):string|undefined => {
        const link:Link|undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        return (link) ? (URL === link.shortURL) ?  link.longURL : link.shortURL : undefined
    }
    track = (URL:string):number|undefined => {
        const link:Link|undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        return (link) ?  link.viewCounter : undefined
    }
    statics = (URL: string):Link|undefined => {
        const link:Link|undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        return (link) ?  link : undefined
    }  
}