const details = [
  { label: 'Age Group', value: '8–14 Years', icon: '👦' },
  { label: 'Duration', value: '4 Weeks', icon: '📅' },
  { label: 'Mode', value: 'Online (Live)', icon: '💻' },
  { label: 'Fee', value: '₹2,999', icon: '💰' },
  { label: 'Start Date', value: '15 July 2026', icon: '🚀' },
]

const WorkshopDetails = () => {
  return (
    <section id="details" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Workshop Details</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our AI & Robotics Summer Workshop
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {details.map((item) => (
            <div
              key={item.label}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 text-center border border-orange-100 hover:shadow-lg hover:shadow-orange-100 transition-shadow"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-sm text-gray-500 mb-1">{item.label}</div>
              <div className="text-lg font-bold text-gray-900">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkshopDetails
