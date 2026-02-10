"use client";

const stats = [
  {
    value: "₹12,000+",
    unit: "Crores",
    label: "Processed through our AI lending platform for Fintech Bank",
    metric: "87% faster loan approvals",
  },
  {
    value: "₹450+",
    unit: "Crores",
    label: "In bookings for India's first premium cruise line",
    metric: "85% occupancy rate achieved",
  },
  {
    value: "$600M+",
    unit: "",
    label: "In transactions automated for US fintech platform",
    metric: "99.3% AI categorization accuracy",
  },
  {
    value: "50,000+",
    unit: "",
    label: "Vehicles tracked with predictive analytics",
    metric: "65% reduction in downtime",
  },
];

export function StatsSection() {
  return (
    <section className="bg-stone-100 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-4">
            Proven Track Record with Industry Leaders
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Real results from real projects. Our software powers systems that
            handle billions in value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-stone-200 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <span className="text-4xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </span>
                <br/>
                {stat.unit ? (
                  <span className="text-2xl font-semibold text-primary/80 ml-1">
                    {stat.unit}
                  </span>
                ): <span className="p-3"></span>}
              </div>
              <p className="text-stone-700 mb-3 font-medium">{stat.label}</p>
              <p className="text-sm text-stone-500">{stat.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
