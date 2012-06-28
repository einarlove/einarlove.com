SENSITIVE = Hash.new
if Rails.env == "production"
	# Stored in enviroment variable on Heroku
	SENSITIVE["username"] = ENV['ADMIN_USERNAME']
	SENSITIVE["password"] = ENV['ADMIN_PASSWORD']
	SENSITIVE["mail_username"] = ENV['SENDGRID_USERNAME']
	SENSITIVE["mail_password"] = ENV['SENDGRID_PASSWORD']
else
	SENSITIVE["username"] = "admin"
	SENSITIVE["password"] = "admin"
	SENSITIVE["mail_password"] = ""
end
