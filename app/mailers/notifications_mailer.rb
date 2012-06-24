class NotificationsMailer < ActionMailer::Base
  default :from => "noreply@einarlove.com"
  default :to => "gmail@einarlove.com"

  def new_message(message)
    @message = message
    mail(:subject => "#{message.name} – einarlove.com")
  end
end
