function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 text-white rounded-md flex items-center justify-center font-bold">
            Q
          </div>
          <div>
            <h1 className="text-xl font-semibold">Quizly</h1>
            <p className="text-xs text-gray-500">
              Simple quizzes for students & teachers
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-indigo-600 font-medium">
            Home
          </a>
          <a href="#features" className="hover:text-indigo-600">
            Features
          </a>
          <a href="#for-teachers" className="hover:text-indigo-600">
            Teachers
          </a>
          <a href="#for-students" className="hover:text-indigo-600">
            Students
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow"
          >
            Sign in
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">
              Make quizzes fast. Teach smarter.
            </h2>
            <p className="mt-4 text-gray-600">
              Create, run and track quizzes with an interface built for
              classrooms. Quick setup, clear results, and easy sharing.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#for-students"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md font-medium"
              >
                Get started — Students
              </a>
              <a
                href="#for-teachers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-indigo-600 text-indigo-600 rounded-md font-medium"
              >
                For teachers
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <li className="text-sm text-gray-500">• No learning curve</li>
              <li className="text-sm text-gray-500">• Real-time results</li>
              <li className="text-sm text-gray-500">• Works on mobile</li>
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
              <div className="h-40 bg-linear-to-r from-indigo-500 to-indigo-300 rounded-lg flex items-center justify-center text-white font-semibold">
                Live Quiz Preview
              </div>
              <div className="mt-4">
                <div className="text-sm text-gray-500">Next quiz</div>
                <div className="mt-2 font-medium">Biology — Chapter 5</div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                  <div>10 questions</div>
                  <div>15 mins</div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-8">
          <h3 className="text-2xl font-semibold">Designed for ease</h3>
          <p className="text-gray-600 mt-2">
            Everything you need for quick quizzes and clear feedback.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold">Create in seconds</h4>
              <p className="text-sm text-gray-500 mt-2">
                Add questions, set timings, and publish — no setup headaches.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold">Live modes</h4>
              <p className="text-sm text-gray-500 mt-2">
                Run quizzes live or let students take them asynchronously.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold">Progress tracking</h4>
              <p className="text-sm text-gray-500 mt-2">
                Easy-to-read reports help you identify class and student needs.
              </p>
            </div>
          </div>
        </section>

        <section id="for-teachers" className="py-8">
          <h3 className="text-xl font-semibold">For teachers</h3>
          <p className="text-gray-600 mt-2">
            Quickly create assessments, schedule quizzes, and export results.
          </p>
        </section>

        <section id="for-students" className="py-8">
          <h3 className="text-xl font-semibold">For students</h3>
          <p className="text-gray-600 mt-2">
            Join quizzes with a code, get instant feedback, and track your
            improvement.
          </p>
        </section>
      </main>

      <footer className="mt-12 border-t bg-white">
        <div className="max-w-6xl mx-auto p-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Quizly - Built for classrooms</div>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-indigo-600">
              Privacy
            </a>
            <a href="#" className="hover:text-indigo-600">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
