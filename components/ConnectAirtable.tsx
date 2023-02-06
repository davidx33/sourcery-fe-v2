import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import AirtableEmbed from "./AirtableEmbed";

const ConnectAirtable: FC = () => {
    const { data: session } = useSession();
    const [showConnectAirtableModal, setShowConnectAirtableModal] = useState(false);
    let airtableViewId;

    if (!session) {
        return <></>;
    }

    // @ts-ignore: bug where types don't match from prisma schema 
    airtableViewId = session?.user?.airtableViewId;

    return (
        <div className="rounded-xl bg-white px-6 pt-6 h-[30rem]">
            <div className="flex">
                <h2 className="text-xl font-semibold mr-auto">Your Deal Flow</h2>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://airtable.com/${airtableViewId}`}
                    className="px-5 py-2.5 mr-2 mb-2 border rounded-lg flex font-medium text-sm justify-center"
                >
                    Open in new tab
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 text-gray-600" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                        <path d="M10 14l10 -10"></path>
                        <path d="M15 4l5 0l0 5"></path>
                    </svg>
                </a>
                <button onClick={() => setShowConnectAirtableModal(true)} data-modal-target="connect-airtable-modal" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" type="button">
                    Connect Airtable
                </button>
            </div>
            {airtableViewId
                ? <AirtableEmbed viewId={airtableViewId} />
                : <h1 className="text-2xl text-center text-gray-500 mt-5">Please connect your Airtable.</h1>
            }
            {/* Connect Airtable Modal */}
            <div id="connect-airtable-modal" tabIndex={-1} aria-hidden="true" className={(showConnectAirtableModal ? "" : "hidden ") + "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center items-center backdrop-blur-md"}>
                <div className="relative w-full h-full max-w-md md:h-auto">
                    <div className="relative bg-white rounded-lg shadow">
                        <button onClick={() => setShowConnectAirtableModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="connect-airtable-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900">Connect Your Airtable</h3>
                            <div className="mb-4">
                                <p className="text-sm text-gray-500 mb-2">Where do I find my view ID?</p>
                                <p className="text-sm text-gray-500 mb-2">1. Go to <a className="underline" href="https://airtable.com/">airtable.com</a> and open the workspace containing your tables</p>
                                <p className="text-sm text-gray-500 mb-2">2. Open the table containing your deal flow</p>
                                <p className="text-sm text-gray-500 mb-2">3. Click "Share view"</p>
                                <p className="text-sm text-gray-500 mb-2">4. Copy-paste the view ID from the URL: https://airtable.com/[view ID here]</p>
                            </div>
                            <form className="space-y-6" action="/api/airtable" method="post">
                                <div>
                                    <label htmlFor="airtableViewId" className="block mb-2 text-sm font-medium text-gray-900">Your Airtable View ID</label>
                                    <input type="text" name="airtableViewId" id="airtableViewId" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="shrxLkMH2qjXWP7fC" required></input>
                                </div>
                                <div className="flex">
                                    <input type="submit" value={"Save"} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-auto" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConnectAirtable;