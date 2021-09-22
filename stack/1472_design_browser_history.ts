type LinkedList = {
    url: string;
    next: LinkedList;
    back: LinkedList;
};

class BrowserHistory {
    private page: LinkedList;

    constructor(homepage: string) {
        this.page = {
            url: homepage,
            next: null,
            back: null
        };
    }

    visit(url: string): void {
        const tmp = {
            url: url,
            next: null,
            back: this.page
        };
        this.page.next = tmp;
        this.page = tmp;
    }

    back(steps: number): string {
        while (this.page.back != null && steps > 0) {
            this.page = this.page.back;
            steps--;
        }

        return this.page.url;
    }

    forward(steps: number): string {
        while (this.page.next != null && steps > 0) {
            this.page = this.page.next;
            steps--;
        }

        return this.page.url;
    }
}

function main() {
    const hrstart = process.hrtime();
    const browserHistory = new BrowserHistory('leetcode.com');
    browserHistory.visit('google.com'); // You are in "leetcode.com". Visit "google.com"
    console.log(browserHistory.visit('facebook.com')); // You are in "google.com". Visit "facebook.com"
    console.log(browserHistory.visit('youtube.com')); // You are in "facebook.com". Visit "youtube.com"
    console.log(browserHistory.back(1)); // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
    console.log(browserHistory.back(1)); // You are in "facebook.com", move back to "google.com" return "google.com"
    console.log(browserHistory.forward(1)); // You are in "google.com", move forward to "facebook.com" return "facebook.com"
    console.log(browserHistory.visit('linkedin.com')); // You are in "facebook.com". Visit "linkedin.com"
    console.log(browserHistory.forward(2)); // You are in "linkedin.com", you cannot move forward any steps.
    console.log(browserHistory.back(2)); // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
    console.log(browserHistory.back(7));
    const hrend = process.hrtime(hrstart);
    console.log(`Took ${hrend[1] / 1000000} milliseconds.`);
}

main();

export const fake = 123;
