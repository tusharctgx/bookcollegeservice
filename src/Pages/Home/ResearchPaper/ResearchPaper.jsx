
const recommendedResearchPapers = [
  {
    title: 'Business Research Paper 1',
    link: 'https://edubirdie.com/examples/medicine/',
  },
  {
    title: 'Business Research Paper 2',
    link: 'https://edubirdie.com/examples/therapy/',
  },
  {
    title: 'Business Research Paper 3',
    link: 'https://edubirdie.com/examples/marijuana/',
  },
  // Add more recommended research papers if needed
];

const ResearchPaper = () => {
  return (
    <div>
    <h2 className="text-center text-4xl font-bold mt-20 pb-10">College Research Papers</h2>
    <ul>
      {recommendedResearchPapers.map((paper, index) => (
        
        <div className="text-center py-5">
           <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="bg-blue-500 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-800 dark:hover:bg-neutral-700">
       <li key={index}>
          <a  href={paper.link} target="_blank" rel="noopener noreferrer">
            {paper.title}
          </a>
        </li>
      </button>
        </div>
       
      ))}
    </ul>
  </div>
  );
};

export default ResearchPaper;