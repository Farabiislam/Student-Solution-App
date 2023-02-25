import Testimonial from "./Testimonial";
function Jumbotron() {
  return (
    <>
      <div className="relative justify-center bg-gradient-to-r from-gray-600 via-orange-800 to-gray-600 isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="812"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fill-opacity="0.4"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-red-400 sm:text-4xl">
            Welcome in <br />
            <span className="ml-24 text-white">Student solution.</span>
          </h2>
          <p className="mt-6 text-lg font-bold leading-8 text-gray-300">
            We are here to solve your all problem during student life. We
            provide you all kind facilities student solution actually what you
            needed most.All in one dream app for student.
          </p>
          <p className="text-gray-400">
            We are also encourage teachers or advisor who are willing to help
            students to solve there problem and give a solution
          </p>
        </div>
        {/* <div className="relative mt-16 h-80 lg:mt-8">
          <img
            className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src={0}
            alt="App screenshot"
            width="1824"
            height="1080"
          />
        </div> */}
      </div>
      <Testimonial />
    </>
  );
}

export default Jumbotron;
