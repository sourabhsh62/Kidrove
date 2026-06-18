const outcomes = [
  {
    title: 'Build AI-Powered Robots',
    description: 'Program and assemble robots that can see, listen, and respond using artificial intelligence algorithms.',
    icon: '🤖',
  },
  {
    title: 'Master Python & Scratch',
    description: 'Learn programming fundamentals with Scratch and advance to real-world Python for AI applications.',
    icon: '🐍',
  },
  {
    title: 'Understand Computer Vision',
    description: 'Teach robots to recognize faces, objects, and colors using camera sensors and machine learning.',
    icon: '👁️',
  },
  {
    title: 'Create Voice Assistants',
    description: 'Build your own voice-controlled assistant that understands and executes spoken commands.',
    icon: '🎤',
  },
  {
    title: 'Design Smart Solutions',
    description: 'Apply AI concepts to solve real-world challenges through guided projects and competitions.',
    icon: '🧠',
  },
  {
    title: 'Earn a Certificate',
    description: 'Receive a verified certificate of completion to showcase your new AI and robotics skills.',
    icon: '🏆',
  },
]

const LearningOutcomes = () => {
  return (
    <section id="outcomes" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What your child will learn and achieve by the end of this workshop
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningOutcomes
