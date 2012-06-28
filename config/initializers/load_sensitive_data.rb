SENSITIVE = Hash.new
if Rails.env == "production"
	# Stores as constants globaly on Heroku
	SENSITIVE["username"] = ADMIN_USERNAME
	SENSITIVE["password"] = ADMIN_PASSWORD
	SENSITIVE["mail_password"] = GMAIL_PASSWORD
else
	SENSITIVE["username"] = "admin"
	SENSITIVE["password"] = "admin"
	SENSITIVE["mail_password"] = ""
end
