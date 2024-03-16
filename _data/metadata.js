let data = {
	username: "gerwitz", // No leading @ here
	homeLabel: "notes",
	homeUrl: "https://hans.gerwitz.com/",
	pathPrefix: "/notes/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
