import Link from "../interfaces/Link";
import generateRandomString from "../utils/generateRandomString";
export default class Engine {
    list: Link[] = [];
    root: string = "";

    constructor(root: string) {
        this.root = root
    }

    shortify = (longURL: string): string => {
        const link: Link | undefined = this.list.find(l => l.longURL === longURL);
        if (link) {
            return link.shortURL
        } else {
            const shortURL = this.root + "/" + generateRandomString(6);
            this.list.push({ "shortURL": shortURL, "longURL": longURL, "viewCounter": 0, "log": [] });
            return (shortURL);
        }
    }
    translate = (URL: string): string | undefined => {
        const link: Link | undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        const index: number = this.list.findIndex((l) => l === link);
        if (index !== -1 && link !== undefined) {
            this.list[index].viewCounter++;
            this.list[index].log.push(new Date().toISOString());
            return (URL === link.shortURL) ? link.longURL : link.shortURL
        }
        return undefined;
    }
    track = (URL: string): number | undefined => {
        const link: Link | undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        return (link) ? link.viewCounter : undefined
    }
    statics = (URL: string): Link | undefined => {
        const link: Link | undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        return (link) ? link : undefined
    }
    log = (URL: string): string[] | undefined => {
        const link: Link | undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        return (link) ? link.log : undefined
    }
    delete = (URL: string): boolean | undefined => {
        const link: Link | undefined = this.list.find(l => (l.longURL === URL || l.shortURL === URL));
        const index: number = this.list.findIndex((l) => l === link);
        if (index !== -1 && link !== undefined) {
            this.list.splice(index, 1);
            return true
        }
        return undefined
    }
}