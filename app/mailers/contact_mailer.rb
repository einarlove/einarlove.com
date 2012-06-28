#encoding: utf-8
class ContactMailer < ActionMailer::Base

	default :from => "noreply@einarlove.com"
	default :to => "gmail@einarlove.com"

	def new_message(message)
		@message = message
		message.subject = "from #{message.email}"
		mail(:subject => "« einarlove.com » #{message.subject}")
	end

end