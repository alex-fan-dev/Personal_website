export type OtherWorkItem = {
  title: string;
  description: string;
  type: string;
  href: string;
};

export const otherWork: OtherWorkItem[] = [
  {
    title: 'Heart Disease Data Mining',
    description:
      'Built an end-to-end Python data mining workflow for heart disease classification, covering data preparation, feature transformation, machine learning model comparison, and iterative evaluation.',
    type: 'Data Mining',
    href: 'https://github.com/alex-fan-dev/heart-disease-data-mining',
  },
  {
    title: 'Shopify Storefront Development',
    description:
      'Worked on theme customisation, reusable storefront components, responsive behaviour, and testing for a live Shopify store.',
    type: 'Industry Work',
    href: '',
  },
  {
    title: 'Software Testing Case Study',
    description:
      'A testing case study covering test design, execution, and defect reporting.',
    type: 'Testing Case Study',
    href: 'https://potent-sidecar-99c.notion.site/Testing-Case-Study-Jianshu-App-3280db7e7a6080bdb602de7c1a2914db',
  },
];
