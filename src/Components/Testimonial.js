function Testimonial() {
  return (
    <div>
      <section className="px-4 py-8 bg-gray-900 bg-gradient-to-r from-gray-600 via-red-800 to-gray-600 shadow-2xl">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-3xl text-white font-bold">sign up</h3>
          <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300 md:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
        </div>
        <div className="py-10 flex items-center justify-center gap-x-6 ">
          <a
            href={0}
            className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            For students
          </a>
          <a
            href={0}
            className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            For teacher/Adviser
          </a>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;