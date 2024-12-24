import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <section className="bg-white">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt=""
                src="/loginPage.svg"
                className="absolute inset-0 h-full w-full object-fill opacity-80 bg-transparent"
              />
    
              <div className="hidden lg:relative lg:block lg:p-12">
    
                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Welcome to VirtualInterviewPrep
    
                </h2>
    
                <p className="mt-4 leading-relaxed text-white/90">
                  Prepare for success with real-time feedback, personalized guidance, and a simulated interview experience tailored to help you shine in your next job interview.
                </p>
    
              </div>
            </section>
    
            <main
              className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
                <SignUp />
            </main>
          </div>
        </section>
  );  
  
}