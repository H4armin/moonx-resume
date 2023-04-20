import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSpring, animated } from "@react-spring/web";

const navigation = [
  { name: "Resume Builder", href: "#" },
  { name: "Resume Templates", href: "#" },
  { name: "CV Templates", href: "#" },
  { name: "Examples", href: "#" },
  { name: "Services", href: "#" },
];

function header() {

    const springs = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
      });
    
      const [state, toggle] = useState(true)
      const { x } = useSpring({
        from: { x: 0 },
        x: state ? 1 : 0,
        config: { duration: 1000 },
      })
      
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white-100">
      <header className="inset-x-0 top-0 z-40 h-14 bg-white-800 sticky bg-white">
        <nav
          className="flex items-center justify-between p-2 lg:px-12"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 color text-black">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only text-black">mooonX</span>
              <img
                className="h-8 w-auto"
                src="https://i.pinimg.com/originals/9c/02/3d/9c023db494d4bf11ee02031e3bab4f22.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-black"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="rounded-md bg-white-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-black"

            >
              Get started
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 ml-0  relative isolate px-1 lg:px-0">
        <div
          className="absolute inset-x-0 -top-40 -z-10 mt-0 transform-gpu overflow-hidden blur-3xl md:mt-0 sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl pb-32 sm:py-48 xl:ml-36 lg:py-12 md:py-12 md:ml-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The online Resume/CV Builder
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Build your brand-new resume in as little as 5 minutes. <br></br>
              By Siri Bot Provide the best suggestions for <br />
              your job description and many more.
            </p>
            <h1 className="text-4xl font-bold mt-4 text-gray-900 sm:text-2xl">
              Try it for free.
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6" onClick={() => toggle(!state)}>
                <animated.div
                    style={{
                    opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                    scale: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                    }),
                    }}>
                    <animated.a  href="#"
                        className="rounded-md bg-white-400 ml-0 px-2 py-2.5 sm:px-3.5 sm:py-2.5 text-sm sm font-semibold bg-indigo-500 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Get started
                    </animated.a>
                </animated.div>
              <h5>No credit card required</h5>
            </div>

          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
        <div className="">
            <animated.div className= " ml-0 ">
                <animated.img className="h-96 w-auto ml-0 lg:ml-4 xl:ml-36 md:ml-36 md:mt-10 lg:mt-20" src="https://www.myperfectresume.com/wp-content/uploads/2022/11/resume-made-with-MyPerfectResume-resume-builder.svg" alt= "altText" style={...springs} />
            </animated.div>
        </div>
      </div>
    </div>
  )
}

export default header