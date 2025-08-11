import { FaInstagram, FaTiktok } from "react-icons/fa";
import Container from "../ui/container";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <div className="mx-4">
      <Container className="bg-black rounded-2xl py-12">
        <div className="">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-8 text-white justify-between">
              <div className="flex flex-col items-start gap-4">
                <div className="flex gap-2 items-center text-sm back bg-[#28282C] rounded-4xl py-2 px-4">
                  <div className="text-white">Contact</div>
                </div>
                <p className="mb-2 text-4xl font-bold">Get in touch</p>
                <p className="mb-8 leading-7 text-xl text-gray-400">
                  For any inquiries or to explore your vision further, we invite  you to contact our professional team using the details provided below.
                </p>
              </div>

              <div className="flex flex-col items-start gap-6">
                <div className="flex gap-4 items-center">
                  <span className="text-white font-bold">Office</span>
                  <span className="font-sm text-gray-400">150 Old Park Ln, London W1K 1QZ</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-white font-bold">Email</span>
                  <span className="font-sm text-gray-400">hello@refit.com</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-white font-bold">Telephone</span>
                  <span className="font-sm text-gray-400">07716 534984</span>
                </div>
                <div>
                </div>
              </div>

              <div>
                Follow Us
                <div className="flex gap-4 mt-2">
                  <FaInstagram className="text-2xl" />
                  <FaTiktok className="text-2xl" />
                  <FaXTwitter className="text-2xl" />
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-lg">
              <form className="flex flex-col gap-6">
                <div >
                  <label htmlFor="firstName" className="mb-2 text-sm text-gray-700 flex">
                    Name
                    <div className="text-red-500">*</div>
                  </label>
                  <input
                    id="firstName"
                    placeholder="John"
                    className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none ring-0 transition focus:border-orange-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 text-sm text-gray-700 flex">
                    Email
                    <div className="text-red-500">*</div>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none ring-0 transition focus:border-orange-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm text-gray-700">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+44789 123456"
                    className="w-full rounded-sm border border-gray-300 px-3 py-2 outline-none ring-0 transition focus:border-orange-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 text-sm text-gray-700 flex">
                    Message
                    <div className="text-red-500">*</div>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Hello, I'd like to enquire about..."
                    rows={4}
                    className="w-full resize-none rounded-sm border border-gray-300 px-3 py-2 outline-none ring-0 transition focus:border-orange-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gray-600 px-6 py-2 text-white transition-colors hover:bg-gray-800"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
