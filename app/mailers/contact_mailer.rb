class ContactMailer < ApplicationMailer
  def welcome_email(options={})
    @options = options
    mail(to: 'bilel.kedidi@gmail.com', subject: "(digitalCo) Nouveau message de #{options[:email]} ")
  end
end
