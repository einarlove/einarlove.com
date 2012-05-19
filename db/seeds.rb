# encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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
	body: "<p>
		My name is Einar Ágúst Löve, born in Iceland, raised in Norway but lived on the internet once it got its grip on me.</p>
	<p>
		Studied media and communication in gymnas where I experienced film production, animation, graphic design, web design and illustration.</p>
	<p>
		The power to create your own custom worlds on the internet which benefited from imagination and empathy really attracted me. So after gymnas I attended Interaction design at the Norwegian school of creativity in Oslo where I reside and study at this date.</p>",
	layout: "static",
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
