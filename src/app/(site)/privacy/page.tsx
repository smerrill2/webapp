'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/card"

const PrivacyPage: React.FC = () => {
  return (
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-green-500/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">LawnLogic Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none text-white">
              <p>
                LawnLogic understands that your privacy is important to you. We are committed to protecting the privacy of your personally-identifiable information as you use this website. This Privacy Policy tells you how we protect and use information that we gather from you. By using this website, you consent to the terms described in the most recent version of this Privacy Policy. You should also read our Terms of Use to understand the general rules about your use of this website, and any additional terms that may apply when you access particular services or materials on certain areas of this website. "We," "our" means LawnLogic and its affiliates. "You," "your," "visitor," or "user" means the individual accessing this site.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">PERSONAL AND NON-PERSONAL INFORMATION</h2>
              <p>
                Our Privacy Policy identifies how we treat your personal and non-personal information.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">WHAT IS NON-PERSONAL INFORMATION AND HOW IS IT COLLECTED AND USED?</h2>
              <p>
                Non-personal information is information that cannot identify you. If you visit this website to read information, such as information about one of our services, we may collect certain non-personal information about you from your computer's web browser. Because non-personal information cannot identify you or be tied to you in any way, there are no restrictions on the ways that we can use or share non-personal information.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">What is personal information and how is it collected?</h2>
              <p>
                Personal information is information that identifies you as an individual, such as your name, mailing address, e-mail address, telephone number, and fax number. We may collect personal information from you in a variety of ways:
              </p>
              <ul className="list-disc pl-6 mt-2 text-white">
                <li>When you send us an application or other form</li>
                <li>When you conduct a transaction with us, our affiliates, or others</li>
                <li>When we collect information about you in support of a transaction, such as credit card information</li>
                <li>In some places on this website you have the opportunity to send us personal information about yourself, to elect to receive particular information, to purchase access to one of our products or services, or to participate in an activity.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-4 text-white">ARE COOKIES OR OTHER TECHNOLOGIES USED TO COLLECT PERSONAL INFORMATION?</h2>
              <p>
                Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
              </p>
              <p>
                One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you register with us, a cookie helps LawnLogic to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same LawnLogic website, the information you previously provided can be retrieved, so you can easily use the features that you customized.
              </p>
              <p>
                A web beacon is a small graphic image that allows the party that set the web beacon to monitor and collect certain information about the viewer of the web page, web-based document, or e-mail message, such as the type of browser requesting the web beacon, the IP address of the computer that the web beacon is sent to, and the time the web beacon was viewed. Web beacons can be very small and invisible to the user, but, in general, any electronic image viewed as part of a web page or e-mail, including HTML-based content, can act as a web beacon.
              </p>
              <p>
                We may use web beacons to count visitors to the web pages on the website or to monitor how our users navigate the website, and we may include web beacons in e-mail messages in order to count how many messages sent were actually opened, acted upon, or forwarded.
              </p>
              <p>
                Third-party vendors also may use cookies on our website. For instance, we may contract with third parties who will use cookies on our website to track and analyze anonymous usage and volume statistical information from our visitors and members. Such information is shared externally only on an anonymous, aggregated basis. These third parties use persistent cookies to help us improve the visitor experience, manage our site content, and track visitor behavior. We may also contract with a third party to send e-mails to our registered users/members.
              </p>
              <p>
                To help measure and improve the effectiveness of our e-mail communications, the third party sets cookies. All data collected by this third party on behalf of LawnLogic is used solely by or on behalf of LawnLogic and is shared externally only on an anonymous, aggregated basis.
              </p>
              <p>
                From time to time, we may allow third parties to post advertisements on our website, and those third-party advertisements may include a cookie or web beacon served by the third party. This Privacy Policy does not cover the use of information collected from you by third-party ad servers. We do not control cookies in such third-party ads, and you should check the privacy policies of those advertisers and/or ad services to learn about their use of cookies and other technology before linking to an ad. We will not share your personal information with these companies, but these companies may use information about your visits to this and other websites in order to provide advertisements on this site and other sites about goods and services that may be of interest to you, and they may share your personal information.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
  )
};

export default PrivacyPage;