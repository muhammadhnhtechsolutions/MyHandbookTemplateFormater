import React from 'react';

const Faq = () => {
  return (
    <div className="container px-5 md:px-20 m-auto">
      <div className="text-center justify-center py-8">
        <h1 className="font-bold text-[rgb(255,153,0)] text-4xl mb-6 droid">Frequently Asked Questions</h1>
        <div className="space-y-4 w-full md:w-3/5 mx-auto">
          <div className="bg-primary rounded-lg p-6 text-left">
            <h2 className="droid font-bold text-lg md:text-xl text-white">
              Q: Is It Easy To Use?
            </h2>
            <p className="text-sm md:text-base montserrat text-white mt-2">
              A: As we shared above, The Family Handbook Process was built with busy parents in mind. Our team has significant experience working with families and helping families to create these valuable tools. We would have loved to add loads of content and videos and additional resources but we wanted to keep things incredibly simple for parents. So we made it very easy to use. The average parent spends less than an hour creating their first draft and is excited to share it with their family.
            </p>
          </div>

          <div className="bg-primary rounded-lg p-6 text-left">
            <h2 className="droid font-bold text-lg md:text-xl text-white">
              Q: What kind of support will I have?
            </h2>
            <p className="text-sm md:text-base montserrat text-white mt-2">
              A: With this platform, the need for support is almost non-existent. It is very user-friendly and literally walks you through a simple step-by-step process. We get very few support requests, but when we do, we are available by e-mail and are very happy to help. In some cases, we will offer a complimentary meeting by phone or by Zoom to address whatever questions a parent might have.
            </p>
          </div>

          <div className="bg-primary rounded-lg p-6 text-left">
            <h2 className="droid font-bold text-lg md:text-xl text-white">
              Q: Does Family Handbook Work With Windows And Mac?
            </h2>
            <p className="text-sm md:text-base montserrat text-white mt-2">
              A: Of course. Family Handbook is cloud-based. All you need is a web browser on your computer, tablet, or phone and you are fine. Family Handbook can be accessed anywhere, anytime.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-6 text-left">
            <h2 className="droid font-bold text-lg md:text-xl text-white">
            Q: Is Family Handbook A Parenting System?
            </h2>
            <p className="text-sm md:text-base montserrat text-white mt-2">
            A: Not exactly. Family Handbook is a software platform built for Parents to be able to quickly and easily build their own customized Family Handbook. It is a fantastic tool to cast vision for your family, in family meetings, during teaching times, coaching your children, and just overall reviews for parents and children to live their purpose and vision...much like CEOs, Coaches, and leaders of successful organizations do.
            </p>
          </div>
          <div className="bg-primary rounded-lg p-6 text-left">
            <h2 className="droid font-bold text-lg md:text-xl text-white">
            Q: How Many Users Do I Get?
            </h2>
            <p className="text-sm md:text-base montserrat text-white mt-2">
            A: When you activate your Lifetime License to Family Handbook for only $67 one time, it includes just one license per family. And because we have priced this so low we hope that you will send your friends and extended family to our site to support our continued development efforts and to continue to encourage parents and families to embrace their Missions and to live intentionally.
            </p>
          </div>

          <div className="bg-primary rounded-lg p-6 text-left">
            <h2 className="droid font-bold text-lg md:text-xl text-white">
              Q: Can I Become An Affiliate of Family Handbook?
            </h2>
            <p className="text-sm md:text-base montserrat text-white mt-2">
              A: At this time we do not have an affiliate program. Though we expect to in the near future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
