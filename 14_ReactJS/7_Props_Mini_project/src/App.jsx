import Card from "./components/Card";

const jobOpenings = [
  {
    company: "Amazon",
    logo: "data:image/jpeg;base64,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",
    posted: "5 days ago",
    title: "Senior UI/UX Designer",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "$120K - $150K",
  },
  {
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    posted: "2 days ago",
    title: "Frontend Developer",
    location: "Hyderabad, India",
    type: "Full Time",
    salary: "$110K - $140K",
  },
  {
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    posted: "1 day ago",
    title: "React Developer",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "$100K - $135K",
  },
  {
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    posted: "3 days ago",
    title: "Product Designer",
    location: "Remote",
    type: "Remote",
    salary: "$130K - $160K",
  },
  {
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    posted: "4 days ago",
    title: "Software Engineer",
    location: "Mumbai, India",
    type: "Full Time",
    salary: "$125K - $155K",
  },
  {
    company: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    posted: "6 days ago",
    title: "UX Researcher",
    location: "Noida, India",
    type: "Part Time",
    salary: "$90K - $120K",
  },
  {
    company: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    posted: "1 week ago",
    title: "Mobile App Developer",
    location: "Remote",
    type: "Remote",
    salary: "$105K - $145K",
  },
  {
    company: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    posted: "2 weeks ago",
    title: "Visual Designer",
    location: "Bangalore, India",
    type: "Full Time",
    salary: "$115K - $150K",
  },
  {
    company: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    posted: "3 days ago",
    title: "Backend Engineer",
    location: "Pune, India",
    type: "Full Time",
    salary: "$100K - $130K",
  },
  {
    company: "Shopify",
    logo: "https://logo.clearbit.com/shopify.com",
    posted: "5 days ago",
    title: "Technical Project Manager",
    location: "Remote",
    type: "Contract",
    salary: "$95K - $125K",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map((job, index) => (
        <Card key={index} {...job} />
      ))}
    </div>
  );
};

export default App;
