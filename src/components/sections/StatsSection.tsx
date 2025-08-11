import Container from "../ui/container";

const stats = [
  { number: "8", label: "Years experience", description: "Improving homes with expert craftsmanship for years" },
  { number: "26", label: "Projects completed", description: "Over 250 successful projects delivered with quality and care" },
  { number: "30", label: "Skilled Tradespeople", description: "Our team of 30 experts ensures top-quality results" },
  { number: "100%", label: "Client Satisfaction", description: "All of our clients are satisfied with our work and service" },
];

export default function StatsSection() {
  return (
    <Container className="py-16">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 md:grid-cols-2">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-start gap-2">
            <p className="text-6xl font-medium text-gray-800">{stat.number}</p>
            <p className="text-xl font-semibold text-gray-600">{stat.label}</p>
            <p className="text-lg text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
