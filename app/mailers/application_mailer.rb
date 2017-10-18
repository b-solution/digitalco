class ApplicationMailer < ActionMailer::Base
  default from: "postmaster@sandbox5f1b43d3cdf342a28294493b7208ae82.mailgun.org"
  layout 'mailer'
end
