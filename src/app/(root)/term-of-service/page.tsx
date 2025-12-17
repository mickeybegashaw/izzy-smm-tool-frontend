import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: December 17, 2024</p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Izzy, you agree to be bound by these Terms of Service and all applicable laws
              and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing
              this service. The materials contained in this service are protected by applicable copyright and trademark
              law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Izzy is a social media management platform that allows users to schedule posts, analyze performance
              metrics, manage multiple social media accounts, and collaborate with team members. We provide tools and
              features to help businesses and individuals optimize their social media presence across various platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Account Registration</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">To use our service, you must:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Be at least 13 years of age or the minimum age required in your country</li>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account password</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Be responsible for all activities that occur under your account</li>
              <li>Not share your account credentials with others</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent
              activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptable Use Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use the service for any illegal purpose or to violate any laws</li>
              <li>Post content that is hateful, threatening, or promotes violence</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Impersonate any person or entity</li>
              <li>Distribute spam, malware, or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use automated systems to access the service without permission</li>
              <li>Violate the terms of service of connected social media platforms</li>
              <li>Reverse engineer, decompile, or disassemble any part of the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Social Media Integration</h2>
            <p className="text-muted-foreground leading-relaxed">
              By connecting your social media accounts to Izzy, you grant us permission to access and manage those
              accounts on your behalf. You are responsible for ensuring you have the necessary rights and permissions to
              post content through our platform. We are not responsible for any violations of social media platform
              policies or any consequences resulting from your use of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The service and its original content, features, and functionality are owned by Izzy and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You retain all rights to the content you upload and post through our service. By posting content, you
              grant us a non-exclusive, worldwide, royalty-free license to use, store, and display your content for the
              purpose of providing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Subscription and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some parts of the service are billed on a subscription basis. You will be billed in advance on a recurring
              and periodic basis. Billing cycles are set on a monthly or annual basis, depending on the subscription
              plan you select.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All fees are in U.S. dollars and are non-refundable except as required by law</li>
              <li>Subscription automatically renews unless cancelled before the renewal date</li>
              <li>You can cancel your subscription at any time from your account settings</li>
              <li>We reserve the right to change our pricing with 30 days notice</li>
              <li>Payment information is processed securely through third-party payment processors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Free Trial</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may offer a free trial for new users. At the end of the trial period, your subscription will
              automatically convert to a paid subscription unless you cancel before the trial ends. No charges will be
              made during the trial period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Availability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide reliable service but do not guarantee that the service will be uninterrupted, timely,
              secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of the service at
              any time with or without notice. We are not liable for any modification, suspension, or discontinuation of
              the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Izzy shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or inability to access or use the service. Our
              total liability shall not exceed the amount you paid us in the twelve months prior to the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              The service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either
              express or implied, including but not limited to warranties of merchantability, fitness for a particular
              purpose, non-infringement, or course of performance. We do not warrant that the service will meet your
              requirements or that it will be error-free or uninterrupted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless Izzy and its officers, directors, employees, and
              agents from any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising
              from your use of the service, your violation of these terms, or your violation of any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your account and access to the service immediately, without prior notice or
              liability, for any reason, including breach of these terms. Upon termination, your right to use the
              service will immediately cease. If you wish to terminate your account, you may do so by discontinuing your
              use of the service and cancelling your subscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the State of California,
              United States, without regard to its conflict of law provisions. Any disputes arising from these terms or
              your use of the service shall be resolved in the state or federal courts located in San Francisco,
              California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these terms at any time. If a revision is material, we will
              provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change
              will be determined at our sole discretion. By continuing to access or use our service after revisions
              become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-muted/50 rounded-lg p-6 border border-border">
              <p className="text-foreground mb-2">
                <strong>Email:</strong> mickeyjob2004@gmail.com
              </p>
            
              <p className="text-foreground">
                <strong>Phone:</strong> +251 979 076-934
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
