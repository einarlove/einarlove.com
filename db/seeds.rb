#encoding: utf-8
pages = Page.create([
	{name: "blog",
	description: "My blog entries and articles",
	layout: "blog",
	visible: true},


	{name: "contact",
	title: "Contact information",
	description: "How to get in touch",
	body: "If you have a project or request for a job that you want collaboration on, you can contact me with the form on the right.

I am also reachable on twitter as <a href='http://twitter.com/einarlove'>@einarlove</a>, or at <a href='http://github.com/einarlove'>Github</a>.",
	layout: "contact",
	visible: true},


	{name: "about",
	title: "A short introduction",
	description: "About me",
	body: "My name is Einar Ágúst Löve, born in Iceland, raised in Norway but lived on the internet once it got its grip on me.

		Studied media and communication in gymnas where I experienced film production, animation, graphic design, web design and illustration.

		The power to create your own custom worlds on the internet which benefited from imagination and empathy really attracted me. So after gymnas I attended Interaction design at the Norwegian school of creativity in Oslo where I reside and study at this date.",
	layout: "static",
	image: "me.jpg",
	visible: true},


	{name: "projects",
	description: "My projects",
	layout: "projects",
	visible: false},


	{name: "portfolio",
	description: "My portfolio",
	layout: "portfolio",
	visible: true}
])
portfolioItems = PortfolioItem.create([
	{
		title: "Synøve Dyrkorn",
		body: "
		The Norwegian artist Synøve Dyrkorn was in need for a website for her artworks.

		I was contacted by the chosen designer which needed me to take the work for the frontend code, markup and construct a gallery view.",
		image: "synovedyrkorn.jpg",
		involvement: ["Frontend", "Image gallery"],
		links: ["http://www.sdyrkorn.no"],
		visible: true
	}
])
