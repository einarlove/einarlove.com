#encoding: utf-8
# pages = Page.create([
# 	{name: "blog",
# 	description: "My blog entries and articles",
# 	layout: "blog",
# 	visible: false},


# 	{name: "contact",
# 	title: "Contact information",
# 	description: "How to get in touch",
# 	body: "If you have a project or request for a job that you want collaboration on, you can contact me with the form on the right.

# I am also reachable on twitter as <a href='http://twitter.com/einarlove'>@einarlove</a>, or at <a href='http://github.com/einarlove'>Github</a>.",
# 	layout: "contact",
# 	visible: true},


# 	{name: "about",
# 	title: "A short introduction",
# 	description: "About me",
# 	body: "My name is Einar Ágúst Löve, born in Iceland, raised in Norway but consider myself more as an internet citizen.

# Studied media and communication in gymnas where I experienced film production, animation, graphic design, web design and illustration.

# The more I studied web design the more user experience design captivated me. So after gymnas I attended Interaction design at the Norwegian school of creativity in Oslo where I reside and study at this date.",
# 	layout: "static",
# 	image: "me.jpg",
# 	visible: true},


# 	{name: "projects",
# 	description: "My projects",
# 	layout: "projects",
# 	visible: false},


# 	{name: "portfolio",
# 	title: "Einar Löve's portfolio",
# 	description: "My portfolio",
# 	layout: "portfolio",
# 	visible: true}
# ])
portfolioItems = PortfolioItem.create([
	{
		title: "2012 Calendar",
		body: "I recently had the need to have a full year calendar for print which did not look corporate or originate from excel, so I made my own.

I am using this for <a href='http://lifehacker.com/281626/jerry-seinfelds-productivity-secret'>do not break the chain</a>, and if you want to take use of the calendar, click the heading, edit your preferred title and press <code>⌘+P</code> or <code>CTRL+P</code> if you're on windows.",
		image: "2012-calendar.jpg",
		links: [["2012 Calendar", "/view/2012calendar.html"]],
		href: "/view/2012calendar.html",
		visible: false
	},
	{
		title: "Iyengar yoga",
		body: "As a school project we were confronted by the local Iyengar yoga practicians who wanted a homepage that would represent all the Iyengar yoga practicians nationaly.

Our main goal was to create an easy accessibly navigation, and stay clear from the cliché associations to yoga, due to client request.",
		image: "iyengar-yoga.jpg",
		involvement: ["Frontend", "Information architecture"],
		links: [["Iyengar yoga", "/view/iyengaryoga/"]],
		href: "/view/iyengaryoga/",
		visible: false
	},
	{
		title: "Synøve Dyrkorn",
		body: "
		The Norwegian artist Synøve Dyrkorn was in need for a website for her artworks.

I was contacted by the chosen designer which needed me to take the work for the frontend code, markup and to construct a gallery view.",
		image: "synovedyrkorn.jpg",
		involvement: ["Frontend", "Image gallery"],
		links: [["Synøve's homepage", "http://www.sdyrkorn.no"]],
		href: "http://www.sdyrkorn.no",
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
		title: "Softface Magazine",
		body: "There is a lack of focus on the history of subjects of interaction design and related, so we created a concept for a magazine that could fill that spot.",
		image: "desk.jpg",
		involvement: ["Information architecture", "Scenario-Based Task Analysis", "Design & implementation"],
		links: [["Softface Magazine","/view/softface-magazine/index.html"], ["Article: Dieter Rams","/view/softface-magazine/dieter.html"], ["Article: Macintosh","/view/softface-magazine/like-porsche.html"]],
		href: "/view/softface-magazine/",
		video: false,
		visible: true
	},
	{
		title: "Fred Hamelten",
		body: "For Fred Hamelten, we created a concept for a site which showcased the premium and professionalism in Fred Hamelten and his products.",
		image: "fred-hamelten.jpg",
		involvement: ["research & design direction", "Interaction design & animation", "Front-end development", "Responsive design"],
		links: [["Our concept","/view/fred-hamelten/"]],
		href: "/view/fred-hamelten/",
		video: false,
		visible: true
	},
	{
		title: "The 5 second rule",
		body: "In a project to learn HTML5 Canvas and further educate myself in javascript, I created a campaign around the awareness about bacterias on food dropped on the floor.",
		image: "fred-hamelten.jpg",
		involvement: ["Concept", "Sprite animations", "Front-end development", "Art direction"],
		links: [["The campaign","/view/the-5-second-rule/"], ["The inspiration", "http://imgur.com/gallery/nmGYR"]],
		href: "/view/the-5-second-rule/",
		video: false,
		visible: true
	},
	{
		title: "Bunny.prototype",
		body: "This is a game prototype where the goal was to create an innovating concept and develop it to a point where I was able to test and iterate.

With four levels, I was able to experiment with the game mechanics—like wall jumping and traps—to make interesting level designs, and how to teach the mechanics in a cognitive and experimental manner.",
		image: "bunny-prototype.jpg",
		involvement: ["Concept", "Rabbit graphics", "Game development"],
		links: [["The prototype","/view/bunny/"]],
		href: "/view/bunny/",
		video: false,
		visible: true
	}
])
