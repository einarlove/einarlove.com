#encoding: utf-8
pages = Page.create([
	{name: "blog",
	description: "My blog entries and articles",
	layout: "blog",
	visible: false},


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
	title: "Einar Löve's portfolio",
	description: "My portfolio",
	layout: "portfolio",
	visible: true}
])
portfolioItems = PortfolioItem.create([
	{
		title: "Teacher management tool",
		body: "With 3 other friends, we came to the final of WIF International web design challenge, which was held in Limoges, France.

		This is the video i created for our concept which shows the interaction for the interface for mobile devices.",
		image: "desk.jpg",
		involvement: ["Concept", "Showcase video"],
		links: [["Our concept","/view/desk/index.html"], ["Competition in Limoges", "http://webdesign-festival.com/2012/en/"]],
		video: true,
		visible: true
	},
	{
		title: "cherrytomat.no",
		body: "In a brief school assignment we were to come up with a proposal for a new homepage for Kjær Gartneri, a cherry tomato farm in Norway.

My group conducted usability evaluation with test users, analysis, design and a showcase video for the interaction.",
		image: "cherrytomat.jpg",
		involvement: ["Concept", "Design", "Showcase video"],
		video: true,
		visible: true
	},
	{
		title: "Synøve Dyrkorn",
		body: "
		The Norwegian artist Synøve Dyrkorn was in need for a website for her artworks.

I was contacted by the chosen designer which needed me to take the work for the frontend code, markup and construct a gallery view.",
		image: "synovedyrkorn.jpg",
		involvement: ["Frontend", "Image gallery"],
		links: [["Synøve's homepage", "http://www.sdyrkorn.no"]],
		visible: true
	},
	{
		title: "Iyengar yoga",
		body: "As a school project we were confronted by the local Iyengar yoga practicians which wanted a new homepage for not only one center, but nationaly.

Alot of energy was put in to manage all the the information that would be stored on the site, and not create a cliché yoga theme.",
		image: "iyengar-yoga.jpg",
		involvement: ["Frontend", "Information architecture"],
		links: [["Iyengar yoga", "/view/iyengaryoga/"]],
		visible: true
	},
	{
		title: "2012 Calendar",
		body: "I recently had the need to have a full year calendar for print which did not look corporate and excel'ish, so I made my own.

I am using this for <a href='http://lifehacker.com/281626/jerry-seinfelds-productivity-secret'>do not break the chain</a>, and if you want to take use of the calendar, click the heading, edit your preferred title and press <code>⌘+P</code> or <code>CTRL + P</code> if your on windows.",
		image: "2012-calendar.jpg",
		links: [["2012 Calendar", "/view/2012calendar.html"]],
		visible: true
	}
])
