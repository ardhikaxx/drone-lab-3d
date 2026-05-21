import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/30 dark:bg-surface-container-lowest dark:border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-mobile-margin md:px-container-padding py-10 md:py-section-margin max-w-[1440px] mx-auto gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <div className="flex items-center group cursor-pointer">
            <div className="relative flex flex-col">
              <span className="font-display-lg text-lg md:text-xl font-black tracking-[0.3em] text-on-surface uppercase transition-all duration-300 group-hover:tracking-[0.35em]">
                Drone<span className="text-primary dark:text-primary-container">Lab</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary dark:bg-primary-container transition-all duration-500 group-hover:w-full"></span>
            </div>
          </div>
          <p className="font-body-md text-sm md:text-body-md text-on-surface-variant max-w-[300px]">
            © 2026 DroneLab. Aerospace Grade Precision. Built for the frontier.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 md:gap-12 text-sm md:text-body-md">
          <a
            className="font-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors hover:underline"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors hover:underline"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors hover:underline"
            href="#"
          >
            Cookies
          </a>
          <a
            className="font-body-md text-on-surface-variant hover:text-primary dark:hover:text-primary-container transition-colors hover:underline"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
