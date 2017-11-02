class ContactController < ApplicationController
  def send_mail

    options = {
        name: params[:name],
        email: params[:email],
        phone: params[:phone],
        content: params[:message]
    }
    send_simple_message(options)
    # ContactMailer.welcome_email(options).deliver_now

    redirect_to root_path
  end
  private
  def send_simple_message options
    require 'mailgun'

    mg_client = Mailgun::Client.new("key-e5ace1ac07bac280ebfdd09d389f8e55")
    message_params = {:from    => "mailgun@sandbox5f1b43d3cdf342a28294493b7208ae82.mailgun.org",
                        to: 'contact@digital-co.fr',
                      :subject => "Nouveau message de #{options[:name]} (#{options[:email]})",
                      :text => "#{options[:content]}"
    }

    domain = "sandbox5f1b43d3cdf342a28294493b7208ae82.mailgun.org"
    mg_client.send_message domain, message_params

  end
end
