// for https://github.com/rcmdnk/obsidian-evernote-decryptor
export const encryptRule = {
	filter: ['en-crypt'],
	replacement: (content: any, _: any) => {
		return `\`evernote_secret ${content}\``;
	},
};
