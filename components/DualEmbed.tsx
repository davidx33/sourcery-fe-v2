import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import AirtableEmbed from "./AirtableEmbed";
import GoogleSheetsEmbed from "./GoogleSheetsEmbed";
import Link from "next/link";
import Hamburger from "./svgs/hamburger";

const DualEmbed: FC = () => {
  const { data: session } = useSession();
  const [showConnectAirtableModal, setShowConnectAirtableModal] =
    useState(false);
  const [showConnectSheetsModal, setShowConnectSheetsModal] = useState(false);
  const [showAddCRM, setShowAddCRM] = useState(true);
  let airtableEmbed;
  let tabName;
  let googleEmbed;
  let sheetName;

  if (!session) {
    return <></>;
  }
  // @ts-ignore: bug where types don't match from prisma schema
  // airtableEmbed = session?.user?.googleSheetsIds.airtableEmbed;

  // @ts-ignore: bug where types don't match from prisma schema

  return (
    <div>
      <div className="flex flex-row justify-between">
        <button
          data-modal-target="connect-sheets-modal"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2 mr-2 "
          type="button"
        >
          +
        </button>
        <div className="flex flex-row">
          <div className="group relative pt-1 pr-5">
            <div className="flex flex-row items-center cursor-pointer focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 ">
              <h2 className="pr-2">View Your Airtables</h2>
              <Hamburger />
            </div>
            <div
              id="dropdownInformation"
              className="hidden group-hover:block absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{session?.user?.name}</div>
                <div className="font-medium truncate">
                  {session?.user?.email}
                </div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
          <div className="group relative pt-1">
            <div className="flex cursor-pointer flex-row items-center  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 mr-2">
              <h2 className="pr-2">View Your Google Sheets</h2>
              <Hamburger />
            </div>
            <div
              id="dropdownInformation"
              className="hidden group-hover:block absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{session?.user?.name}</div>
                <div className="font-medium truncate">
                  {session?.user?.email}
                </div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map over every google sheet and airtable submission here */}

      <div className="rounded-xl bg-white px-6 py-6 h-[30rem]">
        <div className="flex">
          <h2 className="text-xl font-semibold mr-auto pb-5">Your Deal Flow</h2>
          {showAddCRM && (
            <button
              onClick={() => setShowConnectAirtableModal(true)}
              data-modal-target="connect-airtable-modal"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              type="button"
            >
              Connect Airtable
            </button>
          )}
          {showAddCRM && (
            <button
              onClick={() => setShowConnectSheetsModal(true)}
              data-modal-target="connect-sheets-modal"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              type="button"
            >
              Connect Google Sheets
            </button>
          )}

          <Link href="/template">
            <button
              data-modal-target="get-started-with-template-modal"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              type="button"
            >
              Get started with a template
            </button>
          </Link>
        </div>

        <div className="flex h-3/5 items-center justify-center">
          <h1 className="text-2xl text-center text-gray-500">
            Please connect the platform you use for sourcing or get started with
            our template
          </h1>
        </div>

        {/* Connect Airtable Modal */}
        <div
          id="connect-airtable-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={
            (showConnectAirtableModal ? "" : "hidden ") +
            "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center backdrop-blur-md"
          }
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <button
                onClick={() => setShowConnectAirtableModal(false)}
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-hide="connect-airtable-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  Connect Airtable With Shared View ID
                </h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Where do I find my shared view ID?
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    1. Go to{" "}
                    <a className="underline" href="https://airtable.com/">
                      airtable.com
                    </a>{" "}
                    and open the workspace containing your tables
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    2. Open the table containing your deal flow
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    3. Click the "Share view" button in the toolbar (next to the
                    sort and color tools)
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    4. Click the "Create a shareable grid view link"
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    5. Copy-paste the shared view ID from the URL:
                    https://airtable.com/<strong>[Shared View ID Here]</strong>
                  </p>
                </div>
                <form
                  className="space-y-6"
                  action="/api/multipleairtable"
                  method="post"
                >
                  <div>
                    <label
                      htmlFor="airtableEmbed"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your Airtable View ID
                    </label>
                    <input
                      type="text"
                      name="airtableEmbed"
                      id="airtableEmbed"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="shrxLkMH2qjXWP7fC"
                      required
                    ></input>
                  </div>
                  <div>
                    <label
                      htmlFor="airtableEmbed"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      What should we call you Airtable sheet?
                    </label>
                    <input
                      type="text"
                      name="tabName"
                      id="tabName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Lucy's Airtable"
                      required
                    ></input>
                  </div>
                  <div className="flex">
                    <input
                      type="submit"
                      value={"Save"}
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-auto"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Connect Google Sheets Modal */}
      <div
        id="connect-google-sheets-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={
          (showConnectSheetsModal ? "" : "hidden ") +
          "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center backdrop-blur-md"
        }
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              onClick={() => setShowConnectSheetsModal(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="connect-sheets-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Connect Google Sheets with your personal embed link
              </h3>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">
                  Where do I find my personal embed link?
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  1. Go to{" "}
                  <a
                    className="underline"
                    href="https://www.google.com/sheets/about/"
                  >
                    google.com/sheets/about
                  </a>{" "}
                  and open the spreadsheet containing your dealflow
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  2. Click the "File" tab in the top left corner and hover over
                  the "Share" button.
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  3. Click "Publish to Web"
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  4. With "Link" toggled (Link should have a blue underline),
                  click the green publish button in the bottom left corner
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  5. Copy the URL in the textbox below the "Entire Document" and
                  "Web page" toggles
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  6. Paste the URL below and hit "Save"
                </p>
              </div>
              <form
                className="space-y-6"
                action="/api/multiplegoogle"
                method="post"
              >
                <div>
                  <label
                    htmlFor="googleEmbed"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your published Google Sheets link
                  </label>
                  <input
                    type="text"
                    name="googleEmbed"
                    id="googleEmbed"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="https://docs.google.com/spreadsheets/d/e/2PACX-1vRwZClgSjoktofgs3EUkwhGH9poRo4LdiX25pDzcBrnkDK_Dfkx9tiZP699etvlOL6Bs-MU8VxhVHyF/pubhtml"
                    required
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="sheetName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    What should we call your sheet?
                  </label>
                  <input
                    type="text"
                    name="sheetName"
                    id="sheetName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John's CRM"
                    required
                  ></input>
                </div>
                <div className="flex">
                  <input
                    type="submit"
                    value={"Save"}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-auto"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualEmbed;
