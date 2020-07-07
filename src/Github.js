import {GET} from "./API";
import config from 'local-config';

export class Github {
    static async repos() {
        return await GET(`https://api.github.com/orgs/${config.GITHUB_ORG}/repos`);
    }

    static async getByUrl(id) {
        return await GET(id);
    }

    static categorizeRegex(tags) {
        const tagRegex = new RegExp(config.TAG_NAME_REGEX);
        return tags.reduce((acc, tag) => {
            const {name} = tag;
            const type = tagRegex.exec(name)[0];
            if (!acc[type]) {
                acc[type] = [];
            }

            acc[type].push(tag);

            return acc;
        }, {});
    }
}