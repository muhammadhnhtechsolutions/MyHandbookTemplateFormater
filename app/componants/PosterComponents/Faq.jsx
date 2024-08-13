import React from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "Memorializes Family Purpose & Direction",
      content: `Provides clarity on family values, goals, and expectations, guiding daily decisions and actions.`,
    },
    {
      title: "Inspires Teamwork",
      content:
        "Strengthens family bonds by fostering open communication and shared understanding.",
    },
    {
      title: "A Visual Constant Anchor For Parents",
      content: `Enables families to preserve and pass down their values, traditions, and aspirations to future generations.`,
    },
  ],
};

const styles = {
  titleTextColor: "white",
  rowTitleColor: "white",
  bgColor: "none",
  rowContentColor: "white",
  titleTextSize: "4xl", // Adjusted for responsiveness
};

const config = {};

function Faqs() {
  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <h1 className="font-bold text-white text-4xl mb-6">Benefits for Families</h1>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}






const data1 = {
  rows: [
    {
      title: "Strengthened Church/Family Bonds",
      content: `Empowers families within the congregation, fostering a sense of belonging and unity.`,
    },
    {
      title: "Enhanced Family Engagement",
      content:
        "Provides churches with a valuable resource to support families in their spiritual journey and community involvement.",
    },
    {
      title: "Long-Term Impact",
      content: `Facilitates the development of strong, resilient families, who are the foundation of thriving church communities.`,
    },
  ],
};

const styles1 = {
  titleTextColor: "white",
  rowTitleColor: "white",
  bgColor: "none",
  rowContentColor: "white",
  titleTextSize: "4xl", // Adjusted for responsiveness
};

const config1 = {};

function Faqss() {
  return (
    <div className="w-full max-w-lg mx-auto px-4">
      <h1 className="font-bold text-white text-4xl mb-6">Benefits for Churches</h1>
      <Faq data={data1} styles={styles1} config={config1} />
    </div>
  );
}

export {
  Faqs,Faqss
}
