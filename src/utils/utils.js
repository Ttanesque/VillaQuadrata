const enclosure = "enclosure";
const category = "category";

const defaultVignette = {
    url: "./vite.svg",
    length: 1234,
    type: "image/svg"
}

export const parseRss = (rssText) => {
    const parser = new DOMParser();

    let rss = parser.parseFromString(rssText, 'application/xml');

    let articles = []
    for (const item of rss.querySelectorAll("item")) {
        articles.push(itemNodeToArticle(item))
    }
    return articles;
}

const itemNodeToArticle = (itemNode) => {
    let article = {};

    for (const child of itemNode.children) {
        let node = child.nodeName;
        if (!article[node]) {
            article[node] = {}
        }
        if (node === enclosure) {
            for (const attr of child.attributes) {
                article[node][attr.nodeName] = attr.textContent
            }
        } else if (node === category) {
           article[node] = child.textContent?.split(',') 
        } else {
            article[node] = child.textContent
        }
    }

    if (!article[enclosure]) {
        article[enclosure] = defaultVignette;
    }

    return article;
}

// https://dev.to/jorik/country-code-to-flag-emoji-a21
export const getFlagEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
